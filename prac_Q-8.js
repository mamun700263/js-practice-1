var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];




function max_of_numbers(array=[]){
    let max=numbers[0];

    for(let i = 1;i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i];
        }

    }
    return max;
}

console.log(max_of_numbers(numbers));
