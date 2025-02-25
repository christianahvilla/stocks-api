export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port:
    process.env.NODE_ENV === 'production'
      ? undefined
      : process.env.PORT || 3000,
  httpClient: process.env.HTTP_CLIENT || 'axios',
});
