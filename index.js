class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^s, A-Za-z0-9-']+/g, '').trim();
  }

  static titleize(str){
    let wordsArray =["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const arrayStr=str.split(" ")
    const newArray=[]
    arrayStr.forEach((str, index) =>{
      if(index === 0){
        newArray.push(this.capitalize(str))
      }
      else if(wordsArray.includes(str)){
        newArray.push(str)
      }else{
        newArray.push(this.capitalize(str))
      }
    })  
    return newArray.join(" ") 
  }
  
}