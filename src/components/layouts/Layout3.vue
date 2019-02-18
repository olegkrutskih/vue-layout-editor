<template>
  <div :class="componentName">
    <header></header>
    <main></main>
  </div>
</template>

<script>
export default {
  name: 'layout3',
  data() {
    return {
      componentName: this.$options.name
    };
  },
  mounted() {
    const elements = this.$store.getters.layoutItemsByLayoutName(
      this.componentName
    );
    if (elements) {
      for (let obj in elements) {
        const selector = this.$el.querySelector(
          `.${this.componentName} ${elements[obj].parentElement.localName}`
        );
        selector.appendChild(elements[obj]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header,
main {
  border: 1px solid;
  border-radius: 5px;
}
.layout3 {
  height: 100%;
  display: grid;
  grid: repeat(4, 1fr) / auto-flow;
  grid-template-areas:
    'header'
    'main'
    'main'
    'main';
  grid-gap: 1rem;
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
}
</style>
