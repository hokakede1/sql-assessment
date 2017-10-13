module.exports = {
  getUsers: function(req, res, next) {
    const db = req.app.get('db');

    db.read_all_users()
      .then( (users) => res.status(200).send( users ) )
      .catch( (err) => res.status(500).send(err) );
  },

  getVehicles: function(req, res, next) {
      const db = req.app.get('db');

      db.read_all_vehicles()
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( (err) => res.status(500).send(err) );
  },

  createUser: function(req, res, next) {
      const db = req.app.get('db');
      const { name, email } = req.body;

      db.create_user([name, email])
        .then( (response) => res.status(200).send(response) )
        .catch( (err) => res.status(500).send(err.message) );

  },

  createVehicle: function(req, res, next) {
      const db = req.app.get('db');
      const {make, model, year, owner_id} = req.body;

      db.create_vehicle([make, model, year,owner_id])
        .then( (response) => {

          res.status(200).send(response)} )
        .catch( (err) => {

          res.status(500).send(err)} )

  },

  getVehiclesCount: function(req, res, next) {
      const db = req.app.get('db');
      const { userId } = req.params
      console.log(userId);
      db.read_vehicles_count([userId])
      .then( (vehiclesCount) => res.status(200).send( vehiclesCount ) )
      .catch( (err) => {

        res.status(500).send(err)} );

  },

  getBelongVehiclesById: function(req, res, next) {
      const db = req.app.get('db');
      const { userId } = req.params

      db.read_vehicle_by_id([userId])
      .then( ( vehicle ) => res.status(200).send( vehicle ) )
      .catch( (err) => res.status(500).send(err) );

  },

  getBelongVehiclesByEmail: function(req, res, next) {
      const db = req.app.get('db');
      const { userEmail, userFirstStart } = req.query
      if(userEmail){
        db.read_vehicle_by_email([userEmail])
        .then( ( response ) => res.status(200).send( response ) )
        .catch( (err) => res.status(500).send() );
      }
      else {
        db.read_vehicile_by_first([`%${userFirstStart}%`])
        .then( ( response ) => res.status(200).send( response ) )
        .catch( (err) => res.status(500).send() );
      }

  },

  getNewVehicles: function(req, res, next) {
      const db = req.app.get('db');

      db.get_new_vehicles()
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( () => res.status(500).send() );
  },

  editOwner: function(req, res, next) {
      const db = req.app.get('db');
      const {vehicleId, userId} = req.params;

      db.edit_owner([vehicleId, userId])
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( (err) => res.status(500).send(err) );
  },

  removeOwner: function(req, res, next) {
      const db = req.app.get('db');
      const {userId, vehicleId} = req.params

      db.remove_owner([userId, vehicleId])
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( (err) => res.status(500).send(err) );
  },

  removeVehicle: function(req, res, next) {
      const db = req.app.get('db');
      const {vehicleId} = req.params

      db.remove_vehicle([vehicleId])
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( (err) => res.status(500).send(err) );
  }


}
