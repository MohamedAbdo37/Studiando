<template>

<TimerComponent></TimerComponent>

</template>

<script>

import TimerComponent from "./TimerComponent.vue" ;

export default {
  name: 'Timer',
  components: {
    TimerComponent
  }
}
</script>

<style>
#timer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: fit-content;
  position: fixed;
  transform: translate(600%, -50%);
  animation-duration: 1s;
  animation-name: timerFadeIn;
}

@keyframes timerFadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

</style>
