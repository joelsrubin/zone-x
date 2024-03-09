/** Gets users timezone from system settings */
export function getCurrentTimeZone(): TimeZone {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;
}
/** Returns a Date string set to custom timezone */
export function getCustomTimeZoneDateString(timeZone: TimeZone): string {
  const setzone = new Date().toLocaleString('en-US', { timeZone });
  return setzone;
}
