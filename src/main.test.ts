import { it, expect, vi } from 'vitest';
import { getCurrentTimeZone, getCustomDate, setCustomDate } from '.';

it('Gets User Timezone', () => {
  expect(getCurrentTimeZone()).toBe('America/Chicago');
});
it('Sets User Timezone', () => {
  const tz = getCustomDate({ timeZone: 'America/New_York' });
  vi.useFakeTimers();
  vi.setSystemTime(tz);

  const newTime = new Date().getHours();

  vi.useRealTimers();

  const realTime = new Date().getHours();
  expect(newTime).not.toEqual(realTime);
});

it('Accurately Detects when Today is No Longer Today in EST', () => {
  const time = getCustomDate({
    timeZone: 'America/New_York',
    time: 'midnight',
  });
  vi.useFakeTimers();
  setCustomDate(time);

  const pacificTime = getCustomDate({
    timeZone: 'America/Los_Angeles',
    time: '9pm',
  });

  console.log('PACIFIC TIME: ', pacificTime.toDateString());
  console.log('EASTERN TIME: ', vi.getMockedSystemTime()?.toDateString());
  expect(pacificTime.getDate()).not.toEqual(
    vi.getMockedSystemTime()?.getDate()
  );
});
