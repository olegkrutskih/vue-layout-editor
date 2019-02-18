<template>
  <div :class="componentName">
    <header></header>
    <aside></aside>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'layout1',
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
footer,
aside {
  border: 1px solid;
  border-radius: 5px;
}
.layout1 {
  height: 100%;
  display: grid;
  grid: repeat(4, 1fr) / auto-flow;
  grid-template-areas:
    'header header header header'
    'aside main main main'
    'aside main main main'
    'footer footer footer footer';
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
  footer {
    grid-area: footer;
  }
}
</style>
