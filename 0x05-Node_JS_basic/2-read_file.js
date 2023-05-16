const fs = require('fs');

function countStudents(path) {
  try {
    const input = fs.readFileSync(path, 'utf8');
    const output = [];
    input.split('\n').forEach((input) => {
      output.push(input.split(','));
    });
    output.shift();
    const new_output = [];
    output.forEach((input) => new_output.push([input[0], input[3]]));
    const fields = new Set();
    new_output.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((input) => { (final[input] = 0); });
    new_output.forEach((input) => { (final[input[1]] += 1); });
    console.log(`Number of students: ${output.filter((check) => check.length > 3).length}`);
    Object.keys(final).forEach((input) => console.log(`Number of students in ${input}: ${final[input]}. List: ${new_output.filter((n) => n[1] === input).map((n) => n[0]).join(', ')}`));
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
