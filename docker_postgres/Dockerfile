FROM ubuntu
MAINTAINER Nelson David Padilla H. <phndavid@gmail.com>
RUN apt-get update && apt-get install -y postgresql postgresql-contrib
WORKDIR /var/lib/pgsql/*/data/
ADD file/pg_hba.conf pg_hba.conf
WORKDIR /var/lib/pgsql/*/data/
ADD file/postgresql.conf postgresql.conf
WORKDIR /tmp/
ADD file/create_schema.sql create_schema.sql
WORKDIR /tmp/
CMD psql < create_schema.sql
EXPOSE 5432