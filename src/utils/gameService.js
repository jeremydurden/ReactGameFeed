const BASE_URL = "https://api.rawg.io/api/";

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();

const currentDay = getCurrentDay();
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const getLastMonth = () => {
  let lastMonth;
  if (currentMonth == "01") {
    lastMonth = `${currentYear - 1}-${11}-${currentDay}`;
  } else {
    lastMonth = `${currentYear}-${currentMonth - 1}-${currentDay}`;
  }
  return lastMonth;
};

const lastMonth = getLastMonth();

//popular games

const POPULAR_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`;
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const NEW_GAMES = `games?dates=${lastMonth},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;
