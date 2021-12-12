/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://oxepkjex:rgYPw6fBo4EPZu4EAHRW-OHru0uaSwgk@fanny.db.elephantsql.com/oxepkjex",
  DATABASE_URL_DEVELOPMENT = "postgres://yeryryoj:L_LNDXKa9dLDfJTU5KRvMIgvKO4wFAqx@fanny.db.elephantsql.com/yeryryoj",
  DATABASE_URL_TEST = "postgres://ckzghore:NrITbvvTdMpCPevFKaVaXE_x7YRSPjo7@fanny.db.elephantsql.com/ckzghore",
  DATABASE_URL_PREVIEW = "postgres://hctdezqc:KKVX_hkNbjeU_MIBb_KUdQAAevyKqliM@fanny.db.elephantsql.com/hctdezqc",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
