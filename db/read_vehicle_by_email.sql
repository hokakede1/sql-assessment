SELECT * FROM users
  JOIN vehicles ON vehicles.owner_id = users.id
  WHERE email = $1;
  
