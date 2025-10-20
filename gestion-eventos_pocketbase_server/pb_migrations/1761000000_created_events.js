/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    const collection = new Collection({
      "createRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id = owner",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text4021147611",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text2387641021",
          "max": 200,
          "min": 1,
          "name": "title",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text3129074655",
          "max": 0,
          "min": 3,
          "name": "category",
          "pattern": "^(trabajo|personal|ocio|salud|educacion|familia)$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text3942675180",
          "max": 10,
          "min": 10,
          "name": "date",
          "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1784620940",
          "max": 5,
          "min": 0,
          "name": "time",
          "pattern": "^(?:[01]\\d|2[0-3]):[0-5]\\d$",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text2376419200",
          "max": 255,
          "min": 0,
          "name": "location",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "number2857461902",
          "max": 1440,
          "min": 0,
          "name": "duration",
          "noDecimal": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text3654782109",
          "max": 5000,
          "min": 0,
          "name": "description",
          "pattern": "",
          "presentable": false,
          "primaryKey": false,
          "required": false,
          "system": false,
          "type": "text"
        },
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text4801629375",
          "max": 0,
          "min": 3,
          "name": "priority",
          "pattern": "^(baja|media|alta|urgente)$",
          "presentable": false,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "bool5172046931",
          "name": "reminder",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
        },
        {
          "cascadeDelete": false,
          "collectionId": "_pb_users_auth_",
          "hidden": false,
          "id": "relation6182740395",
          "maxSelect": 1,
          "minSelect": 1,
          "name": "owner",
          "presentable": false,
          "required": true,
          "system": false,
          "type": "relation"
        },
        {
          "hidden": false,
          "id": "autodate6102748391",
          "name": "created",
          "onCreate": true,
          "onUpdate": false,
          "presentable": false,
          "system": false,
          "type": "autodate"
        },
        {
          "hidden": false,
          "id": "autodate7902136540",
          "name": "updated",
          "onCreate": true,
          "onUpdate": true,
          "presentable": false,
          "system": false,
          "type": "autodate"
        }
      ],
      "id": "pbc_8621047395",
      "indexes": [
        "CREATE INDEX `idx_events_owner` ON `events` (`owner`)",
        "CREATE INDEX `idx_events_date` ON `events` (`date`)"
      ],
      "listRule": "@request.auth.id = owner",
      "name": "events",
      "system": false,
      "type": "base",
      "updateRule": "@request.auth.id = owner",
      "viewRule": "@request.auth.id = owner"
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("events");

    return app.delete(collection);
  },
);
