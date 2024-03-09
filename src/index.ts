export function getUsersTimeZone(): TimeZone {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;
}

export function setUserTimeZone(timeZone: TimeZone): string {
  const setzone = new Date().toLocaleString('en-US', { timeZone });
  return setzone;
}
