

function superbowlWin(record){

//console.log(record);
    
 let found = record.find(element => element.result === "W");

 if(found === undefined){
     return undefined;
 }else{
     return found.year;
 }
 
}

//superbowlWin([{ year: "1978", result: "N/A"}]);