/** Gets users timezone from system settings */
export function getCurrentTimeZone(): TimeZone {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;
}

type Hours =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
/**
 * Retrieves a custom date based on the specified parameters.
 *
 * @param {Object} options - Options for creating the custom date.
 * @param {TimeZone} options.timeZone - The time zone for the custom date.
 * @param {number} [options.hour=0] - The hour of the custom date (default is 0).
 * @returns {Date} - The custom date object.
 */
export function getCustomDate({
  timeZone,
  hour = 0,
}: {
  timeZone: TimeZone;
  hour?: Hours;
}): Date {
  const setzone = new Date().toLocaleString('en-US', { timeZone });
  const date = new Date(setzone);
  date.setHours(hour, 0, 0, 0);
  return date;
}
