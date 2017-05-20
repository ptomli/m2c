<template>
  <md-layout id="app" md-column md-gutter>
    <md-layout md-flex="35">
      <persistent-view></persistent-view>
    </md-layout>
    <md-layout>
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </md-layout>
    <md-bottom-bar>
      <md-bottom-bar-item md-icon="home" href="#/">Home</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="folder" href="#/files">Files</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="settings" href="#/settings">Settings</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="gesture" href="#/conversational">Conversational</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="get_app" href="#/probe">Probe</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="equalizer" href="#/offsets">Offsets</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="my_location" href="#/status">Status</md-bottom-bar-item>
    </md-bottom-bar>
  </md-layout>
</template>

<script>
  import store from 'renderer/vuex/store'
  import PersistentView from './components/PersistentView.vue'

  export default {
    store,
    components: {
      PersistentView
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(/fonts/stylesheet.css);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
  #app {
    width: 100%;
    height: 100%;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 50ms ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0.1;
  }
</style>
