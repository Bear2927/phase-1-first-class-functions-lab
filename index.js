// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(){
    return drivers.slice(2, 4)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers[1];

function createFareMultiplier(fare) {
    return function(x){
        return fare*x
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}