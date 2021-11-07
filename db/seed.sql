DROP TABLE tweets;

create table tweets(
  id SERIAL PRIMARY key,
  tweet text
);

--Alter Tables 

INSERT INTO tweets (tweet) VALUES ('Hello World');