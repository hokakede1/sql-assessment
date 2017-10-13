INSERT INTO vehicles (make, model, year, owner_id)
VALUES ($1, $2, $3, $4);
select * from vehicles where make = $1 and model = $2;
