# Timezone Utility Library

## Overview

This library provides a set of functions to work with timezones in a web application. It includes functions for retrieving the user's timezone and retrieving a custom timezone date string. Works in tandem with `vitest` time utils ( see below )

## Usage

Example:

usage with `vite`

```javascript
it('Sets User Timezone', () => {
  const tz = getCustomDate({ timeZone: 'America/New_York' });
  vi.useFakeTimers();
  vi.setSystemTime(tz);

  const newTime = new Date().getHours();

  vi.useRealTimers();

  const realTime = new Date().getHours();
  expect(newTime).not.toEqual(realTime);
});
```

Contributing
We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

Author
Joel Rubin
