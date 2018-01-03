import compiler from './compiler.js';

const os = require('os');
const path = require('path');

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('main.go');
  const pkgName = path.relative(path.join(process.env.GOPATH || path.join(os.homedir(), 'go'), 'src'), __dirname);
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(
  `;(function() {
  var pkg = {};
  pkg["${pkgName}"] = (function() {
    function main () {
      console.log.apply(console.log, ["Hello!"])
    };
    return {
      main: main
    };
  })();
  return pkg["${pkgName}"].main();
})()
`);
});
