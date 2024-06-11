let array=[18, 5, 12, 9, 1, 15, 3, 20, 11, 7, 2, 17, 6, 13, 4, 19, 10, 8, 14, 16];

for(let i=0;i<20;i++){
    for(let j=i+1;j<20;j++){
        if(array[i]>array[j]){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}

console.log(array);