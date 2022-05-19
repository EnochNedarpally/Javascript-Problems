const array=[13,11,14,12,10]

const swap=(a ,i,j)=>{
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}

const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
             if(arr[j]>arr[j+1]){
                  swap(arr,j,j+1)
             }
        }
    }
       console.log(arr)
}

bubbleSort(array);
