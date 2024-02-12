const currentTime = document.querySelector("#currentTime");
const differentCity = document.querySelector("#differentCity");
const nameCountryOne = document.querySelector("#nameCountryOne");
const nameCountryTwo = document.querySelector("#nameCountryTwo");

const firstTimeImage = document.querySelector("#firstTimeImage");
const secondTimeImage = document.querySelector("#secondTimeImage");

// stores the current time in milliseconds
//const localTime = timeNow.getTime();
// stores the time zone offset in minutes and converts it
// to milliseconds
//const localOffset = timeNow.getTimezoneOffset() * 60000;
// calculates the UTC by adding localtime and localoffset
//const UTC = localTime + localOffset;
// represents the time zone offset for Peru
//const offset = -5;
// calculates the current time in Peru by adding the
// offset to the UTC and converting it to milliseconds
//const peru = UTC + 3600000 * offset;
// formatted string representing the current time in Peru
//const peruTimeNow = new Date(peru).toLocaleString();

//differentCity.innerHTML = `Peru: ${peruTimeNow}`;

//Formatting Date
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + "." + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

//Create an object with the different offsets of different countries
const countriesOffset = {
  Argentina: -3, // UTC-3
  Australia: 10, // UTC+10
  Brazil: -3, // UTC-3
  Canada: -5, // UTC-5
  Chile: -4, // UTC-4
  China: 8, // UTC+8
  Colombia: -5, // UTC-5
  Denmark: 1, // UTC+1
  Egypt: 2, // UTC+2
  Finland: 2, // UTC+2
  France: 1, // UTC+1
  Germany: 1, // UTC+1
  Greece: 2, // UTC+2
  India: 5.5, // UTC+5:30
  Indonesia: 7, // UTC+7
  Iraq: 3, // UTC+3
  Ireland: 0, // UTC+0
  Italy: 1, // UTC+1
  Japan: 9, // UTC+9
  Kenya: 3, // UTC+3
  Malaysia: 8, // UTC+8
  Mexico: -6, // UTC-6
  Netherlands: 1, // UTC+1
  New_Zealand: 13, // UTC+12
  Norway: 1, // UTC+1
  Pakistan: 5, // UTC+5
  Peru: -5, // UTC-5
  Philippines: 8, // UTC+8
  Poland: 1, // UTC+1
  Russia: 3, // UTC+3
  Saudi_Arabia: 3, // UTC+3
  Singapore: 8, // UTC+8
  South_Africa: 2, // UTC+2
  South_Korea: 9, // UTC+9
  Spain: 1, // UTC+1
  Sweden: 1, // UTC+1
  Switzerland: 1, // UTC+1
  Taiwan: 8, // UTC+8
  Thailand: 7, // UTC+7
  Turkey: 3, // UTC+3
  Ukraine: 2, // UTC+2
  United_Kingdom: 0, // UTC+0 (Greenwich Mean Time)
  United_States_EST: -5, // UTC-5 (Eastern Time)
  United_States_MST: -7, // UTC-7 (Mountain Standard Time)
  Vietnam: 7, // UTC+7
};

const countryFlag = {
  Peru: "./flags/peru.jpg",
  Taiwan: "./flags/taiwan.jpg",
};

console.log(countryFlag.Peru);
console.log(countryFlag.Taiwan);

//Create a function to store the UTC
const firstGettingUTC = (country) => {
  const timeNow = new Date();
  const localTime = timeNow.getTime();
  const localOffset = timeNow.getTimezoneOffset() * 60000;
  const UTC = localTime + localOffset;
  const offset = country;
  const countryName = UTC + 3600000 * offset;
  const countryTimeNow = new Date(countryName);
  const e = formatDate(countryTimeNow);
  currentTime.innerHTML = e;
};
const secondGettingUTC = (country) => {
  const timeNow = new Date();
  const localTime = timeNow.getTime();
  const localOffset = timeNow.getTimezoneOffset() * 60000;
  const UTC = localTime + localOffset;
  const offset = country;
  const countryName = UTC + 3600000 * offset;
  const countryTimeNow = new Date(countryName);
  const e = formatDate(countryTimeNow);
  differentCity.innerHTML = e;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.countrySelectOne) {
    // Update the background color when a message is received
    firstGettingUTC(countriesOffset[message.countrySelectOne]);
  }
  if (message.countrySelectTwo) {
    secondGettingUTC(countriesOffset[message.countrySelectTwo]);
  }
  nameCountryOne.textContent = message.countrySelectOne;
  nameCountryTwo.textContent = message.countrySelectTwo;
});

// If no color is choose, red is the default option
chrome.storage.sync.get({ countryOne: "Taiwan" }, (items) => {
  firstGettingUTC(countriesOffset[items.countryOne]);
  nameCountryOne.textContent = items.countryOne;
  firstTimeImage.src = countryFlag.Peru;
});
chrome.storage.sync.get({ countryTwo: "Peru" }, (items) => {
  secondGettingUTC(countriesOffset[items.countryTwo]);
  nameCountryTwo.textContent = items.countryTwo;
});
