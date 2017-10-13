UPDATE vehicles SET owner_id = NULL WHERE id = $2 and owner_id = $1
RETURNING *;
