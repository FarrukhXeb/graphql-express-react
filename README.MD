# GraphQL Express React Apollo Postgres

This repo contains the initial setup to kick start a React Application with GraphQL server using express.

## How to run the application
1. Rename the ```.env.example``` to ```.env```
2. Move into the ```back-end``` and run ```yarn install``` or ```npm install```
3. Same for the ```front-end``` directory
4. Kick start the server and front end. You know what to do

## Postgres Config
1. In the **.env** file change the value of ```PG_DATABASE``` to your desired database.
2. Run ```yarn db:create``` which will create a database in your database server.
3. Run ```yarn db:migrate```.
4. That's it for now play around with it if you want to :P.

## GrapqhQL Playground template
```sh
mutation LOGIN_USER {
  login(input: {email: "user@example.com", password: "test"}) {
    user {
      email
      id
      country {
        name
        abbreviation
      }
    }
  }
}

mutation REGISTER_USER {
  register(input: {email: "user@example.com", password: "test", firstName: "John", lastName: "Snow", countryId: 1}) {
    token
    user {
      id
      firstName
      lastName
      country {
        name
      }
    }
  }
}

mutation CREATE_COUNTRY {
  createCountry(name: "Pakistan", abbreviation: "pk") {
    name
    abbreviation
  }
}

query GET_ALL_USERS {
  users {
    id
    email
    country {
      id
      name
    }
  }
}

query GET_ALL_COUNTRIES {
  countries {
    id
    name
    users {
      id
      email
    }
  }
}

query GET_USER {
  user(id: 4) {
    email
    firstName
    lastName
    country {
      name
    }
  }
}
```
