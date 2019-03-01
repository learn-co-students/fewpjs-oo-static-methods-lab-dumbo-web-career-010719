class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let sentence = []
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        sentence.push( this.capitalize(words[i]) )
      } else if (exceptions.includes( words[i])) {
        sentence.push(words[i])
      }else {
        sentence.push( this.capitalize(words[i]) )
      }
    }
    return sentence.join(' ')
  }
}
