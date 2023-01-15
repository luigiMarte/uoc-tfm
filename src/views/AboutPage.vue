<template>
  <b-container class="about-container">
    <b-row class="mb-4">
      <!-- creamos bucle  -->
      <h4 class="mb-4">{{ $t("info") }}</h4>
      <b-col>
        <div v-for="(item, i) in aboutUs" :key="i">
          <label
            ><b>{{ item.question }}</b></label
          >
          <p>{{ item.answer }}</p>
        </div>
        <div>
          <ul>
            <li class="mb-2">- {{ $t("aboutSection.answer3-1") }}</li>
            <li class="mb-2">- {{ $t("aboutSection.answer3-2") }}</li>
            <li class="mb-2">- {{ $t("aboutSection.answer3-3") }}</li>
            <li class="mb-2">- {{ $t("aboutSection.answer3-4") }}</li>
            <li class="mb-2">- {{ $t("aboutSection.answer3-5") }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <h4 class="mb-4">FAQs</h4>
      <b-col>
        <div v-for="(item, i) in faqs" :key="i">
          <label
            ><b>{{ item.question }}</b></label
          >
          <p>{{ item.answer }}</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <h4 class="mb-4">{{ $t("contact") }}</h4>
      <b-col>
        <label for=""><b>Email:</b></label>
        <p>geoDrones@gmail.com</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: "hello",
      aboutUs: [
        {
          question: this.$t("aboutSection.question1"),
          answer: this.$t("aboutSection.answer1"),
        },
        {
          question: this.$t("aboutSection.question2"),
          answer: this.$t("aboutSection.answer2"),
        },
        {
          question: this.$t("aboutSection.question3"),
          answer: this.$t("aboutSection.answer3"),
        },
      ],
      faqs: [
        {
          question: this.$t("faqs.question1"),
          answer: this.$t("faqs.answer1"),
        },
        {
          question: this.$t("faqs.question2"),
          answer: this.$t("faqs.answer2"),
        },
        {
          question: this.$t("faqs.question3"),
          answer: this.$t("faqs.answer3"),
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
