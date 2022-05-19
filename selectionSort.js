const array=[13,11,14,12,10]

const swap=(a ,i,j)=>{
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}

const selectionSort=(arr)=>{
 
    for(let i=0;i<arr.length;i++){
             let selectedIndex=i;
        for(let j=i+1;j<arr.length;j++){
             if(arr[j]<arr[selectedIndex]){
                 selectedIndex=j;
             }
        }
                  swap(arr,i,selectedIndex)
    }
       console.log(arr)
}

selectionSort(array);
