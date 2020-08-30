<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #app {
  min-height: 100%;
}

body {
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

body, input, button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

button {
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  body, input, button {
    font-size: 12px;
  }
}
</style>
