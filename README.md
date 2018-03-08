[![Build Status](https://travis-ci.org/luketheobscure/ember-pseudolocalize.svg?branch=master)](https://travis-ci.org/luketheobscure/ember-pseudolocalize)
[![Code Climate](https://codeclimate.com/github/luketheobscure/ember-pseudolocalize/badges/gpa.svg)](https://codeclimate.com/github/luketheobscure/ember-pseudolocalize)
[![dependencies](https://david-dm.org/luketheobscure/ember-pseudolocalize.svg)](https://david-dm.org/luketheobscure/ember-pseudolocalize)


# Ember-pseudolocalize

Ember-pseudolocalize is a tiny addon that helps you ensure that your app is fully localized. Designed to work with [ember-i18n](https://github.com/jamesarosen/ember-i18n).

## Installation

Ember-pseudolocalize should work with any verion of Ember 2.x (tested with 2.8 and beyond), and ember-i18n 5.x. Install with:

    ember install ember-pseudolocalize

## Pseudolocaliwhat now?

[Pseudolocalization](https://en.wikipedia.org/wiki/Pseudolocalization) is the process of replacing characters in a string with accented versions, but in a way that it's still legible. Śōmȇŧĥĩňĝ ĺĩƙȇ ŧĥĩś, so that you can easily identify untranslated strings. It's often used in conjunction with techniques that lengthen strings to help spot UI/UX issues (non-English strings are often [more than 30% longer](https://www.w3.org/International/articles/article-text-size)).

## Displaying pseudolocalized strings

Simply switch your locale to to `en-XA`. There's a variety of browser addons available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/quick-accept-language-switc/) and [Chrome](https://chrome.google.com/webstore/detail/quick-language-switcher/pmjbhfmaphnpbehdanbjphdcniaelfie). Note that they usually change your `Accept-Language` header, so if your language detection relies on `navigator.language` or similar, you'll need to manually change the language of your browser.

## Customization

Customize how the strings are pseudolocalized by editing your ember-cli-build and including an object at `ember-pseudolocalize` (see examples below). Customization options are passed directly to [pseudoloc](https://github.com/bunkat/pseudoloc). Some of the relevant options are listed below.


#### Prepend, Append

Specifies the strings that should surround the pseudolocalized strings. The prepended and appended strings help to locate strings that have been cut off or improperly concatenated together - localized strings should use tokens for data since different languages have different word orders.

Default is `[!!` and `!!]`.

```javascript
// ember-cli-build.js
var app = new EmberApp({
  'ember-pseudolocalized': {
    prepend: '!~~',
    append: '~~!',
  }
});

// 'string with {{ token }}' -> '[## śťřīņğ ŵıţħ {{ token }}!!]'
```


#### StartDelimiter, EndDelimiter

Ember-i18n allows you to customize the way that tokens are interpolated in strings. By default ember-pseudolocalize supports double-stache (`{{ foo }}`) notation. If you're using something else (including triple stache notation), you will need to manually edit the start and end delimiter.

```javascript
// ember-cli-build.js
// For "triple-stache" notation
var app = new EmberApp({
  'ember-pseudolocalized': {
    startDelimiter: '{{{',
    endDelimiter: '}}}',
  }
});
```

#### Extend

Extends the width of the string by the specified percentage. Useful if you will be localizing into languages such as German which can be 30% longer than English.

Default is `0`.

```javascript
// ember-cli-build.js
var app = new EmberApp({
  'ember-pseudolocalized': {
    extend: '0.3', // 30%
  }
});

// 'string with {{ token }}' ->
//'[!!ŝťŕĩŉğ ŵĩťħ {{ token}}.        !!]'
```

## Removing from your production payload

While ember-pseudolocalize is a small library, you might still want to remove it from your production payload using Ember CLI's [addon blacklist feature](https://ember-cli.com/user-guide/#whitelisting-and-blacklisting-assets).

```javascript
var environment = process.env.EMBER_ENV;
var pluginsToBlacklist = environment === 'production' ? ['ember-pseudolocalize'] : [];

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    addons: {
      blacklist: pluginsToBlacklist
    }
  };
}
```
