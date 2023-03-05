export function setEnvironment() {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return ['.env.dev', '.env'];
    case 'prod':
      return ['.env.prod', '.env'];
    default:
      return '.env';
  }
}
