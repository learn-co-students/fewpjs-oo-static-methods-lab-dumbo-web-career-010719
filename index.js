class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let answer = []
    let splitString = string.split(" ")
    for (let i=0;i<splitString.length;i++)
      if (i==0){
        answer.push(this.capitalize(splitString[i]))
      }else {
        if (exceptions.includes(splitString[i])){
          answer.push(splitString[i])
        }else {
          answer.push(this.capitalize(splitString[i]))
        }
      }
    return answer.join(" ")
  }
}
