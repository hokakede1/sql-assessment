module.exports = {
  getUsers: function(req, res, next) {
    const db = req.app.get('db');

    db.read_all_users()
      .then( (users) => res.status(200).send( users ) )
      .catch( () => res.status(500).send() );
  },

  getVehicles: function(req, res, next) {
      const db = req.app.get('db');

      db.read_all_vehicles()
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( () => res.status(500).send() );
  },

  createUser: function(req, res, next) {
      const db = req.app.get('db');
      const { name, email } = req.body;

      console.log(name, email);

      // const dbInstance = req.app.get('db');
      // const { name, description, price, imageurl } = req.body;

      // dbInstance.create_product([name, description, price, imageurl])
      // .then( () => res.status(200).send() )
      // .catch( () => res.status(500).send() );

      db.create_user([name, email])
        .then( (response) => res.status(200).send(response) )
        .catch( (err) => res.status(500).send(err.message) );

  },

  createVehicle: function(req, res, next) {
      const db = req.app.get('db');
      const {make, model, year, owner_id} = req.body;

      db.create_vehicle([make, model, year,owner_id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )

  },

  getVehiclesCount: function(req, res, next) {
      const db = req.app.get('db');
      const { params } = req

      db.read_vehicles_count([params.userId])
      .then( (vehiclesCount) => res.status(200).send( vehiclesCount ) )
      .catch( () => res.status(500).send() );

  },

  getBelongVehiclesById: function(req, res, next) {
      const db = req.app.get('db');
      const { params } = req

      db.read_vehicles_by_id([params.userId])
      .then( ( vehicle ) => res.status(200).send( vehicle ) )
      .catch( () => res.status(500).send() );

  },

  getBelongVehiclesByEmail: function(req, res, next) {
      const db = req.app.get('db');
      const { query } = req

      db.read_vehicles_by_email([query.userEmail])
      .then( ( response ) => res.status(200).send( response ) )
      .catch( () => res.status(500).send() );



  },

  getNewVehicles: function(req, res, next) {
      const db = req.app.get('db');

      db.get_new_vehicles()
        .then( (vehicles) => res.status(200).send( vehicles ) )
        .catch( () => res.status(500).send() );
  },

  editOwner: function(req, res, next) {
      const db = req.app.get('db');
  },

  removeOwner: function(req, res, next) {
      const db = req.app.get('db');
  },

  removeVehicle: function(req, res, next) {
      const db = req.app.get('db');
  }


}
