const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const twodrive = drivers.slice(0,2);
const lstdrive = drivers.slice(2,4);

function returnFirstTwoDrivers() {
    return twodrive;
}
function returnLastTwoDrivers() {
    return lstdrive;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int) {
    return function () {
        return int*int;
    }
}
function fareDoubler(int) {
    return int*2;
}
function fareTripler(int) {
    return int*3;
}
function selectDifferentDrivers(arrayOfDrivers, funct) {
    if (funct == returnFirstTwoDrivers) {
        return twodrive;
    }
    else if (funct = returnLastTwoDrivers) {
        return lstdrive;
    }
}

returnFirstTwoDrivers();
returnLastTwoDrivers();
createFareMultiplier(5);
fareDoubler(10);
fareTripler(2);
