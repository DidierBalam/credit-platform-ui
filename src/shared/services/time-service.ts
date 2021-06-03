const getLocalTime = (value: Date): string => {
  const date = new Date(value)
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const determineIsNew = (value: Date): boolean => {
  const time = new Date(value)
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
