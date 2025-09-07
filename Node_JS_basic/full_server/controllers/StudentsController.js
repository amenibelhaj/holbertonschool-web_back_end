const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];

    readDatabase(path)
      .then((data) => {
        const lines = ['This is the list of our students'];
        const fields = Object.keys(data).sort();

        for (const field of fields) {
          const list = data[field].join(', ');
          lines.push(
            `Number of students in ${field}: ${data[field].length}. List: ${list}`,
          );
        }

        res.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database'); // ✅ Fix ici
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((data) => {
        const students = data[major];
        if (!students) {
          res.send('List:');
          return;
        }

        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
