
import './commands'
//import '@shelex/cypress-allure-plugin';

require('cypress-xpath');

import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

import addContext from "mochawesome/addContext"

Cypress.on('test:after:run',(test,runnable)=>{
        if(test.state==='failed'){
                const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} --${test.title} (failed).png`
                addContext({test},screenshot)
        }

})