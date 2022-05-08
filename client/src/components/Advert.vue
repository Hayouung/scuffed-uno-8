
<script>
export default {
  name: "Advert",
  components: {},
  data() {
    return {
      adtest: "",
    };
  },
  props: {
    adSlot: {
      type: String,
      require: true,
    },
    width: {
      type: Number,
      require: true,
    },
    height: {
      type: Number,
      require: true,
    },
    timeout: {
      type: Number,
      default: 0,
    },
    viewWidth: {
      type: Number,
      default: 0,
    },
    viewHeight: {
      type: Number,
      default: 0,
    },
  },
  mounted() {

  },
};
</script>

<template>
  <div class="ad" ref="ad">
  </div>
</template>

<style lang="scss" scoped>
</style>