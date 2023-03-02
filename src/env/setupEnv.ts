export function setEnvironment() {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return ['.env.dev', '.env'];
    case 'prod':
    default:
      return '.env';
  }
}
