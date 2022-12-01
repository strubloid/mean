// move to the admin db - always created in Mongo
db = db.getSiblingDB('admin');

// log as root admin if you decided to authenticate in your docker-compose file...
db.auth("root", "root");

// log of this step before
db.log.insertOne({"message": "Logged as root"});

// create and move to your new database
db = db.getSiblingDB('backend_database');

// log of this step before
db.log.insertOne({"message": "creating backend_database"});

// creating admin user
db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [ { role: 'root', db: 'admin' } ]
  }
);

// creating a backend user
db.createUser({
  'user': "backend",
  'pwd': "backend",
  'roles': [
      {
        'role': 'dbOwner',
        'db': 'backend_database'
      }
    ]
});


// log of this step before
db.log.insertOne({"message": "creating admin user with dbOwner for backend_database"});

// add new post models
db.createCollection('postmodels');

// log of this step before
db.log.insertOne({"message": "creating postmodels table in backend_database schema"});

