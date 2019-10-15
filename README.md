# Basic Webpack Server App

This is meant to be an example/template of how to use Webpack in the Backend for rapid development.

TODO: Simple endpoints that store and retrieve values


## Dependencies
Node v8+ and npm
  (tested with node v8.12.0 and v10.15.1)

See [package.json](https://github.com/devlinjunker/template.node.hapi/blob/master/package.json) for full list of current dependencies
 - Hapi v18
 - Webpack + Loaders
 - Babel
 - FlowJS
 - ESLint
 - Mocha, Chai, Sinon
 - EsDoc

## Development

How to use this template to create a quick HTTP REST server:

1. Download and update dependencies
2. Add Tests and Controller Files to `src/controllers/`
  - For now, add reference to controller in `src/entry.js`
3. Run `npm run start-watch` to compile and run server + tests in watch mode
4. Navigate to http://localhost:3333/your_new_endpoint to make a request and see the response

### Tests/Running

`npm run start-watch` to run open the server and run Webpack to watch for changes, recompiling, running the tests and restarting the server when it is done

`npm run test-watch` to run Mocha and with all tests associated with the project, watch for changes on the files to re-run the tests

`npm run dev-watch` to run only webpack and watch for changes on the files to recompile and reload the server

`npm run test` to run all of the unit tests for the application one time

`npm run dev` to run a development version of the server

`npm run build` to compile development version of server to `dist/`

`npm run doc` to generate static documentation in the doc folder

`npm run clean` clean the workspace (remove `dist/`)

`npm run help` to print the contents of `help.txt` to the command line

**TODO**

`npm run build-prod` ... TODO: compile application to production version

`npm start` .. TODO: start production Server

`npm stop` .. TODO: stop production Server

`npm restart` will restart once start/stop completed


## Notes/Ideas

 - OPTIONS requests?

### TODO

 - [x] (^) Node 8
 - [x] (^) Webpack  
      - https://medium.com/@christossotiriou/speed-up-nodejs-server-side-development-with-webpack-4-hmr-8b99a932bdda  
      - [x] babel
        - [x] sourcemap support
        - https://www.npmjs.com/package/babel-plugin-source-map-support#description
      - [x] flow webpack plugin - typechecking each compilation
      - [x] eslinting  
      - [x] test with mocha
      - [x] nodemon to run server
      - [ ] (v) production vs dev
        - pm2 for production
        - proper logging
 - [x] (^) Update Linting Rules (linewrap, length, etc)  
      - ensuring files start with a comment https://github.com/Stuk/eslint-plugin-header  
      - Require Comments https://eslint.org/docs/rules/require-jsdoc and valid https://eslint.org/docs/rules/valid-jsdoc  
      - Headers  
 - [ ] (^) Simple DB endpoint  
      - MongoDB
      - PostgreSQL or MariaDB
      - ElasticSearch? for search endpoint
 - [ ] (^) OpenAPI (Swagger) Documentation and ESDoc Plugin https://swagger.io/docs/specification/about/  
      - OpenAPI Validation  
 - [..] (^) Chai as promised and sinon-chai  
 - [ ] (^) Config.yaml and Env config file
     - port
     - other services/apis later?
     -overrides
 - [ ] (-) Headers
 - [ ] (-) Require Node v8 and recommend v10 on build
 - [ ] (-) `bin/` directory with script named `node.hapi` for starting/stopping prod
 - [ ] (-) Automatically find controller files in entry rather than need to reference  
 - [ ] (-) Add logging with Winston/Bunyon
    - pino logs to file too?
 - [ ] (-) Run only affected tests on file save  
 - [ ] (-) Githooks for generating reports/linting  
 - [ ] (v) ESDoc plugins https://medium.com/trabe/understanding-esdoc-plugins-d9ee9095d98b  
 - [ ] (v) Cucumber.js for BDD(Behavior Driven Development) testing http://cucumber.github.io/cucumber-js/  
 - [ ] (v) Test coverage saved in spec files  
 - [ ] (v) Babel Istanbul(NYC) plugin https://github.com/istanbuljs/babel-plugin-istanbul  
 - [ ] (v) Istanbul (NYC) Reporters https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib  
 - [x] (v) ESDoc Manual https://doc.esdoc.org/github.com/esdoc/esdoc/manual/feature.html#integration-manual  
 - ~~[ ] Docsify?~~  

### Application

 - [ ] GET/POST/PUT/DELETE Note endpoints
 - [ ] Garbage UPC (External API) endpoint
    - Map to information/notes?
 - [ ] Connect to Google Drive/Oauth
 - [ ] Authorized vs Unauthorized endpoints
 - [ ] SSO Server


## Issues

```
events.js:183
      throw er; // Unhandled 'error' event
      ^

Error: spawn mocha ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:190:19)
    at onErrorNT (internal/child_process.js:362:16)
    at _combinedTickCallback (internal/process/next_tick.js:139:11)
    at process._tickCallback (internal/process/next_tick.js:181:9)
```

- Made sure using node v8 and re-ran `npm install -D`


```
module.js:550
    throw err;
    ^

Error: Cannot find module 'babel-polyfill'
```

- Commented out line `polyfill: "@babel/polyfill",` in webpack.config.js
- re-ran webpack `npm run build`
- then uncommented line and ran `npm run start-watch`
