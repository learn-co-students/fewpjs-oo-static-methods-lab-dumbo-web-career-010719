class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let results = [];
    let arrayOfWords = sentence.split(" ")

    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        results.push(this.capitalize (arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          results.push(arrayOfWords[n])
        } else {
          results.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }
    return results.join(" ")
  }
}

// static titleize(string) {
//   const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
//   const strArr = string.split(' ')
//   strArr.forEach(function(ele, index, strArr) {
//     if (arr.includes(ele) === false || index === 0) {
//       let newEle = ele.charAt(0).toUpperCase() + ele.slice(1)
//       strArr[index] = newEle
//     }
//   })
//   return strArr.join(' ')
// }
