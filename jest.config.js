const nextJest = require("next/jest");

const createJestConfig = nextJest("./");

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
