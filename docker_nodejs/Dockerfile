FROM ubuntu:14.04
MAINTAINER Nelson David Padilla H. <phndavid@gmail.com>
RUN apt-get update && apt-get install -y wget && apt-get install -y python && apt-get install -y build-essential
RUN wget http://nodejs.org/dist/v0.10.4/node-v0.10.4.tar.gz
RUN tar zxf node-v0.10.4.tar.gz
WORKDIR node-v0.10.4
RUN ./configure
RUN make &&  make install
RUN npm cache clean -f && npm install -g n && n stable
RUN ln -sf /usr/local/n/versions/node/6.6.0/bin/node /usr/bin/node
ADD smartsports /usr/src/smartsports
WORKDIR /usr/src/smartsports
EXPOSE 3000
CMD node server.js