var fs = require('fs');
const file1 = 'file1.txt';
const file2 = 'file2.jpg';
const file3 = 'file3.gif';

async function loadFile(path) {
  console.log('Loading: ' + path);

  return new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      setTimeout(() => {
        console.log('Done loading: ' + path);
        resolve(path);
      }, Math.random() * 5000)
    })

  );
}

function output(msg) {
  console.log('Running: ' + msg);
}

Promise.all([loadFile(file1), loadFile(file2), loadFile(file3)]).then(results => {
  console.log(results)
  results.forEach(function (element) {
    output(element);
  });
  console.log('Done all loading');
});



