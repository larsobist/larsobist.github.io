<template>
  <div>
    <h2>Projects</h2>
    <div class="flexbox">
      <div class="rectangle-up">zphere</div>
      <div class="rectangle">Circle of Life</div>
      <div class="">Mobile Apps</div>
      <div class="big-rectangle">Bachelorarbeit</div>
      <div class="one-up skip-one">Culino</div>
      <div class="one-up">buildAR</div>
      <div class="rectangle-up one-up">Usability Engineering</div>
      <div class="left">Lagom</div>
      <div class="square">Timeless Treasures</div>
      <div class="skip-one">Runners High</div>
      <div class="">Web Games</div>
      <div class="">Save a Turtle</div>
      <div class="one-up">eatabroad</div>
      <div class="skip-two one-up">e-shop</div>
      <div class="one-up">Portfolio</div>
      <div class="rectangle one-up">Upcoming</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.flexbox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  aspect-ratio: 7 / 4; /* Set the desired aspect ratio (1050 / 600) */
  max-height: 57.14vw; /* Set the height to 57.14% of the viewport width */
}

.flexbox div {
  width: calc((100% / 7) * 1);
  background: green;
  height: calc((100% / 4) * 1);
  padding: 2px;
}

.flexbox .rectangle-up {
  height: calc((100% / 4) * 2);
  background-color: red;
}

.flexbox .rectangle {
  width: calc((100% / 7) * 2);
  background-color: aqua;
}

.flexbox .big-rectangle {
  width: calc((100% / 7) * 3);
  height: calc((100% / 4) * 2);
  background-color: orange;
}

.flexbox .square {
  width: calc((100% / 7) * 2);
  height: calc((100% / 4) * 2);
  background-color: purple;
}

.flexbox .one-up {
  margin-top: calc((100% / 7) * -1);
}

.flexbox .left {
  margin-left: calc((100% / 7) * -4);
}

.flexbox .skip-one {
  margin-left: calc((100% / 7) * 1);
}

.flexbox .skip-two {
  margin-left: calc((100% / 7) * 2);
}

</style>
