class Formatter {
  //add static methods here
  static capitalize(string){
    const letter = string[0].toUpperCase();
    return letter + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

//   static titleize(string){
//     const stringArr = string.split(" ");
//     let array = [];
//     stringArr.forEach(word => {
//       switch(word){
//           case word === 'the':
//           count++;
//           break;
//         case word === "a": 
//           array.push(word);
//           break;
//         case word === "an": 
//           array.push(word);
//           break;
//         case word === "but": 
//           array.push(word);
//           break;
//         case word === "of": 
//           array.push(word);
//           break;
//         case word === "and": 
//           array.push(word);
//           break;
//         case word === "for": 
//           array.push(word);
//           break;
//         case word === "at": 
//           array.push(word);
//           break;
//         case word === "by": 
//           array.push(word);
//           break;
//         case word === "from": 
//           array.push(word);
//           break;
//         default: 
//           array.push(this.capitalize(word));
//       }
//     })
//     return array.join(" ")
//   }

static titleize( sentence ) {
  let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
  let result = [];
  let arrayOfWords = sentence.split( " " )
  for ( let n = 0; n < arrayOfWords.length; n++ ) {
    if ( n == 0 ) {
      result.push( this.capitalize( arrayOfWords[ n ] ) )
    } else {
      if ( exceptions.includes( arrayOfWords[ n ] ) ) {
        result.push( arrayOfWords[ n ] )
      } else {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      }
    }

  }
  return result.join( " " );
  }
}