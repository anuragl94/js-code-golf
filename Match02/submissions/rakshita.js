function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
document.write(removeDuplicateCharacters('This is rakshita and this file is edited by rakshita'));