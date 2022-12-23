<template>
  <b-container class="about-container">
    <b-row class="mb-4">
      <b-col>
        <!-- creamos bucle  -->
        <h4 class="mb-4">About us</h4>
        <div v-for="(item, i) in aboutUs" :key="i">
          <label
            ><b>{{ item.question }}</b></label
          >
          <p>{{ item.answer }}</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <h4 class="mb-4">FAQ</h4>
      <b-col>
        <div v-for="(item, i) in faqs" :key="i">
          <label
            ><b>{{ item.question }}</b></label
          >
          <p>{{ item.answer }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      aboutUs: [
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet urna est. Nam eleifend eros vitae rutrum facilisis. Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet urna est. Nam eleifend eros vitae rutrum facilisis. Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
      ],
      faqs: [
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet urna est. Nam eleifend eros vitae rutrum facilisis. Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet urna est. Nam eleifend eros vitae rutrum facilisis. Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
        {
          question: "Lorem ipsum dolor sit amet",
          answer:
            "Vestibulum consectetur suscipit lacus, in feugiat nunc mollis sit amet.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-container {
  margin-top: toRem(100);
}
</style>
