const { exec } = require('child_process');

function runPythonScraper(param1, param2) {
  return new Promise((resolve, reject) => {
    const command = `python ex.py ${param1} ${param2}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });
  });
}

module.exports = runPythonScraper;