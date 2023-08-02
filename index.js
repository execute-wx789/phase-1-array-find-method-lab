// code your solution here
function superbowlWin(record){
    for (const recordHold of record){
        if(recordHold.result === "W"){
            return recordHold.year
        }
    }
}