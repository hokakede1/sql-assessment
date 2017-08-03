SELECT *, users.name FROM vehicles
  JOIN users ON users.id = vehicles.owner_id
  WHERE year > 2000;
