var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function bigName(array=[]){
    let bigy=friends[0].length;
    let bigName_index=-1;

    for(let i=1;i<friends.length;i++){
        if(bigy<friends[i].length){
            bigy=friends[i].length;
            bigName_index=i;
        }
    }
    console.log(friends[bigName_index]);
}

bigName(friends);