var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('composite1', {
    "connector": "composite",
    "fields": {
        "name": {
            "type": "string",
            "required": true,
            "model": "cs",
            "name": "name"
        },
        "customers": {
            "model": "customers",
            "type": "array"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ],
    "metadata": {
        "primarykey": "id",
        "primaryKeyDetails": {
            "autogenerated": true
        },
        "inner_join": [
            {
                "model": "customers",
                "join_properties": {
                    "name": "name"
                }
            }
        ]
    }
});
module.exports = Model;