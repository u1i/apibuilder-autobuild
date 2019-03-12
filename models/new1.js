var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('new1', {
    "connector": "memory",
    "fields": {
        "stuff": {
            "type": "string"
        }
    },
    "actions": []
});
module.exports = Model;