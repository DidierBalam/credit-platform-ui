const getLocalTime = (date: Date): string => {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const determineIsNew = (time: Date): boolean => {
  const today = new Date();

  if (
    time.getFullYear() == today.getFullYear() &&
    time.getMonth() == today.getMonth() &&
    time.getDate() == today.getDate() &&
    time.getHours() == today.getHours() &&
    today.getMinutes() - time.getMinutes() <= 5
  ) {
    return true;
  } else return false;
};

export { getLocalTime, determineIsNew };
