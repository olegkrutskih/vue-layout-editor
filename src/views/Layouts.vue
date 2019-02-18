<template>
  <div class="layouts-container">
    <router-link to="/layout-editor/layout1">
      <Layout1 class="layout"/>
    </router-link>
    <router-link to="/layout-editor/layout2">
      <Layout2 class="layout"/>
    </router-link>
    <router-link to="/layout-editor/layout3">
      <Layout3 class="layout"/>
    </router-link>
    <router-link to="/layout-editor/layout4">
      <Layout4 class="layout"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'layouts'
};
</script>

<style lang="scss" scoped>
.layouts-container {
  min-height: 100%;
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  grid-gap: 2rem;
  .layout {
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
    transition: all 0.2s ease-out;
    &:hover {
      cursor: pointer;
      transform: translateY(2px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
