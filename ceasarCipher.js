// Solution 1 :- Works for smaller shift number
function ceasarCypher(str, num) {
  //String.fromCharCode() gets a character from a given charCode
    const pattern = /[\W_0-9]+/g;
  str = str.toLowerCase();
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (
      pattern.test(str[i]) ||
      (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58)
    ) {
      result = result + str[i];
    } else {
      let newChar = String.fromCharCode(str.charCodeAt(i) + num);
      let newCharCode;
      if (newChar.charCodeAt(0) > 122) {
        newCharCode = newChar.charCodeAt(0) - 122 + 96;
        newChar = String.fromCharCode(newCharCode);
        result = result + newChar;
      } else result = result + newChar;
    }
  }
  console.log(result);
}
ceasarCypher("fcw uygr!", 2);

/*****************************************************************/

//Solution 2 :- for large shift num
function ceasarCypher(str,num){
  const alphaArr= 'abcdefghijklmnopqrstuvwxyz'.split(""); 
  let result=""
  for(i=0;i<str.length;i++){
      const char=str[i];
      const id=alphaArr.indexOf(char);
      if(id === -1){
          result+=char;
          continue;
      }
      //modulo 26 (% 26) will always gives remainder between 0 to 26
      const encodedId = (id + num )% 26;
      result+=alphaArr[encodedId]
  }
  console.log(result)
}
ceasarCypher("abcd",100);
