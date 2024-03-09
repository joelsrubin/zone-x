/** Gets users timezone from system settings */
export function getUsersTimeZone(): TimeZone {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;
}
/** Returns a Date object set to custom timezone */
export function setUserTimeZone(timeZone: TimeZone): string {
  const setzone = new Date().toLocaleString('en-US', { timeZone });
  return setzone;
}
