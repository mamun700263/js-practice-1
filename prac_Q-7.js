var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];




function unique_numbers(array=[]){
    var unique=[];
    unique.push(numbers[0]);

    for(let i = 1;i<numbers.length;i++){
        if(unique[unique.length-1]!=numbers[i]){
            unique.push(numbers[i]);
        }
    }
    return unique
}

console.log(unique_numbers(numbers));