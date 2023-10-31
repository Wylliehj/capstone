\echo 'Delete and recreate dynamic_restaurat db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE dynamic_restaurant;
CREATE DATABASE dynamic_restaurant;
\connect dynamic_restaurant

\i dynamic_restaurant_schema.sql
\i dynamic_restaurant_seed.sql

\echo 'Delete and recreate dynamic_restaurant_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE dynamic_restaurant_test;
CREATE DATABASE dynamic_restaurant_test;
\connect dynamic_restaurant_test

\i dynamic_restaurant_schema.sql