import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";
const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
// before.innerHTML = JSON.stringify(companiesData, null, 2);

//TODO: Extract an element from the array.
// const manipulatedData = companiesData[34];
//TODO: Add elements to beginning and end of array.
// const manipulatedData = companiesData.pop(); //remove last element (record)
// const manipulatedData = companiesData.shift(); //remove first element (record)
// const manipulatedData = companiesData.unshift(extraRecord); //adds extra record to beginning of array, returns new length
//
//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
// const manipulatedData = companiesData.map(function (e) {
//   const obj = {
//     company: e.fieldData.CompanyName,
//     state: e.fieldData.State,
//     city: e.fieldData.City,
//   };
//   return obj;
// });
//TODO: Filter for a certain state.
//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here

// const filterForState = function (record) {
//   return record.fieldData.State === "TX";
// };
// const constructNewArray = function (e) {
//   const obj = {
//     company: e.fieldData.CompanyName,
//     state: e.fieldData.State,
//     city: e.fieldData.City,
//   };
//   return obj;
// };
// const manipulatedData = companiesData
//   .filter(filterForState)
//   .map(constructNewArray);

const manipulatedData = salesData.filter(function (sale) {
  return sale.fieldData.UnitsSold >= 300;
});
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
before.innerHTML = JSON.stringify(salesData, null, 2);
