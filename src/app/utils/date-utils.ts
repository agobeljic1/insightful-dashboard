export const formatTimeDifference = (start: Date, end: Date) => {
  if (!start || !end) {
    return '00:00';
  }
  let miliseconds = end.getTime() - start.getTime();
  let seconds = Math.floor(miliseconds / 1000);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

export const areDatesOnTheSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
