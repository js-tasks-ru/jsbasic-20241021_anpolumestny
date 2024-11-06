function camelize(str) {
  let words = str.split('-');
  let capitalizedWords = words.map((word, index) => word && index !== 0 ? word[0].toUpperCase() + word.slice(1) : word);
  return capitalizedWords.join('');
}
