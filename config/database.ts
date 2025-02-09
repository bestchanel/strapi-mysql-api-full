export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQL_ADDON_HOST'),
      port: env.int('MYSQL_ADDON_PORT'),
      database: env('MYSQL_ADDON_DB'),
      user: env('MYSQL_ADDON_USER'),
      password: env('MYSQL_ADDON_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      min: 0, // จำนวนการเชื่อมต่อขั้นต่ำ
      max: 5, // จำกัดจำนวนการเชื่อมต่อสูงสุด
    },
  },
});
