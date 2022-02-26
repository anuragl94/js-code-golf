const fs = require('fs');
const CONSOLE_STYLE = require('./colours');

function getScores(matchNumber) {
  const directory = `Match ${matchNumber}`;
  
  if (fs.existsSync(directory)) {
    console.log(CONSOLE_STYLE.BOLD(`\nAnalyzing ${directory}`));
    const submissions = `${directory}/submissions`;
    let fileSizes = [];
    const scores = {};
  
    const files = fs.readdirSync(submissions, { withFileTypes: true })
      .map(item => item.name)
      .filter(item => /.min.js$/.test(item));
  
    files.forEach(file => {
      const fileSize = fs.statSync(`${submissions}/${file}`).size;
      fileSizes.push([fileSize, file]);
    });
  
    fileSizes = fileSizes.sort((a, b) => (a[0] - b[0]));
    fileSizes.forEach((data) => {
      const [size, name] = data;
      scores[name] = size;
      console.log(
        CONSOLE_STYLE.RED(`${size} bytes`.padStart(10)),
        CONSOLE_STYLE.GREEN(name)
      );
    });

    if (!fileSizes.length) {
      console.log('This match has no submissions');
    }

    return scores;
  } else {
    return null;
  }  
}

module.exports = getScores;