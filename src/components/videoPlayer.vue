<template>
  <div class="container">
    <!-- <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      loop : <input type="number" v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div> -->
    <YoutubeVue3
      ref="youtube"
      :videoid="videoId"
      loop="play.loop"
      @ended="onEnded"
      @paused="onPaused"
      @played="onPlayed"
    />
  </div>
  <div class="controls d-flex justify-content-evenly mt-3">
    <!-- <button @click="applyConfig">Apply</button> -->
    <b-button variant="primary" @click="playCurrentVideo">Play</b-button>
    <b-button variant="danger" @click="stopCurrentVideo">Stop</b-button>
    <b-button variant="secondary" @click="pauseCurrentVideo">Pause</b-button>
  </div>
</template>

<script>
import { YoutubeVue3 } from "youtube-vue3";

export default {
  name: "VideoPlayer",
  data() {
    return {
      //   temp: { video_id: "3P1CnWI62Ik", loop: 1 },
      //   play: { video_id: "3P1CnWI62Ik", loop: 1 },
    };
  },
  components: {
    YoutubeVue3,
  },
  props: {
    videoId: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp);
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded");
    },
    onPaused() {
      console.log("## OnPaused");
    },
    onPlayed() {
      console.log("## OnPlayed");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  :deep(iframe) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.controls {
  button {
    @include phone-up {
      width: 100px;
    }
    width: 70px;
  }
}
</style>
