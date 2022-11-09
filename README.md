# B.Woman Canarias. 

This project is a basic application for a clothing store in Ionic (frontend) and NodeJS (backend) using Sequelize as ORM to access a MySQL database.


## Getting Started

Download links:

From Github: https://github.com/anavanesa77/WomanIonicExpressSequelize

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/anavanesa77/WomanIonicExpressSequelize.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd WomanIonicExpressSequelize-master/frontend
npm install

cd WomanIonicExpressSequelize-master/backend
npm install
```

* For your backend part:
1. You need a mysql server working.

2. You need to create db_woman database without password for connection to your MySQL server.

3. Inside the file db.config.js include the following info:
```js
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "db_woman",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
};
```

Finally to start enjoying this project.

```
cd WomanIonicExpressSequelize-master/backend
npm node.js

cd WomanIonicExpressSequelize-master/frontend
ionic serve --lab

```

## Postman

You can test the backend is running with Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23242060-77d96949-b2cc-4a6d-bd2e-68eca7c5c715?action=collection%2Ffork&collection-url=entityId%3D23242060-77d96949-b2cc-4a6d-bd2e-68eca7c5c715%26entityType%3Dcollection%26workspaceId%3Df0ac5b98-26b0-4d2f-8b6e-b3cc58c39e87)

[Link to the API documentation](https://documenter.getpostman.com/view/23380032/2s8YeiwbA8)

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
