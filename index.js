// Your code here
/*function createEmployeeRecord(array) {
    const employeeObj = {
        "firstName": array[0],
        "familyName":array[1],
        "title": array[2],
        "payPerHour": array[3],
        "timeInEvents": [],
        "timeOutEvents": [] 
    };
   return employeeObj;
} */
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
} 

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}



/*function createEmployeeRecords(array) {
    const newArray =[];
    array.forEach(element => {
        let employeeObj = createEmployeeRecord(element);
        newArray.push(employeeObj);
    });
    return newArray;
} */

/*function createTimeInEvent(dateIn) {
    let [date, hour] = dateIn.split(" ");
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date})
    return this;
} */

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

/*function createTimeOutEvent(dateOut) {
    let [date, hour] = dateOUt.split(" ");
    return object.timeOutEvents.push({type: "TimeOut", hour: dateOut[11, 14], date: dateOut[0,9]}) 
} */

/*function hoursWorkedOnDate(object, date) {
    
    return hoursWorked;
}

function wagesEarnedOnDate(object, date) {

}

function allWagesFor(object) {

}

function calculatePayroll(array) {

}*/