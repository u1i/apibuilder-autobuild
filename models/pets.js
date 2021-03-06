var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('pets', {
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string",
            "required": true
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;