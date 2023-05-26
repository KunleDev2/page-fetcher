const request = require("request");
const fs = require("fs");
const getArgs = process.argv.slice(2);
let getUrl = "";
let getPath = "";

for (let i = 0; i < getArgs.length; i++) {
  getUrl = getArgs[0];
  getPath = getArgs[1];
}

request(getUrl, (error, response, body) => {
  fs.writeFile(getPath, body, (err) => {
    if (error) {
    } else {
      if (err) {
        console.log(err);
      } else {
        fs.stat(getPath, (err, stats) => {
          if (err) {
            console.log(err);
          } else {
            console.log(
              "Downloaded and saved " + stats.size + " bytes to " + getPath
            );
          }
        });
      }
    }
  });
});
