<template>
  <div :class="componentName">
    <header></header>
    <aside></aside>
    <main></main>
  </div>
</template>

<script>
export default {
  name: 'layout2',
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
main,
aside {
  border: 1px solid;
  border-radius: 5px;
}
.layout2 {
  height: 100%;
  display: grid;
  grid: repeat(4, 1fr) / auto-flow;
  grid-template-areas:
    'header header header header'
    'aside main main main'
    'aside main main main'
    'aside main main main';
  grid-gap: 1rem;
  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  main {
    grid-area: main;
  }
}
</style>
