module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e3a203094c2ef4689284ae5f156f468'),
  },
});
