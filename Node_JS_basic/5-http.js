const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift();

      const studentsByField = {};
      let totalStudents = 0;

      for (const line of lines) {
        if (line.trim() !== '') {
          const [firstname, , , field] = line.split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstname);
          totalStudents += 1;
        }
      }

      const linesToPrint = [];
      linesToPrint.push(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(studentsByField)) {
        linesToPrint.push(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
        ); // ✅ virgule ajoutée ici (ligne 35)
      }

      resolve(linesToPrint.join('\n'));
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((output) => {
        res.end(`${output}\n`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
