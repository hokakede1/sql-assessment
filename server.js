const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
// massive({
//   host: 'ec2-107-20-250-195.compute-1.amazonaws.com',
//   port: '5432',
//   database: 'd18qjttfp3j1v9',
//   user: 'yuxdsnfvyoidmg',
//   password: 'f91fc26611b2bcb6a24f09cb68b8e33053f2b236b4348907d2cf1e8314ac1345'
// })
var connection = 'postgres://yuxdsnfvyoidmg:f91fc26611b2bcb6a24f09cb68b8e33053f2b236b4348907d2cf1e8314ac1345@ec2-107-20-250-195.compute-1.amazonaws.com:5432/d18qjttfp3j1v9?ssl=true'
massive(connection).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============

app.get('/api/users', mainCtrl.getUsers);
app.get('/api/vehicles', mainCtrl.getVehicles);
app.post('/api/users', mainCtrl.createUser);
app.post('/api/vehicles', mainCtrl.createVehicle);
app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehiclesCount);
app.get('/api/user/:userId/vehicle', mainCtrl.getBelongVehiclesById);
app.get('/api/vehicle', mainCtrl.getBelongVehiclesByEmail);
app.get('/api/newervehiclesbyyear', mainCtrl.getNewVehicles);
app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.editOwner);
app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwner);
app.delete('/api/vehicle/:vehicleId', mainCtrl.removeVehicle);





// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
