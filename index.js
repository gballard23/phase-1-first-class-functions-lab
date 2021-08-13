// Code your solution in this file!
const returnFirstTwoDrivers = function(arrDrivers){
     return [arrDrivers[0], arrDrivers[1]]
  
}

const returnLastTwoDrivers = function(arrDrivers){
    return [arrDrivers[arrDrivers.length - 2], arrDrivers[arrDrivers.length - 1]];
} 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return int*fare
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arrDrivers, funct) {
    return funct(arrDrivers);
}
    
