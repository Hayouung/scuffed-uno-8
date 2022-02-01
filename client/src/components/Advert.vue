
<script>
export default {
  name: "Advert",
  components: {},
  props: {
    adKey: {
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
  },
  mounted() {
    // const ad = this.$refs.ad;
    // if (!ad) return;
    // const atOptions = {
    //   key: this.adKey,
    //   format: "iframe",
    //   height: this.height,
    //   width: this.width,
    //   params: {},
    // };
    // const conf = document.createElement("script");
    // conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = `//www.effectivedisplaycontent.com/${atOptions.key}/invoke.js`;
    // setTimeout(() => {
    //   if (!ad) return;
    //   ad.appendChild(conf);
    //   ad.appendChild(script);
    // }, this.timeout);
  },
};
</script>

<template>
  <div class="ad" ref="ad"></div>
</template>

<style lang="scss" scoped>
</style>