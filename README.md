# API with Node.js and Express

## Tools we will need for building a CRM Prototype 
 Framer X will be used for the overall UX/UI Design
 The Language will be Typescript.

 ## Tools for the CRM Backend 
 * Node js
 * Express
 * Mongo DB
 * Babel

 ## step by step
 - Download Postman and create an account.
 - install node.js
 - create a folder 
    - initialize npm in that folder (npm init)
    - install express (npm install express --save)
- install mongoDB on pc
    - if you're on a mac make sure Homebrew is installed
    - follow the instructions on the page to install and run Mongo db
- install mongo in project
    - npm install mongodb mongoose
- install bable 
    - npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
- install more packages 
    - npm install body-parser and nodemon
- change initial script
    - it will allow to run our server 
    - to make sure babel can transpile the code it should look like this: "scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
  }

- create the start file (index.js)
    - add a get function with the request
- create a .babelrc file and set the preset

