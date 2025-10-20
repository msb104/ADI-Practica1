/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("_pb_users_auth_");

    if (!collection) {
      throw new Error("No se encontró la colección de usuarios (_pb_users_auth_) para aplicar la migración.");
    }

    const createField = (config) => {
      if (typeof SchemaField === "function") {
        return new SchemaField(config);
      }
      return config;
    };

    const pushField = (config) => {
      const field = createField(config);
      const schema = collection.schema;

      if (schema && typeof schema.addField === "function") {
        schema.addField(field);
        return;
      }

      if (Array.isArray(schema)) {
        schema.push(field);
        return;
      }

      if (schema && Array.isArray(schema.fields)) {
        schema.fields.push(field);
        return;
      }

      if (!schema) {
        collection.schema = [field];
        return;
      }

      throw new Error("La colección de usuarios no permite añadir campos (schema no soportado).");
    };

    pushField({
      "autogeneratePattern": "",
      "hidden": false,
      "id": "text9217340051",
      "max": 120,
      "min": 0,
      "name": "name",
      "pattern": "",
      "presentable": true,
      "primaryKey": false,
      "required": false,
      "system": false,
      "type": "text"
    });

    pushField({
      "autogeneratePattern": "",
      "hidden": false,
      "id": "text4039128675",
      "max": 30,
      "min": 0,
      "name": "phone",
      "pattern": "^[+0-9\\s-]{0,30}$",
      "presentable": false,
      "primaryKey": false,
      "required": false,
      "system": false,
      "type": "text"
    });

    pushField({
      "autogeneratePattern": "",
      "hidden": false,
      "id": "text5182067340",
      "max": 1000,
      "min": 0,
      "name": "bio",
      "pattern": "",
      "presentable": false,
      "primaryKey": false,
      "required": false,
      "system": false,
      "type": "text"
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("_pb_users_auth_");

    if (!collection) {
      throw new Error("No se encontró la colección de usuarios (_pb_users_auth_) para revertir la migración.");
    }

    const removeField = (fieldId) => {
      const schema = collection.schema;

      if (schema && typeof schema.removeField === "function") {
        schema.removeField(fieldId);
        return;
      }

      if (Array.isArray(schema)) {
        const index = schema.findIndex((field) => field && field.id === fieldId);
        if (index !== -1) {
          schema.splice(index, 1);
        }
        return;
      }

      if (schema && Array.isArray(schema.fields)) {
        const index = schema.fields.findIndex((field) => field && field.id === fieldId);
        if (index !== -1) {
          schema.fields.splice(index, 1);
        }
        return;
      }

      throw new Error("La colección de usuarios no permite eliminar campos (schema no soportado).");
    };

    removeField("text9217340051");
    removeField("text4039128675");
    removeField("text5182067340");

    return app.save(collection);
  },
);
