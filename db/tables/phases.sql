CREATE TABLE phases(
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  user_id integer NOT NULL REFERENCES users(id),
  UNIQUE (name, user_id)
);
