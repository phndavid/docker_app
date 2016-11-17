FROM ubuntu
MAINTAINER Nelson David Padilla H. <phndavid@gmail.com>
RUN apt-get update && apt-get install -y wget && apt-get install -y python && apt-get install -y build-essential
RUN wget http://nodejs.org/dist/v0.10.4/node-v0.10.4.tar.gz
RUN tar zxf node-v0.10.4.tar.gz
WORKDIR node-v0.10.4
RUN ./configure
RUN make &&  make install
ADD smartsports /smartsports
WORKDIR /smartsports
EXPOSE 3000
CMD node server.js