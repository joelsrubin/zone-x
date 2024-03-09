import { it, expect, vi } from 'vitest';
import { getCurrentTimeZone, getCustomDate } from '.';

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

it('test', () => {
  const time = getCustomDate({ timeZone: 'America/New_York', hour: 24 });
  vi.useFakeTimers();
  vi.setSystemTime(time);
});
