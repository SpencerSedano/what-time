const currentTime = document.querySelector("#currentTime");
const differentCity = document.querySelector("#differentCity");

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
  United_States: -5, // UTC-5 (Eastern Time)
  United_States_MST: -7,
  United_Kingdom: 0, // UTC+0 (Greenwich Mean Time)
  China: 8, // UTC+8
  India: 5.5, // UTC+5:30
  Brazil: -3, // UTC-3
  Russia: 3, // UTC+3
  Australia: 10, // UTC+10
  Canada: -4, // UTC-4
  Germany: 1, // UTC+1
  Japan: 9, // UTC+9
  France: 1, // UTC+1
  Mexico: -6, // UTC-6
  Italy: 1, // UTC+1
  South_Korea: 9, // UTC+9
  Spain: 1, // UTC+1
  Indonesia: 7, // UTC+7
  Turkey: 3, // UTC+3
  Netherlands: 1, // UTC+1
  Saudi_Arabia: 3, // UTC+3
  Argentina: -3, // UTC-3
  Pakistan: 5, // UTC+5
  Poland: 1, // UTC+1
  Colombia: -5, // UTC-5
  Canada: -7, // UTC-7 (Mountain Time)
  Thailand: 7, // UTC+7
  Malaysia: 8, // UTC+8
  Philippines: 8, // UTC+8
  Egypt: 2, // UTC+2
  Vietnam: 7, // UTC+7
  South_Africa: 2, // UTC+2
  Peru: -5, // UTC-5
  Chile: -4, // UTC-4
  Ukraine: 2, // UTC+2
  Kenya: 3, // UTC+3
  Iraq: 3, // UTC+3
  Greece: 2, // UTC+2
  Sweden: 1, // UTC+1
  Switzerland: 1, // UTC+1
  Norway: 1, // UTC+1
  Denmark: 1, // UTC+1
  Finland: 2, // UTC+2
  Ireland: 0, // UTC+0
  New_Zealand: 12, // UTC+12
  Singapore: 8, // UTC+8
  Taiwan: 8, // UTC+8
};

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

firstGettingUTC(countriesOffset.Taiwan);
secondGettingUTC(countriesOffset.Peru);
