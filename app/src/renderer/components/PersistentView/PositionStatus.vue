<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-btn outline>X</v-btn>
      <dro/>
    </v-flex>
    <v-flex md12>
      <v-btn outline>Y</v-btn>
      <dro/>
    </v-flex>
    <v-flex md12>
      <v-btn outline>Z</v-btn>
      <dro/>
    </v-flex>
  </v-layout>
</template>

<script>
  import Dro from './../common/DRO'

  export default {
    components: {
      Dro
    }
  }
</script>
