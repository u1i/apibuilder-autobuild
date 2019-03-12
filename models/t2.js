var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('t2', {
    "connector": "memory",
    "fields": {
        "a1": {
            "type": "string"
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