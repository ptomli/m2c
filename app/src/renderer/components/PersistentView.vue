<template>
  <v-layout row>
    <v-flex md4 class="mx-1"><program-control/></v-flex>
    <v-flex md5 class="mx-1"><manual-control/></v-flex>
    <v-flex md3 class="mx-1"><position-status/></v-flex>
  </v-layout>
</template>

<script>
  import ManualControl from './PersistentView/ManualControl'
  import PositionStatus from './PersistentView/PositionStatus'
  import ProgramControl from './PersistentView/ProgramControl'

  export default {
    name: 'persistent-view',
    components: {
      ManualControl,
      PositionStatus,
      ProgramControl
    }
  }
</script>
