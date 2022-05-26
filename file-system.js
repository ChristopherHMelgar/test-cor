const fs = require('fs');

async function writeFile(route, content) {
  fs.writeFile(route, content.join('\n'), (error) => {
    if (error) {
      console.log('write error: ', error);
    } else {
      console.log('write successful');
    }
  });
}

module.exports = {
  writeFile,
};
