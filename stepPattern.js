// eg:-"#   "
//     "##  "
//     "### "
//     "####"

// Solution 1:-
/*********************************************/
function stepPattern(num){
    for(i=0;i<=num;i++){
        let patternArr=""
        for(j=i;j>0;j--){
            patternArr+="#"
        }
         for(let space=num-i;j>0;j--){
            patternArr+=" "
        }
            console.log(patternArr)            
    }
}


// Solution 2:-
/*********************************************/

function stepPattern(num){
    for(i=0;i<=num;i++){
        let patternArr=""
        patternArr+="#".repeat(i);
        patternArr+=" ".repeat(num-i);
            console.log(patternArr)            
    }
}

stepPattern(4)
