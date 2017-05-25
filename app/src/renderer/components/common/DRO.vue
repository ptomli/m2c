<template>
  <div class="dro" @click="onClick">
    <div class="background">888.888</div>
    <div class="readout">{{ value }}</div>
  </div>
</template>

<style scoped>
  .dro {
    position: relative;
    font-family: 'DSEG7 Classic Mini';
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    display: inline-block;
    padding: 3px;
    margin: 6px 0;

    vertical-align:middle;

    border: 1px solid #000;
    border-radius: 2px;
    /*background-color: #fb7c00;*/
    background-color: rgb(164,222,255);
  }
  .dro .background {
    position: absolute;
    color: rgba(0,0,0,0.1)
  }
  .dro .readout {
    color: rgb(0,0,0);
  }
</style>
<script>
  export default {
    data () {
      return { value: 123.456 }
    },
    methods: {
      onClick () {
        console.log('clicked')
      }
    }
  }
</script>
