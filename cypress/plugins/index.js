const readXlsx = require('./read-xlsx')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = (on, config) => {
        on('task', {
                'readXlsx': readXlsx.read
        })

        allureWriter(on, config);
        return config;
}
