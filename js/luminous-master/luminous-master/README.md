![imgix logo](https://assets.imgix.net/imgix-logo-web-2014.pdf?page=2&fm=png&w=200&h=200)

# Luminous [![Build Status](https://travis-ci.org/imgix/luminous.svg?branch=master)](https://travis-ci.org/imgix/luminous) [![Slack Status](http://slack.imgix.com/badge.svg)](http://slack.imgix.com)

A simple, lightweight, no-dependencies JavaScript image lightbox.

* [Installation](#installation)
* [Usage](#usage)
* [Options / Defaults](#options-defaults)
* [Browser Support](#browser-support)
* [Theming](#theming)
* [Meta](#meta)


<a name="installation"></a>
## Installation

* **NPM**: `npm install luminous-lightbox`
* **Bower**: `bower install luminous`
* **Manual**: [Download](https://github.com/imgix/luminous/archive/master.zip) and use `dist/luminous.min.js` or `dist/luminous.js`


<a name="usage"></a>
## Usage

Once you've installed Luminous via one of the above methods, you're ready to get started. There are no dependencies, so you can just start making cool stuff. Check out the [announcement blog post](http://blog.imgix.com/2016/01/06/better-lightbox-zoom-viewer-with-imgix.html) for a demo, or take a peek here: https://imgix.github.io/luminous. Here's an example of the most basic possible implementation:

``` html
<a href="http://assets.imgix.net/dog.png?w=1600">
  <img alt="A dog!" src="http://assets.imgix.net/dog.png?w=400">
</a>
```

``` javascript
new Luminous(document.querySelector('a'));
```


<a name="options-defaults"></a>
## Options / Defaults

Here's an example of using Luminous with a custom configuration. All of the listed options are displayed with their default value.

``` javascript
var options = {
	// Prefix for generated element class names (e.g. `my-ns` will
	// result in classes such as `my-ns-lightbox`. Default `lum-`
	// prefixed classes will always be added as well.
	namespace: null,
	// Which attribute to pull the lightbox image source from.
	sourceAttribute: 'href',
	// Which attribute to pull the caption from, if any.
	captionAttribute: null,
	// The event to listen to on the _trigger_ element: triggers opening.
	openTrigger: 'click',
	// The event to listen to on the _lightbox_ element: triggers closing.
	closeTrigger: 'click',
	// Allow closing by pressing escape.
	closeWithEscape: true,
	// Automatically close when the page is scrolled.
	closeOnScroll: false,
	// A selector defining what to append the lightbox element to.
	appendToSelector: 'body',
	// If present (and a function), this will be called
	// whenever the lightbox is opened.
	onOpen: null,
	// If present (and a function), this will be called
	// whenever the lightbox is closed.
	onClose: null,
	// When true, adds the `imgix-fluid` class to the `img`
	// inside the lightbox. See https://github.com/imgix/imgix.js
	// for more information.
	includeImgixJSClass: false,
	// Add base styles to the page. See the "Theming"
	// section of README.md for more information.
	injectBaseStyles: true,
};

new Luminous(document.querySelector('a'), options);
```


<a name="theming"></a>
## Theming

By default, Luminous injects an extremely basic set of styles into the page. You will almost certainly want to extend these basic styles for a prettier, more usable experience that matches your site. There is an included basic theme that may meet your needs, or at least give a good example of how to build out your own custom styles. The `namespace` option can be used as a way to easily apply different themes to specific instances of Luminous.

If you need to do something very out of the ordinary, or just prefer to include the default styles in CSS yourself, you can pass `injectBaseStyles: false` when instantiating a new instance of Luminous. Please note that if you disable the included base styles, you will still need to provide an animation for `.lum-lightbox.lum-opening` and `.lum-lightbox.lum-closing` (this can be a "noop" style animation, as seen in the base styles source).


<a name="browser-support"></a>
## Browser Support

We support the latest version of Google Chrome (which [automatically updates](https://support.google.com/chrome/answer/95414) whenever it detects that a new version of the browser is available). We also support the current and previous major releases of desktop Firefox, Internet Explorer, and Safari on a rolling basis. Mobile support is tested on the most recent minor version of the current and previous major release for the default browser on iOS and Android (e.g., iOS 9.2 and 8.4). Each time a new version is released, we begin supporting that version and stop supporting the third most recent version.


<a name="meta"></a>
## Meta

Luminous was made by [imgix](http://imgix.com). It's licensed under the BSD 2-Clause license (see the [license file](https://github.com/imgix/luminous/blob/master/license.md) for more info). Any contribution is absolutely welcome, but please review the [contribution guidelines](https://github.com/imgix/luminous/blob/master/contributing.md) before getting started.
