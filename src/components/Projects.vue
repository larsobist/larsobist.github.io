<template>
  <div>
    <h2>Projects</h2>
    <div class="grid">
      <div class="rectangle-up" @click="logClick('zphere')">zphere</div>
      <div class="rectangle" @click="logClick('Circle of Life')">Circle of Life</div>
      <div class="" @click="logClick('Mobile Apps')">Mobile Apps</div>
      <div class="big-rectangle" @click="logClick('Bachelorarbeit')">Bachelorarbeit</div>
      <div class="" @click="logClick('Culino')">Culino</div>
      <div class="rectangle-up" @click="logClick('Usability')">Usability</div>
      <div class="" @click="logClick('Lagom')">Lagom</div>
      <div class="" @click="logClick('buildAR')">BuildAR</div>
      <div class="" @click="logClick('Runners High')">Runners High</div>
      <div class="square" @click="logClick('Timeless Treasures')">Timeless Treasures</div>
      <div class="" @click="logClick('Web Games')">Web Games</div>
      <div class="" @click="logClick('Save a Turtle')">Save a Turtle</div>
      <div class="" @click="logClick('eatabroad')">eatabroad</div>
      <div class="" @click="logClick('e-shop')">e-shop</div>
      <div class="" @click="logClick('Portfolio')">Portfolio</div>
      <div class="rectangle" @click="logClick('Upcoming')">Upcoming</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logClick = (project) => {
  console.log(`Clicked on: ${project}`);
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  aspect-ratio: 7 / 4;
  max-height: 57.14vw;
  background-color: yellow;
}

.grid div {
  background: green;
  height: 100%;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
}

.grid .rectangle-up {
  grid-row: span 2;
  background-color: red;
}

.grid .rectangle {
  grid-column: span 2;
  background-color: aqua;
}

.grid .big-rectangle {
  grid-column: span 3;
  grid-row: span 2;
  background-color: orange;
}

.grid .square { grid-row: span 2;
  grid-column: span 2;
  background-color: purple;

}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    aspect-ratio: 4 / 7;
    max-height: calc(100vw * 7 / 4);
    background-color: #333333;
  }
}

</style>
