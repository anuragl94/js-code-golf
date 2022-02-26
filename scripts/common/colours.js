const CONSOLE_STYLE = {
  BOLD: str => `\x1b[1m${str}\x1b[0m`,
  RED: str => `\x1b[31m${str}\x1b[0m`,
  GREEN: str => `\x1b[32m${str}\x1b[0m`,
}

module.exports = CONSOLE_STYLE;