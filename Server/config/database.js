// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'vngle'),
//       user: env('DATABASE_USERNAME', 'izz'),
//       password: env('DATABASE_PASSWORD', 'vngle123'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "vngle123"),
    },
    useNullAsDefault: true,
  },
});

