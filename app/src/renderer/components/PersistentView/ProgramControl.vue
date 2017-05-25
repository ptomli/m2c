<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-btn primary light block>Cycle Start</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>Single Block</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>M01 Break</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>Feedhold</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>Coolant</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>Stop</v-btn>
    </v-flex>
    <v-flex md6>
      <v-btn outline small block>Reset</v-btn>
    </v-flex>

<!--
    <v-flex md10>
      <v-slider label="Rapid" max="150" step="10" hide-details v-model="rapid" class="my-1"/>
    </v-flex>
    <v-flex md2>
      <v-text-field v-model="rapid" disabled suffix="%" hide-details class="my-0"/>
    </v-flex>
-->

    <v-flex md10 class="mt-1">
      <v-slider label="Feed" max="150" step="10" hide-details v-model="feed" class="my-1"/>
    </v-flex>
    <v-flex md2 class="mt-1">
      <v-text-field v-model="feed" disabled suffix="%" hide-details class="my-0"/>
    </v-flex>
    <v-flex md10>
      <v-slider label="Spindle" max="150" step="10" hide-details v-model="spindle" class="my-1"/>
    </v-flex>
    <v-flex md2>
      <v-text-field v-model="spindle" disabled suffix="%" hide-details class="my-0"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        rapid: 100,
        feed: 100,
        spindle: 100
      }
    }
  }
</script>
