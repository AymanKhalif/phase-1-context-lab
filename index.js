/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
function createEmployeeRecord(newEmployee) {
  return {
    firstName: newEmployee[0],
    familyName: newEmployee[1],
    title: newEmployee[2],
    payPerHour: newEmployee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(employees) {
  return employees.map((employee) => createEmployeeRecord(employee));
}
function createTimeInEvent(dateTime) {
  let newTimeIn = {
    type: "TimeIn",
    hour: parseInt(dateTime.slice(11)),
    date: dateTime.slice(0, 10),
  };
  this.timeInEvents.push(newTimeIn);
  return this;
}

function hoursWorkedOnDate(date) {
  let start = this.timeInEvents.indexOf(
    this.timeInEvents.find((entry) => entry.date === date)
  );
  let end = this.timeOutEvents.indexOf(
    this.timeOutEvents.find((entry) => entry.date === date)
  );
  return (this.timeOutEvents[end].hour - this.timeInEvents[start].hour) / 100;
}
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find((entry) => entry.firstName === firstName);
}
function calculatePayroll(employees) {
  return employees.reduce((total, num) => total + allWagesFor.call(num), 0);
}

function createTimeOutEvent(employeeRecord, dateTimeString) {
  if (
    typeof employeeRecord.timeOutEvents !== "undefined" &&
    employeeRecord.timeOutEvents.length > 0
  ) {
    let [date, hour] = dateTimeString.split(" ");
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour),
    });
  }
  return employeeRecord;
}
