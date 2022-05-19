const array1=[1,5]
const array2=[4,6,7,10,12]

const mergeSort=(a1,a2)=>{
    const result=[];
    let p1=0,p2=0;
    while(p1<a1.length && p2 < a2.length){
        if(a1[p1]<a2[p2]){
            result.push(a1[p1]);
            p1++;
        }{
            result.push(a2[p2])
            p2++
        }
    }
    while(p1<a1.length){
        result.push(a1[p1]);
            p1++;
    }
    while(p2<a2.length){
        result.push(a2[p2]);
            p2++;
    }
    console.log(result);
}


mergeSort(array1,array2);
