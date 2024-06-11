var result = 80;
// 0-39=c
// 40-60==b
// 60-69==a-
// 70-79==a
// 80-100 ==a++;
let res='';
if(result<40){
    res='c';
}else if(result<60){
    res='b';
}else if(result<70){
    res='a-';
}else if(result<80){
    res='a';
}else{
    res='a+';
}
console.log(res);