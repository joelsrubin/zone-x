import { it, expect, vi } from 'vitest';
import { getCurrentTimeZone, getCustomTimeZoneDateString } from '.';

it('Gets User Timezone', () => {
  expect(getCurrentTimeZone()).toBe('America/Chicago');
});
it('Sets User Timezone', () => {
  const tz = getCustomTimeZoneDateString('America/New_York');
  vi.useFakeTimers();
  vi.setSystemTime(tz);

  const newTime = new Date().getHours();

  vi.useRealTimers();

  const realTime = new Date().getHours();
  expect(newTime).not.toEqual(realTime);
});
