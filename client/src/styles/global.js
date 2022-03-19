import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}

#root {
  height: inherit;
}

* {
    box-sizing: border-box;
  }

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 1em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}


button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}


button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}


legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}


progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}


template {
  display: none;
}


[hidden] {
  display: none;
}


::placeholder {
  color: rgba(54,54,54,.3)
}


// ******************** NORMALIZE COMPLETE **************************

  a {
    color: #3273dc;
    &:hover {
      color: #779bd5;
    }
  }

    ul[class],
    ol[class] {
        list-style: none;
    }
    

    .form-input {
        -webkit-appearance: none;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #363636;
        max-width: 100%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        margin: 8px 0;
        min-height: 50px;
    }

    .form-submit-input {
        width: 100%;
        background-color: #3273dc;
        border-color: transparent;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:disabled {
          background-color: rgba(50,115,220,0.3);
          cursor: none;
        }
    }

`;

export default GlobalStyle;
