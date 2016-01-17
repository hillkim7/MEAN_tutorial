# First application using MEAN stack .
This source codes is from the book example which is titled 'MEAN Web Development'.

## Installation

### Required packages
- Run following commands in the root application folder.

```bash
# Grunt support
npm install -g grunt-cli

# Bower support
npm install -g bower
```

### Download packages
```bash
# download npm packages
npm install

# download bower packages
bower install
```

### Required packages for testing

```bash
# Express model and controller tests using Mocha test framework
npm install -g mocha

# AngularJS unit tests using Karma
npm install -g karma-cli

# End to End(E2E) Test using the Protractor
npm install -g protractor

# install the Selenium standalone server, which is used to handle Protractor's tests.
node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update
```

## Run

- Run server
```bash
grunt
```

- Run test
```bash
grunt test
```

- Lint source
```bash
grunt lint
```
