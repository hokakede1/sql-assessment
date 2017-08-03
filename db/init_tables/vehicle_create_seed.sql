-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS vehicles;

-- === CREATE TABLE ==================

-- Complete the create table statement below. The table should have the following columns:

-- id         should be an auto-incrementing number, primary key
-- make       should be a string
-- model      should be a string
-- year       should be a number
-- owner_id   should be a number, foreign key

CREATE TABLE IF NOT EXISTS vehicles (
  id INTEGER PRIMARY KEY,
  make TEXT,
  model TEXT,
  year INTEGER,
  owner_id INTEGER
);

-- === INSERT STATEMENT ===============

-- Complete the insert statement below. The values below need to be inserted into the 'vehicles' table.

INSERT INTO vehicles
VALUES
(1,'Toyota', 'Camry', 1991, 1),
(2,'Honda', 'Civic', 1995, 1),
(3,'Ford', 'Focus', 2005, 1),
(4,'Ford', 'Taurus', 2003, 2),
(5,'VW', 'Bug', 2010, 2),
(6,'Mini', 'Cooper', 2013, 3);
