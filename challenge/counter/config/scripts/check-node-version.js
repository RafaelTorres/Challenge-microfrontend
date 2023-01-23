/* eslint-disable no-console */
const { versions } = process;

if (versions && versions.node) {
  const nodeVersion = parseInt(versions.node, 10);

  if (nodeVersion >= 16 && nodeVersion <= 18) {
    console.log('\x1b[32m%s\x1b[0m', `** Good to Go with your Node Version: ${versions.node} **`);
  } else {
    console.log(
      '\x1b[31m%s\x1b[0m',
      '** Package installation (npm install/ci) or Project dev command (npm run dev) failed due to Node Version, Please install and use Node Version >=16 and <17 **',
    );
    console.log('\x1b[33m%s\x1b[0m', `** Your current Node Version is: ${versions.node} **`);
    process.exit(1);
  }
} else {
  console.log('\x1b[31m%s\x1b[0m', '** Something went wrong while checking Node version **');
  process.exit(1);
}
