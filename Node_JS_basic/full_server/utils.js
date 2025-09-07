const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift();

      const result = {};

      for (const line of lines) {
        if (line.trim() !== '') {
          const [firstname, , , field] = line.split(',');

          if (!result[field]) {
            result[field] = [];
          }

          result[field].push(firstname);
        }
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
