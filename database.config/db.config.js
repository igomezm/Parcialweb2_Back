/**
 * Database Configuration Object
 */
const dbconfig = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "IkgomezM",
        DB: "faketwitter",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;