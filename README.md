# Timezone Utility Library

## Overview

This library provides a set of functions to work with timezones in a web application. It includes functions for retrieving the user's timezone and retrieving a custom timezone date string. Works in tandem with `vitest` time utils ( see below )

## Installation

To use this library in your project, you can install it using npm:

```bash
yarn dlx jsr add @zone-x/zone-x
```

Usage

1. `getUsersTimeZone()`
   This function returns the user's timezone using the browser's Intl API.

Example:

usage with `vite`

```javascript
it('Sets User Timezone', () => {
  const tz = getCustomTimeZoneDateString('America/New_York');
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
