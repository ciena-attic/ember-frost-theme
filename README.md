[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-theme.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-theme
[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-theme.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-theme
[npm-img]: https://img.shields.io/npm/v/ember-frost-theme.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-theme

# ember-frost-theme
SASS based default theme variables for Frost projects

# usage

`ember install ember-frost-theme`

Modify your ember-cli-build.js to include 

```
var frostTheme = require('frostTheme');

var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        frostTheme.includePaths
      ]
    }
  });
```

Modify your app.scss to include

```
@import 'frost-theme';
@include frost-theme-default; // Or whatever theme you would prefer
```

You now have access to the theme variables

e.g.

`$frost-button-primary`

# contribution

All uses of color in frost components must be aliased and included in the default frost theme with the appropriate palette reference