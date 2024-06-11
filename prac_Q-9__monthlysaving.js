function monthlySavings(array,livingCost){
    let total=0;
    if(!Array.isArray(array) || typeof livingCost !== "number"){
        console.log("Invalid input");
        return ;
    }
    for(let i = 0;i<array.length;i++){
        if(array[i]>=3000){
            let t=array[i];
            let x = t*.2;
            t-=x;
            total+=t;
        }else {
            total+=array[i];
        }
    }
    let save = total-livingCost;
    if(save<0){
        console.log("Earn MOre");
    }else {
        console.log(`${save} `)
    }

}

let array=[1000,2000,3000];
let cost = 5400;
monthlySavings(array,cost);