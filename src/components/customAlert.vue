<template>
  <b-alert
    :show="dismissCountDown"
    :variant="variant"
    dismissible
    fade
    @dismiss-count-down="countDownChanged"
  >
    <p>{{ message }}</p>
    <b-progress
      :max="dismissSecs"
      :value="dismissCountDown"
      :variant="variant"
      height="4px"
    />
  </b-alert>
</template>

<script>
export default {
  name: "CustomAlert",

  props: {
    message: {
      type: String,
      default: "",
    },

    dismissSecs: {
      type: Number,
      default: 0,
    },

    onDismissedCallback: {
      type: Function,
      default: () => {},
    },

    variant: {
      type: String,
      default: "success",
      validator: (value) =>
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].indexOf(value) > -1,
    },
  },

  data() {
    return {
      dismissCountDown: 0,
    };
  },

  methods: {
    show(toTop) {
      this.dismissCountDown = this.dismissSecs;
      if (toTop) {
        window.scrollTo(0, 0);
      }
    },

    hide() {
      this.dismissCountDown = 0;
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      if (dismissCountDown === 0) {
        setTimeout(() => this.onDismissedCallback(), 100);
      }
    },
  },
};
</script>
