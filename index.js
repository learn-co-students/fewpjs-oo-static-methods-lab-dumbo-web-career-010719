class Formatter {
  //add static methods here
  static capitalize(string) {
    let newStr = string
    return newStr.charAt(0).toUpperCase() + newStr.slice(1)
  }

  static sanitize(string) {
     return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const strArr = string.split(' ')
    strArr.forEach(function(ele, index, strArr) {
      if (arr.includes(ele) === false || index === 0) {
        let newEle = ele.charAt(0).toUpperCase() + ele.slice(1)
        strArr[index] = newEle
      }
    })
    return strArr.join(' ')
  }
}
