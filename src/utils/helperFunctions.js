import moment from "moment-timezone";
import Toaster from "../components/public/toaster";
export default function trim(text) {
  return text.replace(/\s/g, "");
}

export function toast(message = "", duration = 0) {
  // Check if duration is not an integer, default to 3000 milliseconds (3 seconds)
  duration = Number.isInteger(duration) ? duration : 3;

  // Create toast element
  const toastElement = document.createElement("div");

  //create text element
  const textElement = document.createElement("span");
  textElement.textContent = message;
  toastElement.style.zIndex = "999999999";
  toastElement.id = "toastZZ2024Gdev";
  textElement.style.cssText =
    "padding:10px; color:white; background-color: rgba(0, 0, 0, 0.7); border-radius: 5px;  text-align: center; margin: 10px;";
  toastElement.style.cssText =
    "width:100%;  position:fixed; bottom:4%; display:flex; align-items:center; justify-content:center; transition: all 1s ease-in-out;";
  toastElement.appendChild(textElement);
  document.body.appendChild(toastElement);

  setTimeout(() => {
    // Close toast after specified duration
    document.getElementById("toastZZ2024Gdev")?.remove();
  }, duration * 1000);
}

/**
 * @function timeAgo
 * @description Takes a datetime string with a timezone and formats it as a
 *   human-readable string relative to the viewer's local time zone.
 * @param {string} formattedDateTime - The datetime string with a timezone, in the
 *   format: ISO-date [timezone]
 * @returns {string} The formatted date string, in one of the following formats:
 *   - "just now" if the difference is less than 1 minute
 *   - "<X> minute(s) ago" if the difference is less than 1 hour
 *   - "<X> hour(s) ago" if the difference is less than 1 day
 *   - "<X> day(s) ago" if the difference is less than 1 week
 *   - "<X> week(s) ago" if the difference is less than 1 month
 *   - "<X> month(s) ago" if the difference is less than 1 year
 *   - "<X> year(s) ago" otherwise
 */
