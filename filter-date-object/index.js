const data = [
  { changed_time: new Date("2023-02-24T15:00:00.000Z") },
  { changed_time: new Date("2023-02-17T10:30:00.000Z") },
  { changed_time: new Date("2023-02-05T13:31:00.000Z") },
  { changed_time: new Date("2023-01-15T14:00:00.000Z") },
  { changed_time: new Date("2023-01-09T14:10:00.000Z") },
];

console.log("data", data);

const currentYear = new Date().getFullYear();
console.log("currentYear", currentYear);
const currentMonth = new Date().getMonth() + 1;
console.log("currentMonth", currentMonth);
const prevYear = currentYear - 1;
console.log("prevYear", prevYear);
const nextMonthPrevYear = new Date(prevYear, 1, 1).setMonth(1); // Set date to Feb 1st of previous year
console.log("nextMonthPrevYear", nextMonthPrevYear);

const filteredData = data.filter((item) => {
  const itemMonth = item.changed_time.getMonth();
  console.log("item: ", item);
  console.log("itemMonth: ", itemMonth);
  return (
    item.changed_time.getFullYear() === prevYear &&
    itemMonth === nextMonthPrevYear.getMonth()
  );
});

console.log(filteredData);
