# hop-monolith

![CircleCI](https://circleci.com/gh/hoptime/hop-monolith.svg?style=svg&circle-token=0621e66291817711447031ede3acd2c1266c4d47)

The server backend and web client for Hop! More documentation to come.

http://graphql.org/learn/queries/#mutations
s
## Configuration

For development this project uses `dotenv` to allow you tp specify environment variables in a static file.

> NOTE: You will need to create a .env file at the root your project with the desired environment variables that are outlined below. You can check out example.env in the project root to see a standard configuration.

## Usage

Utilize the scripts below to use the application:

```
# install dependancies
npm install

# run the server in development mode with nodemon
npm run server-dev

# run the server in debug mode
npm run server-debug

# run the server in production mode
npm run start

# runs webpack-dev-server for ui development
npm run client-dev

# build the front end for production
npm run client-prod

# test the server code (lints code, checks for security vulnerabilities in dependencies and outdated dependencies)
npm run test
```
