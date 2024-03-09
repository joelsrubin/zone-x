# Timezone Utility Library

## Overview

This library provides a set of functions to work with timezones in a web application. It includes functions for retrieving the user's timezone and setting the timezone for a user.

## Installation

To use this library in your project, you can install it using npm:

```bash
yarn dlx jsr add @zone-x/zone-x
```

Usage

1. `getUsersTimeZone()`
   This function returns the user's timezone using the browser's Intl API.

Example:

```javascript
import { getUsersTimeZone } from 'my-timezone-library';

const userTimeZone = getUsersTimeZone();
console.log(`User's timezone: ${userTimeZone}`);
```

Contributing
We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

Author
Joel Rubin
