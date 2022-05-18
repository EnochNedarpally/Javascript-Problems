function vowels(string){
    const pattern =/[aeiou]/ig
    let count=0;
    for(i=0;i<=string.length;i++){
        let char=string.charAt(i)
        if(char.match(pattern)){
            count+=1
        }
    }
    console.log(count)
}

vowels("Hello WOrld");
