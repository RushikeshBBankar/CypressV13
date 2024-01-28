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
    npm install @badeball/cypress-cucumber-preprocessor
    npm install cypress-fill-command
    npm install @cypress/webpack-preprocessor


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
