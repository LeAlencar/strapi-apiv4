module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a8eb47725d9cc6fa58b7e85bee4b751'),
  },
});
