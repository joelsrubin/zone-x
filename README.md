# Timezone Utility Library

## Overview

This library provides a set of functions to work with timezones in a web application. It includes functions for retrieving the user's timezone and retrieving a custom timezone date string. Works in tandem with `vitest` time utils ( see below )

## Usage

Example:

usage with `vite`

```javascript
const time = getCustomDate({
  timeZone: 'America/New_York',
  time: 'midnight',
});
vi.useFakeTimers();
vi.setSystemTime(time);

const pacificTime = getCustomDate({
  timeZone: 'America/Los_Angeles',
  time: '9pm',
});

console.log('PACIFIC TIME: ', pacificTime.toDateString());
// ^ PACIFIC TIME:  Sat Mar 09 2024
console.log('EASTERN TIME: ', vi.getMockedSystemTime()?.toDateString());
// ^ EASTERN TIME:  Sun Mar 10 2024
expect(pacificTime.getDate()).not.toEqual(vi.getMockedSystemTime()?.getDate());
```

Contributing
We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

Author
Joel Rubin
