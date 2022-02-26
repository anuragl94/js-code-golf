const fs = require('fs');
const getScores = require('./common/getScores.js');

const SCORES = [];

let matchIndex = 0;
while(++matchIndex) {
  const matchNumber = String(matchIndex).padStart(2, 0);
  const score = getScores(matchNumber);
  if (!score) {
    break;
  }

  SCORES.push(score);
}

fs.writeFileSync('./public/scores.js', `const SCORES = ${JSON.stringify(SCORES, 2, 2)};`);

console.log('\nGenerated scores file. Triggering deployment...');