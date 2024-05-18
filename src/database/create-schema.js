const { QueryTypes } = require("sequelize");
const sequelize = require("./lib/sequelize");

const createSchema = async () => {
  try {
    const schemaName = process.env.SCHEMA;
    const query = `SELECT schema_name FROM information_schema.schemata WHERE schema_name = :schemaName`;

    const result = await sequelize.query(query, {
      replacements: { schemaName: schemaName },
      type: QueryTypes.SELECT,
    });

    if (result.length > 0) return;

    await sequelize.createSchema(schemaName, { logging: false });
    console.log(`Schema ${schemaName} created`);
  } catch (error) {
    console.log("Error when create schema:", error);

    throw error;
  }
};

module.exports = createSchema;
