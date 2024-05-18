const createSchema = require("./create-schema");
const Polls = require("../models/Polls");

module.exports = async () => {
  try {
    await createSchema();

    await Polls.sync();
  } catch (error) {
    console.log("Erro when synchronizing database:", error);

    throw error;
  }
};
