function stringPatternSearch(string,pattern){
    let count=0;
    for(i=0;i<string.length;i++){
        for(j=0;j<pattern.length;j++){
            let char=pattern[j];
            if(char!==string[i+j]){
                break;
            }
            if(j===pattern.length -1){
                count++;
            }
        }
        
    }
    console.log(count);
}

stringPatternSearch("lololol","lol")
