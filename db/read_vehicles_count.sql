SELECT * FROM vehicles
  GROUP BY owner_id
  HAVING owner_id = $1;
  HAVING COUNT(*) > 2;
