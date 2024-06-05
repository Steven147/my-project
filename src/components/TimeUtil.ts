export function getFormattedTime(): string {
  const now = new Date(); // get current time
  const hours = now.getHours(); // get hour
  const minutes = now.getMinutes(); // get minutes

  // add  leading zero if hours or minutes is less than 10
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // return combined format
  return `${formattedHours}:${formattedMinutes}`;
}
