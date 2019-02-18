<template>
  <div
    class="layout-editor-continer"
    :id="editorSidePanelId"
    @dragstart.stop="dragstartHandler($event)"
    @drop.stop.prevent="dropHandler($event)"
    @dragover.stop.prevent="dragoverHandler($event)"
  >
    <v-navigation-drawer app>
      <ul :id="editorSidePanelId">
        <li
          v-for="(item, index) in items"
          :id="item.id"
          class="grabbable"
          draggable="true"
          :style="inlinStyle"
        >{{item.title}}</li>
      </ul>
    </v-navigation-drawer>
    <div class="editor-container">
      <component :is="selectedLayout"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editorSidePanelId: 'editorSidePanel',
      items: [],
      inlinStyle: {
        border: '1px solid',
        listStyle: 'none',
        borderRadius: '10px',
        padding: '20px',
        width: '100px',
        margin: '20px auto'
      },
      selectedLayout: this.$route.params.layout
    };
  },
  methods: {
    dragstartHandler(ev) {
      ev.dataTransfer.setData('text/plain', ev.target.id);
      ev.dropEffect = 'move';
    },
    dragoverHandler(ev) {
      ev.dataTransfer.dropEffect = 'move';
    },
    dropHandler(ev) {
      var data = ev.dataTransfer.getData('text/plain');
      const droppedItem = this.$el.querySelector(`#${data}`);
      const sourceId = droppedItem.parentNode.id;
      ev.target.appendChild(droppedItem);
      this.$store.dispatch('addItem', {
        layoutName: this.selectedLayout,
        droppedItem,
        isLayoutTarget: ev.target.id !== this.editorSidePanelId,
        isEditorSource: sourceId === this.editorSidePanelId
      });
    }
  },
  created() {
    this.$store.dispatch('initializeLayoutEditorSource', this.selectedLayout);
    this.items = this.$store.getters.editorItems(this.selectedLayout);
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  .grabbable {
    cursor: grab;
  }
}

.editor-container {
  height: 100%;
}

.layout-editor-continer {
  height: 100%;
}
</style>