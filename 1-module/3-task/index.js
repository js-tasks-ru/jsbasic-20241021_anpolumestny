function ucFirst(str) {
  if (!str) {
    return str;
  }

  let capitalLatter = str[0].toUpperCase();
  return (str.length === 1) ? capitalLatter : `${capitalLatter}${str.slice(1)}`;
}

