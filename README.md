# Space Xplorer Client

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2ccaf6e7f5c340a89c31391094556e47)](https://www.codacy.com/gh/Wyvarn/space-xplorer-client?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Wyvarn/space-xplorer-client&amp;utm_campaign=Badge_Grade)
![Code scanning](https://github.com/Wyvarn/space-xplorer-client/workflows/Code%20scanning/badge.svg)
![NodeJS Package](https://github.com/Wyvarn/space-xplorer-client/workflows/NodeJS%20Package/badge.svg)
![Github Release](https://github.com/Wyvarn/space-xplorer-client/workflows/Github%20Release/badge.svg)
![Sentry Release](https://github.com/Wyvarn/space-xplorer-client/workflows/Sentry%20Release/badge.svg)
![Space Xplorer Client Docker Image Build](https://github.com/Wyvarn/space-xplorer-client/workflows/Space%20Xplorer%20Client%20Docker%20Image%20Build/badge.svg)

UI interface for allowing users to book seats on the next SpaceX launch

## Prerequisites

There are some pre-requisites needed to run this application

### Node (npm or yarn)

You will need node installed on your local development environment. This will include a package manager such as npm or yarn. Preferably yarn due to the dependency management being handled in this case uses `yarn.lock` file. Consult relevant documentation to have these installed

### Docker & Docker Compose

Ensure you have installed docker & docker-compose cli tools in your development environment to be able to run accomanying services that will be required for this frontend application to work. Consult the Docker documentation to be able to install & run docker

## Getting started

Once you have all the tools locally, the rest should be straight forward.

Create a `.env` file in the root of the project. This can be done as below:

``` bash
cp .env.example .env
```

Now run `docker-compose up` in the root of the project

``` bash
docker-compose up
```

> This will start all services specified in the docker-compose file

If you encounter any challenges running the above command, say, port conflicts, run the below command:

``` bash
docker stop $(docker ps -aq)
```

> This will stop all running containers

Now, you can run `docker-compose up` again.

This should get all the services (docker containers) running.

Now, you can install the dependencies:

``` bash
yarn install (or npm install)
```

Now run the application with:

``` bash
yarn start (or npm run start)
```

Runs the app in the development mode.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Access the frontend application on `http://localhost:3000`

That should be it for getting up & running :).

### Available Scripts

In the project directory, you can also run:

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### yarn lint

Checks for any linting issues with ESlint & TypeScript configurations. Other plugins are included, check [here](./eslintrc.js) for a list of plugins

#### yarn lint:fix

Fixes any linting issues found

#### yarn stylelint:fix

Fixes SCSS linting issues found

#### yarn serve

Serge static assets. This is to emulate how the application will work behind a static server. This has to be run after `yarn build` to generate bundle

#### yarn test

Runs unit tests

#### yarn test:cover

Runs tests & generates a coverage report

## Running application with Docker

We have built the application to make it portable & to do this, we have used Docker to containerize application & make it run in any environment.

Build a docker container for this application with:

``` bash
docker build -t wyvarn/space-xplorer-client:<TAG> .
```

> Where TAG is the name of the tag to use, if not put, this defaults to latest. Note that the image could be given any other name

Once the image is built, you can run the application in container with the following command:

``` bash
docker run --name space-xplorer-client -p 8080:8080 wyvarn/space-xplorer-client:<TAG
```

> TAG is the tag you set earlier when building the image, note that the --name flag is optional & can be set to something else

This should give you an output similar to this:

``` bash
2020-06-19T10:18:12: PM2 log: Launching in no daemon mode
2020-06-19T10:18:12: PM2 log: [Watch] Start watching space-xplorer-client
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:0] starting in -cluster mode-
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:0] online
2020-06-19T10:18:12: PM2 log: [Watch] Start watching space-xplorer-client
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:1] starting in -cluster mode-
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:1] online
2020-06-19T10:18:12: PM2 log: [Watch] Start watching space-xplorer-client
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:2] starting in -cluster mode-
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:2] online
2020-06-19T10:18:12: PM2 log: [Watch] Start watching space-xplorer-client
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:3] starting in -cluster mode-
2020-06-19T10:18:12: PM2 log: App [space-xplorer-client:3] online
...
```

> This output is from PM2 which is serving the application via Express Server handling static assets

Consult [PM2](https://pm2.keymetrics.io/) documentation for further instructions if you want to extend & improve on how 
this application is run :simple_smile: Configuration can be found [here](./server/ecosystem.config.js)

If the preference is using [Nginx](https://www.nginx.com/) to serve static content, we got you. There is a [Dockerfile](./Dockerfile.static)
that already caters for this & the build process is pretty much the same:

``` bash
docker build -f Dockerfile.static -t wyvarn/space-xplorer-client:<TAG> .
```

> Note that you have to pass in the Dockerfile path & you can tag the name however you want.

To run the application

``` bash
docker run --name space-xplorer-client -p 8080:80 wyvarn/space-xplorer-client:<TAG
```

> Note the difference in the port mapping as this has been set [here](./conf/conf.d/default.conf) to listen on 80

That should be it.

You will notice that this has been built to have dynamic Environment variables set as is specified in [this](./env.sh) shell script
which has been baked into the build process when running a build. This is to allow switching environment variables when
running in different contexts without triggering a new build in a pipeline. This is useful for cases when using Docker containers
However, the normal build pipeline with a CI should already cater fo this.

## Built With

1. [JavaScript](https://www.javascript.com/) - Source language
2. [TypeScript](https://www.typescriptlang.org/) - Source language
3. [ESLint](https://eslint.org/) - JavaScript linter
4. [ReactJS](https://reactjs.org) - Frontend Library
5. [Node](https://nodejs.org/en/)
6. [Jest](https://jestjs.io) - Test framework
8. [React Router](https://reacttraining.com/react-router/) - React routing for web
9. [SASS/SCSS]((http://sass-lang.com/)) - Styling
10. [GraphQL](https://graphql.org/)
11. [Apollo GraphQL](https://www.apollographql.com/)

## Contributing

Please read [contributing guide](./.github/CONTRIBUTING.md) for more information

## Versioning

We use [SemVer](https://semver) for versioning. For the versions available, see the [tags](https://github.com/inmdigitalfactory/website-campaign-landing/tags) in this repository.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
