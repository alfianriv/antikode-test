export const Database = () => ({
  db_config: {
    type: "postgres",
    host: process.env.DB_HOST ? process.env.DB_HOST : "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER ? process.env.DB_USER : "postgres",
    password: process.env.DB_PASS ? process.env.DB_PASS : "password",
    database: process.env.DB_NAME ? process.env.DB_NAME : "antikode_tb",
    entities: [__dirname + "../../../**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true,
  },
});
