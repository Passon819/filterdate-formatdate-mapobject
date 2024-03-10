/* -- https://bard.google.com/chat/ad11bc5172d3b70b -- */

const data = [
  { changed_time: new Date("2023-04-24T15:00:00.000Z"), name: "a" },
  { changed_time: new Date("2023-02-24T20:00:00.000Z"), name: "aa" },
  { changed_time: new Date("2021-02-17T10:30:00.000Z"), name: "b" },
  { changed_time: new Date("2021-02-17T19:30:00.000Z"), name: "bb" },
  { changed_time: new Date("2022-02-05T13:31:00.000Z"), name: "c" },
  { changed_time: new Date("2023-01-15T14:00:00.000Z"), name: "d" },
  { changed_time: new Date("2023-01-09T14:10:00.000Z"), name: "e" },
];

const countTarget = 3;

//const targetYear = 2024 - 1; // Previous year
//const targetMonth = 2; // February, so month 2

//const currentYear = new Date().getFullYear(); //targetYear from currentYear
//console.log("currentYear", currentYear);
const currentMonth = new Date().getMonth() + 1;
const targetMonth = currentMonth + countTarget; //targetMonth from currentMonths
console.log("targetMonth", targetMonth);

const filteredData = data.filter((item) => {
  /* getMonth start 0-11, you can getMonth() + 1 */
  const itemMonth = item.changed_time.getMonth() + 1;
  console.log("itemMonth", itemMonth);
  //   const itemYear = item.changed_time.getFullYear();
  //   console.log("itemYear", itemYear);
  return itemMonth <= targetMonth && itemMonth > currentMonth;
});

//console.log("List objects for next month of previous year:", filteredData);
console.log("List objects for next month every year:", filteredData);

//-----------------------test-----------------------
// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var d = new Date();

// var namedMonth = months[d.getMonth()];
// console.log("namedMonth: ", namedMonth);
