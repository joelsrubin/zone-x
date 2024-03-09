import { it, expect, vi } from 'vitest';
import { getUsersTimeZone, setUserTimeZone } from '.';

it('Gets User Timezone', () => {
  expect(getUsersTimeZone()).toBe('America/Chicago');
});
it('Sets User Timezone', () => {
  const tz = setUserTimeZone('America/New_York');

  vi.useFakeTimers();
  vi.setSystemTime(tz);
  const newTime = new Date().getHours();
  vi.useRealTimers();
  const realTime = new Date().getHours();
  console.log({ newTime, realTime });
  expect(newTime).not.toEqual(realTime);
});
