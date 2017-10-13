SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year FROM vehicles
  JOIN users ON vehicles.owner_id = users.id
  WHERE email = $1;
