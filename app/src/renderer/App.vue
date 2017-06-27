<template>
  <v-app id="app">

    <v-container fluid class="pt-1">
      <v-layout row class="elevation-4 mb-2" style="min-height: 440px;">
        <v-flex md12>
          <transition name="component-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-flex>
      </v-layout>
      <persistent-view></persistent-view>
    </v-container>

    <v-bottom-nav value="true" class="transparent elevation-3" style="top: 0; bottom: initial;">
      <v-btn flat router to="home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat router to="files">
        <span>Files</span>
        <v-icon>folder</v-icon>
      </v-btn>
      <v-btn flat router to="settings">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn flat router to="conversational">
        <span>Conversational</span>
        <v-icon>gesture</v-icon>
      </v-btn>
      <v-btn flat router to="probe">
        <span>Probe</span>
        <v-icon>get_app</v-icon>
      </v-btn>
      <v-btn flat router to="offsets">
        <span>Offsets</span>
        <v-icon>equalizer</v-icon>
      </v-btn>
      <v-btn flat router to="status">
        <span>Status</span>
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
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
  @import url(/fonts/stylesheet.css);

  * {
    margin: 0;
    padding: 0;
  }

  html { overflow-y: hidden; }

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
    font-family: Roboto, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }

  #app {
    width: 100%;
    height: 100%;
    padding-top: 60px;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 75ms ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0.1;
  }
</style>
