# Pre: Install Node 

## Check it is install properly 
    node -v
    npm -v

### Step 1: npm init
---
        Initialize the project and Install package.json 
### Step 2: npm install cypress --save-dev
---
        Install cypress
### Step 3: npx cypress open
---
        Open the cypress runner.
### Step 4: npm install -D cypress-xpath
---
        install xpath dependency
        also add a "require('cypress-xpath');" in support > e2e.js

### Step 5: Configure the cucumber install following command
---
    npm install -D cypress-cucumber-preprocessor

## Step 5.1 Add bellow code in the package.json
        "cypress-cucumber-preprocessor":{
        "nonGlobalStepdefinitions":false,
        "step_definitions": "cypress/e2e/cucumber/stepDefinitions/*"
        }
## Step 5.2 Add bellow code in the cypress.config.js 

const cucumber =require('cypress-cucumber-preprocessor').default
         
       

## Step 5.3 Add bellow code in the cypress.config.js in e2e: { }

        e2e: {
             setupNodeEvents(on, config) {
             on('file:preprocessor',cucumber())
             // implement node event listeners here
             return require('./cypress/plugins/index.js')(on, config)
              },
         specPattern:"cypress/e2e/cucumber/feature/*.feature",
         baseUrl: `https://webdriveruniversity.com/`,
  },

## Step 5.4 Folder creation
        1. Create a cucumber folder under the e2e folder
        2. Under the cucumber folder > create a feature folder and stepDefinition
        3. cucumber file save with ".feature extension" and stepDefinition file save with ".js"

## Step 5.5 Need to install some extension
        * Cuke step Definition generator:
                It use to create a step definition file. 
        * Cucumber:
                It use to Autocomplete of gherkin steps.
        * Cucumber (Gherkin) Full Support:
                If use to improving of steps suggestions list and minimization of user edits after step inserting:

### Install mocha report. Required dependency
---
    1. npm install -D mocha
    2. npm install -D cypress-multi-reporters
    3. npm install -D mochawesome
    4. npm install -D mochawesome-merge
    5. npm install -D mochawesome-report-generator

### Run code in Docker
---
1. Install Docker
2. Add a Dockerfile
3. docker-compose.yml
4. dockerignore
5. hit the command to run the code:
>               docker-compose -f docker-compose.yml up  
