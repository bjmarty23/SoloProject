
# Water ya up to 

This mobile website lets you easily find local pulic water access.  Whether you are looking for a restroom, a water fountain to fill up your water bottle, or a pet friendly restuarant you will find it here.  This apps data is crowd sourced so if you find a new gem feel free to add it.  

## Getting Started

 * Create database and table

```SQL
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
```

 * Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure.
* Start postgres `brew services start postgresql`
* Run `npm run dev`


### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Herkoku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security


## Built With

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [React.js](https://Reactjs.org/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* Brittany Marty - (https://github.com/bjmarty23)


## Acknowledgments

* Prime Digital Academy

