
var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var port = 3000;
var ipaddress = "192.168.131.174";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));


// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
var config = {
  user: 'pi', //env var: PGUSER
  database: 'swn', //env var: PGDATABASE
  password: 'security++', //env var: PGPASSWORD
  host: '192.168.131.175', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);
var id = "";
var device = "";
// to run a query we can acquire a client from the pool,
// run a query on the client, and then return the client to the pool
pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT * FROM devices', function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('error running query', err);
    }
    id = result.rows[0].id;
    device = result.rows[0].device_name
    console.log(result);
    //output: 1
  });
});
app.get('/api/device', function(req, res){
  res.send('id:'+ id +" device:"+device);
});
pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error('idle client error', err.message, err.stack)
})

//Web server initialization
app.listen(port, ipaddress, function() {
  console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), ipaddress, port);
 });