export function timeAgo(formattedDateTime) {
  // Extract the ISO date and timezone from the formatted string
  const [postTime, postTimezone] = formattedDateTime.split(" [");
  const cleanTimezone = postTimezone.slice(0, -1); // Remove closing bracket ']'

  // Get the current time in the viewer's local timezone
  const viewerTimezone = moment.tz.guess();
  const now = moment().tz(viewerTimezone);

  // Parse the post time in the poster's timezone
  const postTimeInPosterTimezone = moment.tz(postTime, cleanTimezone);

  // Calculate the difference in seconds between the current time and the post time
  const diffInSeconds = now.diff(postTimeInPosterTimezone, "seconds");

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInWeek = 7 * secondsInDay;
  const secondsInMonth = 30 * secondsInDay; // Average month length
  const secondsInYear = 365 * secondsInDay;

  if (diffInSeconds < secondsInMinute) {
    // Return "just now" if the difference is less than 1 minute
    return `just now`;
  } else if (diffInSeconds < secondsInHour) {
    // Return "<X> minute(s) ago" if the difference is less than 1 hour
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInDay) {
    // Return "<X> hour(s) ago" if the difference is less than 1 day
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInWeek) {
    // Return "<X> day(s) ago" if the difference is less than 1 week
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInMonth) {
    // Return "<X> week(s) ago" if the difference is less than 1 month
    const weeks = Math.floor(diffInSeconds / secondsInWeek);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInYear) {
    // Return "<X> month(s) ago" if the difference is less than 1 year
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    // Return "<X> year(s) ago" otherwise
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}

/**
 * @function formatDate
 * @description Takes a datetime string with a timezone and formats it as a
 *   human-readable string relative to the viewer's local time zone.
 * @param {string} dateString - The datetime string to format, in the format: ISO-date [timezone]
 * @returns {string} The formatted date string, in the format: Month Day, Hour:Minute AM/PM
 */
export function formatDate(dateString) {
  // Split the input into the ISO date and the timezone
  const [isoString, timezone] = dateString.split(" [");
  const cleanTimezone = timezone.slice(0, -1); // Remove the closing ']'

  // Parse the date using the timezone
  const date = moment.tz(isoString, cleanTimezone);

  // Format components
  const year = date.year();
  const month = date.month(); // Returns 0-11, same as JS Date object
  const day = date.date();
  const hours = date.hours();
  const minutes = date.minutes();

  // Array of month abbreviations
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format date into desired output
  const formattedDate = `${monthNames[month]} ${day}, ${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours < 12 ? "AM" : "PM"}`;

  return formattedDate;
}

/**
 * @function getTime
 * @description Extracts the time from a given datetime string, accounting for the timezone.
 * @param {string} dateString - The datetime string to extract the time from.
 * @returns {string} The time in the format: HH:MM AM/PM
 */
export function getTime(dateString) {
  // Split the input into the ISO date and the timezone
  const [isoString, timezone] = dateString.split(" [");
  const cleanTimezone = timezone.slice(0, -1); // Remove the closing ']'

  // Parse the date using the timezone
  const date = moment.tz(isoString, cleanTimezone);

  // Format components
  const hours = date.hours();
  const minutes = date.minutes();

  /**
   * Format date into desired output. This is a 12-hour format with AM/PM
   * @example 12:45 PM
   */
  const formattedDate = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours < 12 ? "AM" : "PM"}`;

  return formattedDate;
}

/**
 * @function getDayName
 * @description Takes a datetime string with a timezone and extracts the full
 *   name of the day of the week from it.
 * @param {string} dateString - The datetime string with a timezone, in the
 *   format: ISO-date [timezone]
 * @returns {string} The full name of the day of the week (e.g., "Monday", "Tuesday",
 *   etc.)
 */
export function getDayName(dateString) {
  // Split the input into the ISO date and the timezone (if present)
  const [isoString, timezone] = dateString.split(" [");
  const cleanTimezone = timezone ? timezone.slice(0, -1) : null; // Remove closing ']'

  // Parse the date considering timezone (if present)
  const date = cleanTimezone
    ? moment.tz(isoString, cleanTimezone)
    : moment(isoString);

  // Get today's date and yesterday's date
  const today = moment();
  const yesterday = today.subtract(1, "days");

  // Check if the input date is today or yesterday
  if (date.isSame(today, "day")) {
    return "Today";
  } else if (date.isSame(yesterday, "day")) {
    return "Yesterday";
  } else {
    // Return the full day name for other dates
    return date.format("dddd");
  }
}

/**
 * @function dmDateFormate
 * @description Takes a datetime string with a timezone and formats it as a
 *   human-readable string relative to the viewer's local time zone.
 * @param {string} dateStringWithTZ - The datetime string with a timezone, in the
 *   format: ISO-date [timezone]
 * @returns {string} The formatted date string, in one of the following formats:
 *   - "Today" if the date is today
 *   - "Yesterday" if the date is yesterday
 *   - "D MMMM" otherwise (e.g., "13 September")
 */
export function dmDateFormate(dateStringWithTZ) {
  // Split the input into the ISO date and the timezone
  const [dateString, timeZone] = dateStringWithTZ.split(" [");
  const cleanTimeZone = timeZone ? timeZone.slice(0, -1) : "UTC"; // Remove closing bracket

  // Parse the input date using the provided time zone
  const inputDate = moment.tz(dateString, cleanTimeZone);

  // Get today's date and tomorrow's date relative to the viewer's local time zone
  const today = moment().startOf("day").tz(moment.tz.guess()); // Start of today in viewer's local time
  const tomorrow = today.clone().add(1, "days");
  const yesterday = today.clone().subtract(1, "days");

  // Compare and return the appropriate string
  if (inputDate.isSame(today, "day")) {
    return "Today";
  } else if (inputDate.isSame(tomorrow, "day")) {
    return "Tomorrow";
  } else if (inputDate.isSame(yesterday, "day")) {
    return "Yesterday";
  } else {
    return inputDate.format("D MMMM"); // e.g., "13 September"
  }
}

export function share(title, text, url) {
  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: text, // The text to be shared
        url: url, // The URL to be shared
      })
      .then(() => {})
      .catch((err) => {
        toast("Unable to share school. Please try again later. ", 3);
      });
  } else {
    toast(
      "Unable to share school on this device. Try to copy the link instead.",
      3
    );
  }
}

export function copyToClipboard(
  text,
  successMessage = "Copied to clipboard.",
  errorMessage = "Unable to copy."
) {
  // Check if the browser supports the Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Toaster({type: "successMessage", message: successMessage});
      })
      .catch((err) => {
        Toaster({type: "errorMessage", message: errorMessage});
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      Toaster({type: "successMessage", message: successMessage});
    } catch (err) {
      Toaster({type: "errorMessage", message: errorMessage});
    }
    document.body.removeChild(textarea);
  }
}

/**
 * @function easyFormatDate
 * @description Formats a given date as a human-readable string with various components.
 * @param {string|Date} inputDate - The date to format, as a string in the ISO format "YYYY-MM-DDTHH:MM:SS.sssZ" or a Date object.
 * @returns {object} An object containing the following properties:
 *  - time: The time in the format "HH:MM AM/PM"
 *  - day: The day of the week, or a relative string like "Just now", "Today", "Tomorrow", or "Yesterday"
 *  - month: The month, as a string (e.g. "Jan", "Feb", ...)
 *  - dayNum: The day of the month, as a number (e.g. 1, 2, ...)
 *  - monthNum: The month, as a number (e.g. 1, 2, ...)
 *  - year: The year, as a number (e.g. 2022, 2023, ...)
 */
function easyFormatDate(inputDate) {
  const date = new Date(inputDate);
  const now = new Date();

  /**
   * Formats the time component of a date.
   * @param {Date} date - The date object to extract time from.
   * @returns {string} The formatted time in "HH:MM AM/PM" format.
   */
  const formatTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  /**
   * Calculates the difference in days between two dates.
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The difference in days.
   */
  const diffInDays = (date1, date2) => {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor((date1 - date2) / msPerDay);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const time = formatTime(date);
  const dayNum = date.getDate();
  const monthNum = date.getMonth() + 1;
  const year = date.getFullYear();
  const month = monthsOfYear[date.getMonth()];

  let day;
  const diffDays = diffInDays(
    new Date(date.toDateString()),
    new Date(now.toDateString())
  );

  if (diffDays === 0) {
    day = "Today";
  } else if (diffDays === 1) {
    day = "Tomorrow";
  } else if (diffDays === -1) {
    day = "Yesterday";
  } else {
    day = daysOfWeek[date.getDay()];
  }

  return {time, day, month, dayNum, monthNum, year};
}

function isFutureDate(date) {
  // Parse the input date
  const parsedDate = new Date(date);
  // Get the current date and time
  const currentDate = new Date();

  // Compare the parsed date with the current date
  return parsedDate > currentDate;
}
const isDateBetween = (upperBound, lowerBound, check = null) => {
  // Parse the upper bound date
  const parsedUpperBound = new Date(upperBound);
  if (isNaN(parsedUpperBound)) return false;

  // Parse the lower bound date
  const parsedLowerBound = new Date(lowerBound);
  if (isNaN(parsedLowerBound)) return false;

  // Parse the check date, defaulting to the current date if not provided
  const parsedCheck = check ? new Date(check) : new Date();
  if (isNaN(parsedCheck)) return false;

  // Compare the parsed dates: check should be between lower and upper bounds
  return parsedCheck > parsedLowerBound && parsedCheck < parsedUpperBound;
};

const dateDifference = (higher, lower = null) => {
  // Parse the higher date
  const parsedHigherDate = new Date(higher);
  if (isNaN(parsedHigherDate)) return null; // Return null if invalid higher date

  // Parse the lower date, default to current date if null
  const parsedLowerDate = lower ? new Date(lower) : new Date();
  if (isNaN(parsedLowerDate)) return null; // Return null if invalid lower date

  // Calculate the difference in milliseconds
  const diffInMilliseconds = parsedHigherDate - parsedLowerDate;

  // Calculate the difference in seconds, minutes, hours, and days
  const seconds = Math.abs(diffInMilliseconds) / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    seconds: Math.floor(seconds),
    minutes: Math.floor(minutes),
    hours: Math.floor(hours),
    days: Math.floor(days),
  };
};

const timeDelta = (higher, lower = null) => {
  // Parse the higher date
  const parsedHigherDate = new Date(higher);
  if (isNaN(parsedHigherDate)) return null; // Return null if invalid higher date

  // Parse the lower date, default to current date if null
  const parsedLowerDate = lower ? new Date(lower) : new Date();
  if (isNaN(parsedLowerDate)) return null; // Return null if invalid lower date

  // Calculate the difference in milliseconds
  const diffInMilliseconds = Math.abs(parsedHigherDate - parsedLowerDate);

  // Calculate the difference for each unit
  const seconds = diffInMilliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30.44; // Average days in a month
  const years = months / 12;

  // Determine the largest unit of time
  if (years >= 1) {
    return {label: "years", difference: Math.floor(years)};
  } else if (months >= 1) {
    return {label: "months", difference: Math.floor(months)};
  } else if (days >= 1) {
    return {label: "days", difference: Math.floor(days)};
  } else if (hours >= 1) {
    return {label: "hours", difference: Math.floor(hours)};
  } else if (minutes >= 1) {
    return {label: "minutes", difference: Math.floor(minutes)};
  } else {
    return {label: "seconds", difference: Math.floor(seconds)};
  }
};

const getCurrentDate = (format = "YYYY-MM-DD") => {
  const today = new Date(); // Get the current date
  const day = String(today.getDate()).padStart(2, "0"); // Day with leading zero
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month (0-based index, so +1)
  const year = today.getFullYear(); // Full year (e.g., 2024)

  switch (format) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    default:
      return `${year}-${month}-${day}`; // Default format is YYYY-MM-DD
  }
};

const countDown = (seconds, setTimer, callBack = () => {}) => {
  let totalSeconds = seconds;

  function updateCountdown() {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      setTimer("00:00:00");
      callBack();
      return;
    }

    // Calculate hours, minutes, and seconds remaining
    const remainingHours = String(Math.floor(totalSeconds / 3600)).padStart(
      2,
      "0"
    );
    const remainingMinutes = String(
      Math.floor((totalSeconds % 3600) / 60)
    ).padStart(2, "0");
    const remainingSeconds = String(totalSeconds % 60).padStart(2, "0");

    setTimer(`${remainingHours}:${remainingMinutes}:${remainingSeconds}`);
    totalSeconds--;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Return cleanup function
  return () => clearInterval(countdownInterval);
};

const  RandGen = (List, chunkSize) => {
  if (!Array.isArray(List)) {
    throw new Error("First argument must be an array.");
  }
  if (typeof chunkSize !== "number" || chunkSize <= 0) {
    throw new Error("Second argument must be a positive integer.");
  }

  // Create a shallow copy of the array to avoid modifying the original array
  const shuffledArray = [...List];

  // Shuffle the array randomly using the Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Split the shuffled array into chunks
  const result = [];
  for (let i = 0; i < shuffledArray.length; i += chunkSize) {
    result.push(shuffledArray.slice(i, i + chunkSize));
  }

  return result;
}

export {
  isFutureDate,
  easyFormatDate,
  getCurrentDate,
  isDateBetween,
  dateDifference,
  countDown,
  timeDelta,
  RandGen,
};