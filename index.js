class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-\s,'A-Za-z0-9]+/g, '');
  }

  static titleize(sentence) {
    const set = new Set("the a an but of and for at by from".split(' '));
    const words = sentence.split(' ')

    return `${this.capitalize(words[0])} ` + words.slice(1).map(word => {
      if (set.has(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    }).join(' ')
  }
}