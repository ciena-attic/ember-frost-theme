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