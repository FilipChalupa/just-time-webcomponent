# Just Time Webcomponent [![npm](https://img.shields.io/npm/v/just-time-webcomponent.svg)](https://www.npmjs.com/package/just-time-webcomponent) [![Dependencies](https://img.shields.io/david/FilipChalupa/just-time-webcomponent.svg)](https://www.npmjs.com/package/just-time-webcomponent?activeTab=dependencies) ![npm type definitions](https://img.shields.io/npm/types/just-time-webcomponent.svg) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/just-time-webcomponent)

Webcomponent showing current time. Inspired by [just-time.eu](https://just-time.eu/). Try [demo.html](https://filipchalupa.cz/just-time-webcomponent/demo.html).

# How to use

```html
<script
	type="module"
	src="https://unpkg.com/just-time-webcomponent@latest/dist/index.es.js?module"
></script>

Right now is <just-time></just-time>.
```

## Or without seconds

```html
Right now is <just-time hide-seconds></just-time>.
```

## Prevent size jumps

Set `font-variant-numeric: tabular-nums` in your CSS. Use a font supporting this like [Google fonts Open Sans](https://fonts.google.com/specimen/Open+Sans).
