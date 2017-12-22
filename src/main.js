const loaderUtils = require("loader-utils")
const cp = require("child_process")

module.exports = async function (source) {
  let cmd = "joy ".concat(this.resourcePath)
  let stdout
  try {
    stdout = await new Promise((resolve, reject) => {
      cp.exec(cmd, function (err, stdout, stderror) {
        // Uncomment this when issue #53 is fixed. 
        // https://github.com/matthewmueller/joy/issues/53
        // if (stderror) {
        //   return reject(stderror)
        // }
        resolve(stdout)
      })
    })
  } catch (error) {
    console.log(error)
  }
  console.log(stdout)
  return stdout
}