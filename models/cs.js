var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('cs', {
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string",
            "required": true
        }
    },
    "actions": []
});
module.exports = Model;