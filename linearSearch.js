const arr=['nirvana','linkinpark','ragm','audioslave','top'];

const linearSearchIndexOf = (arr,val) =>{
    for(i=0;i<arr.length;i++){
        if(arr[i]===val){
            console.log(`Index of ${val} is ${i}`)
        } 
    }
}
const linearSearchIncludes = (arr,val) =>{
    for(i=0;i<arr.length;i++){
        if(arr[i]===val){
          console.log("found")
        } 
    }
}


const linearSearchFind= (arr,cb) =>{
    for(i=0;i<arr.length;i++){
        if(cb(arr[i])===true){
          console.log("true")
        } 
    }
}
// linearSearchIndexOf(arr,'linkinpark');
// linearSearchIncludes(arr,'nirvana');
linearSearchFind(arr,band=>band==='nirvana');
