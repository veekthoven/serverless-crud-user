'use strict';

const db = require('./database');

//Create
module.exports.createUser = async event => {
  let sql = `INSERT INTO users (name) VALUES('${JSON.parse(event.body).name}')`;

  let results = await db.mysql.query(sql);
 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'User created successfully!'
      },
      null,
      2
    ),
  };
};

// Read
module.exports.readUser = async event => {
  let sql = `SELECT * from users where id = '${event.pathParameters.id}'`;

  let result = await db.mysql.query(sql);

  console.log(result)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'User successfully retrieved!',
        data: result[0]
      },
      null,
      2
    ),
  };
};

// Update
module.exports.updateUser = async event => {
  let sql = `Update users SET name = '${JSON.parse(event.body).name}' where id = '${event.pathParameters.id}'`;

  await db.mysql.query(sql);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Successfully updated!',
      },
      null,
      2
    ),
  };
};

// Delete
module.exports.deleteUser = async event => {
  let sql = `DELETE from users where id = '${event.pathParameters.id}'`;

  await db.mysql.query(sql);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Successfully deleted 😔',
      },
      null,
      2
    ),
  };
};

