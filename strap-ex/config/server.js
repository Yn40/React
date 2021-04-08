module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0deadbdbc6a0b876165ceae23c532c07'),
    },
  },
  autoReload: {
    'enabled': true
  },
});
