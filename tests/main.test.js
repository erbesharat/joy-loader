import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('main.go');
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(
  `;(function() {
  var pkg = {};
  pkg["../../workspace/projects/joy-loader/tests"] = (function() {
    function main () {
      console.log.apply(console.log, ["Hello!"])
    };
    return {
      main: main
    };
  })();
  return pkg["../../workspace/projects/joy-loader/tests"].main();
})()
`);
});
