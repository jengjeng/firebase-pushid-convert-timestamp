Firebase Realtime Database PushID Convert Timestamp
=========
[![Build Status](https://travis-ci.org/jengjeng/firebase-pushid-convert-timestamp.svg?branch=master)](https://travis-ci.org/jengjeng/firebase-pushid-convert-timestamp) [![Coverage Status](https://coveralls.io/repos/github/jengjeng/firebase-pushid-convert-timestamp/badge.svg?branch=master)](https://coveralls.io/github/jengjeng/firebase-pushid-convert-timestamp?branch=master)

Convert your Firebase Realtime Database PushID to timestamp's number.

## Installation

  `npm install @jengjeng/firebase-pushid-convert-timestamp`

## Usage

    var decodeFirebasePushID = require('@jengjeng/firebase-pushid-convert-timestamp');

    var firebasePushID = '-KwKoJBVZO4fJt2_6vgJ';
    var output = decodeFirebasePushID(firebasePushID);

  Output should be `{"timestamp":1507899556640,"randomness":2.685256451527677e+21}`

## Tests

  `npm test`

## Contributing

Add your functions and unit tests for any new or changed functionality. Lint and test your code.