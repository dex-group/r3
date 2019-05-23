import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Zirkon;
    src: url('/fonts/Zirkon.woff') format('woff');
  }

  @font-face {
    font-family: Zirkon-links;
    src: url('/fonts/Zirkon-links.woff') format('woff');
  }

  @font-face {
    font-family: 'Suisse Int’l Mono';
    src: url('/fonts/SuisseIntlMono-Thin-WebTrial.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: TiemposHeadline-Bold;
    src: url('/fonts/TiemposHeadline-Bold.eot');
    src: url('/fonts/TiemposHeadline-Bold.eot?#iefix') format('embedded-opentype'),        url('/fonts/TiemposHeadline-Bold.woff2') format('woff2'),
         url('/fonts/TiemposHeadline-Bold.woff') format('woff'),
         url('/fonts/TiemposHeadline-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: #fefefe;
    background: #0C0A0A;
    min-height: 100vh;
    font-family: Zirkon, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    /* -webkit-font-smoothing: antialiased; */
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-track-piece:end, ::-webkit-scrollbar-track-piece:start {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: none;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :-moz-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  ::-moz-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :-ms-input-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus:-moz-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus::-moz-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  article, aside, details, figcaption, figure, footer, header, main, menu, nav,   section, summary {
    display: block
  }

  audio, canvas, progress, video {
    display: inline-block
  }

  audio:not([controls]) {
    display: none;
    height: 0
  }

  progress {
    vertical-align: baseline
  }

  [hidden], template {
    display: none
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
  }

  b, strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button, input, optgroup, select, textarea {
  font: inherit;
    margin: 0;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: transparent;
    width: 100%;

    &::-ms-expand {
      display: none;
    }

    option {
      color: #262626;
    }
  }

  textarea {
    overflow: auto;
  }

  [type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
  }

  [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
    height: auto;
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type=search]::-webkit-search-cancel-button, [type=search]  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  input:-internal-autofill-previewed,
  input:-internal-autofill-selected,
  textarea:-internal-autofill-previewed,
  textarea:-internal-autofill-selected,
  select:-internal-autofill-previewed,
  select:-internal-autofill-selected {
    background-color: rgba(255, 255, 255, .6) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  h1 {
    margin: 0;
    font-family: TiemposHeadline-Bold;
    font-weight: bold;
    font-size: 4.5rem;
    line-height: 1.1;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-family: TiemposHeadline-Bold;
    font-size: 3rem;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 1.38316rem;
    line-height: 1.1;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1;
  }

  h5 {
    font-weight: bold;
    font-size: 0.85028rem;
  }

  h6 {
    font-weight: bold;
    font-size: 0.78405rem;
  }

  hgroup {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  ul {
    list-style-position: outside;
    list-style-image: none;
    margin: 0;
  }

  ol {
    padding: 0;
    margin: 0 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  dd {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  p {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  figure {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  pre {
    padding: 0;
    margin: 0 0 1.45rem 0;
    font-size: 0.85rem;
    line-height: 1.4;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
  }

  blockquote {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  form {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  noscript {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  iframe {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  hr {
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  b, strong {
    font-weight: bold;
  }

  ol li {
    list-style: none;
  }

  ul li {
    list-style: none;
  }

  blockquote *:last-child,
  li *:last-child,
  p *:last-child {
    margin-bottom: 0;
  }

  .mw8 {
    max-width: 800px;
    margin: 0 auto;
  }

  a {
    display: inline-block;
    position: relative;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #fff;
    text-decoration: none;
    font-family: Zirkon-links;
    &:hover {
      color: rgba(0, 213, 255, .4);
    }
    &:after,
    &:before {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      visibility: hidden;
      clip: auto;
    }
    &:before {
      left: 2px;
      text-shadow: -2px 0 #ff00f8;
    }
    &:after {
      left: -2px;
      text-shadow: -2px 0 #00d5ff;
      z-index: -1;
    }
    &:hover::before {
      visibility: visible;
      animation: glitch-anim 2.5s linear infinite alternate-reverse;
    }
    &:hover::after {
      visibility: visible;
      animation: glitch-anim-2 4s linear infinite alternate-reverse;
    }
  }

  /* a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #fff;
    text-decoration: none;
    font-family: Zirkon-links;
    position: relative;
    display: inline-block;
    transition: all .2s ease 0s;
    .glitch {
      position: relative;
      display: inline-block;
    }
    .glitch1 {
      position: absolute;
      left: 0;
      top: 0;
      color: #4900a5;
      transition: all .2s;
      opacity: 0;
    }
    .glitch2 {
      position: absolute;
      left: 0;
      top: 0;
      color: #43E7FD;
      transition: all .2s;
      opacity: 0;
    }
    &:hover {
      .glitch1 {
        animation: glitch1 .4s ease infinite;
        opacity: .8;
      }
      .glitch2 {
        animation: glitch2 .2s ease infinite;
        opacity: .8;
      }
    }
  } */

  a[target="_blank"] {
    cursor: ne-resize;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  a:visited {
    color: rgba(255, 255, 255, 1);
  }

  @keyframes glitch1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
    100% {
      -webkit-transform: translate3d(2px, 2px, 0);
      transform: translate3d(2px, 2px, 0)
    }
  }
  @keyframes glitch2 {
    0% {
      -webkit-transform: translate3d(0, 1%, 0);
      transform: translate3d(0, 1%, 0)
    }
    100% {
      -webkit-transform: translate3d(-1px, -1px, 0);
      transform: translate3d(-1px, -1px, 0)
    }
  }

  @keyframes glitch-anim {
    0% {
        clip: rect(29px, 9999px, 11px, 0);
        opacity: 1
    }

    4% {
        clip: rect(11px, 9999px, 21px, 0);
        opacity: 0
    }

    8% {
        clip: rect(18px, 9999px, 1px, 0);
        opacity: 0
    }

    12% {
        clip: rect(17px, 9999px, 5px, 0);
        opacity: 1
    }

    16% {
        clip: rect(3px, 9999px, 27px, 0);
        opacity: 0
    }

    20% {
        clip: rect(20px, 9999px, 25px, 0);
        opacity: 1
    }

    25% {
        clip: rect(25px, 9999px, 19px, 0);
        opacity: 0
    }

    29% {
        clip: rect(12px, 9999px, 151px, 0);
        opacity: 1
    }

    33% {
        clip: rect(29px, 9999px, 1px, 0);
        opacity: 0
    }

    37% {
        clip: rect(24px, 9999px, 31px, 0);
        opacity: 1
    }

    41% {
        clip: rect(9px, 9999px, 1px, 0);
        opacity: 0
    }

    45% {
        clip: rect(1px, 9999px, 17px, 0);
        opacity: 1
    }

    50% {
        clip: rect(3px, 9999px, 27px, 0);
        opacity: 0
    }

    54% {
        clip: rect(17px, 9999px, 151px, 0);
        opacity: 1
    }

    58% {
        clip: rect(15px, 9999px, 10px, 0);
        opacity: 0
    }

    62% {
        clip: rect(1px, 9999px, 15px, 0);
        opacity: 1
    }

    66% {
        clip: rect(10px, 9999px, 3px, 0);
        opacity: 0
    }

    70% {
        clip: rect(27px, 9999px, 117px, 0);
        opacity: 1
    }

    75% {
        clip: rect(2px, 9999px, 5px, 0);
        opacity: 0
    }

    79% {
        clip: rect(4px, 9999px, 13px, 0);
        opacity: 1
    }

    83% {
        clip: rect(8px, 9999px, 44px, 0);
        opacity: 0
    }

    87% {
        clip: rect(13px, 9999px, 14px, 0);
        opacity: 1
    }

    91% {
        clip: rect(21px, 9999px, 31px, 0);
        opacity: 0
    }

    95% {
        clip: rect(0, 9999px, 33px, 0);
        opacity: 1
    }

    to {
        clip: rect(9px, 9999px, 148px, 0);
        opacity: 0
    }
}

@keyframes glitch-anim-2 {
    0% {
        clip: rect(38px, 9999px, 15px, 0)
    }

    6% {
        clip: rect(43px, 9999px, 105px, 0)
    }

    10% {
        clip: rect(5px, 9999px, 0, 0)
    }

    13% {
        clip: rect(16px, 9999px, 14px, 0)
    }

    16% {
        clip: rect(12px, 9999px, 106px, 0)
    }

    20% {
        clip: rect(1px, 9999px, 189px, 0)
    }

    23% {
        clip: rect(20px, 9999px, 41px, 0)
    }

    26% {
        clip: rect(30px, 9999px, 176px, 0)
    }

    30% {
        clip: rect(12px, 9999px, 32px, 0)
    }

    33% {
        clip: rect(22px, 9999px, 155px, 0)
    }

    36% {
        clip: rect(14px, 9999px, 40px, 0)
    }

    40% {
        clip: rect(25px, 9999px, 86px, 0)
    }

    43% {
        clip: rect(13px, 9999px, 94px, 0)
    }

    46% {
        clip: rect(1px, 9999px, 139px, 0)
    }

    50% {
        clip: rect(14px, 9999px, 76px, 0)
    }

    53% {
        clip: rect(2px, 9999px, 124px, 0)
    }

    56% {
        clip: rect(6px, 9999px, 70px, 0)
    }

    60% {
        clip: rect(9px, 9999px, 140px, 0)
    }

    63% {
        clip: rect(7px, 9999px, 151px, 0)
    }

    66% {
        clip: rect(1px, 9999px, 131px, 0)
    }

    70% {
        clip: rect(21px, 9999px, 183px, 0)
    }

    73% {
        clip: rect(11px, 9999px, 60px, 0)
    }

    76% {
        clip: rect(91px, 9999px, 28px, 0)
    }

    80% {
        clip: rect(14px, 9999px, 193px, 0)
    }

    83% {
        clip: rect(2px, 9999px, 150px, 0)
    }

    86% {
        clip: rect(3px, 9999px, 131px, 0)
    }

    90% {
        clip: rect(17px, 9999px, 45px, 0)
    }

    93% {
        clip: rect(18px, 9999px, 37px, 0)
    }

    96% {
        clip: rect(9px, 9999px, 46px, 0)
    }

    to {
        clip: rect(38px, 9999px, 15px, 0)
    }
}
  .headroom-wrapper {
    width: 100%;
    position: fixed;
    z-index: 100;
  }
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
  .headroom--scrolled {
    transition: transform 600ms cubic-bezier(.47, 0, .745, .715);
  }

  .splitting .word {
    display: inline-block;
    overflow-x: visible;
    --char-percent: calc(var(--char-index) / (var(--char-total) - 1))
  }
  .splitting .word {
    animation: hit-right .7s cubic-bezier(.8,0,0,1) both;
    animation-delay: calc(.8s + .02s * var(--char-index))
  }
  @keyframes hit-right {
    0% {
      transform: translateX(calc(.1em * var(--char-percent) + -.2em)) rotat(-7deg);
      animation-timing-function: cubic-bezier(.7,0,0,1)
    }
    60% {
      transform: translateX(calc(1.5em * (1 - var(--char-percent)))) rotat(5deg);
      animation-timing-function: cubic-bezier(.8,0,.15,1.75)
    }
    to {
      transform: translateX(0) rotate(0deg)
    }
  }

}`