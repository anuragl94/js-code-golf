const getScores = require('./common/getScores');

const matchNumber = process.argv[2].padStart(2, 0);
getScores(matchNumber);