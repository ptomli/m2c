<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-subheader>Feed</v-subheader>
    </v-flex>
    <v-flex md12>
      <label>Step</label>
      <v-btn outline small>0.01</v-btn>
      <v-btn outline small>0.10</v-btn>
      <v-btn outline small>1.00</v-btn>
      <v-btn outline small>10.00</v-btn>
    </v-flex>
    <v-flex md12>
      <v-text-field label="Feedrate" hide-details/>
    </v-flex>
    <v-flex md12>
      <v-subheader>Spindle</v-subheader>
    </v-flex>
    <v-flex md8>
      <v-btn outline small>Forward</v-btn>
      <v-btn outline small>Stop</v-btn>
    </v-flex>
    <v-flex md4>
      <v-text-field label="RPM" hide-details/>
    </v-flex>
  </v-layout>
</template>
