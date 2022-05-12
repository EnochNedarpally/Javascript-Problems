//SOLUTION 1
//Check wheter a string is an anagram or not
const anagram = (string1,string2) =>{
    //remove non alphabetic character and converts the string to lowercase
    string1=string1.toLowerCase().replace(/[\W_0-9]+/g,"");
    string2=string2.toLowerCase().replace(/[\W_0-9]+/g,"");
    string1=string1.split("").sort().join("");
    string2=string2.split("").sort().join("");
    if(string1===string2){
        console.log("Is an Anagram")
    }
    else console.log("Is not an Anagram")
}

anagram("time","item");

****************************************************************
//SOLUTION 2
//Check wheter a string is an anagram or not
const anagram = (string1,string2) =>{
    //remove non alphabetic character and converts the string to lowercase
    string1=string1.toLowerCase().replace(/[\W_0-9]+/g,"");
    string2=string2.toLowerCase().replace(/[\W_0-9]+/g,"");
   const occurence1=findOccurence(string1);
   const occurence2=findOccurence(string2);
   if(string1.length===string2.length){
       const key1=Object.keys(occurence1);
       const key2=Object.keys(occurence2);
       if(key1.length===key2.length){
           let result=false
           for(i=0;i<key1.length;i++){
              if(occurence2[key1[i]] === occurence1[key1[i]] ){
                  result=true;
              }
              else result =false;
              if(result===false)  break;
             
           }
           if(result){
              console.log("Is an Anagram")
           }
           else{
                console.log("Is not a Anagram")
           }
       }
   }
   else{
        console.log("Is not a Anagram")
   }
}

//Finds occurence of a string
const findOccurence=(string)=>{
    console.log(string);
    const occurence={}
    for(i=0;i<string.length;i++){
        let char = string.charAt(i)
        if(!occurence[char]){
            occurence[char] = 1
        }
        else occurence[char] = occurence[char] + 1
    }
    return occurence;
}
anagram("R $ache12 !l","Ch4a5R.le");
