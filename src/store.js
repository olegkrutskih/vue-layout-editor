import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*         -- layoutsComponents structure --
      |--------------------------------------------------------
      | layoutsComponents = [
      |   layoutName :{
      |      layoutComponents: [{ droppedComponentId, droppedComponent }],
      |      layouteditorItems: [{ }]
      |    }
      |  ];
      |--------------------------------------------------------
      */
    layoutsItems: []
  },
  mutations: {
    ADD_LAYOUT_ITEM(state, { layoutName, droppedItem }) {
      state.layoutsItems[layoutName].layoutItems[droppedItem.id] = droppedItem;
    },

    REMOVE_LAYOUT_ITEM(state, { layoutName, droppedItem }) {
      delete state.layoutsItems[layoutName].layoutItems[droppedItem.id];
    },
    ADD_EDITOR_ITEM(state, { layoutName, droppedItem }) {
      state.layoutsItems[layoutName].editorItems.push({
        id: droppedItem.id,
        title: droppedItem.id
      });
    },

    REMOVE_EDITOR_ITEM(state, { layoutName, droppedItem }) {
      const filteredItems = state.layoutsItems[layoutName].editorItems.filter(
        itm => itm.id !== droppedItem.id
      );
      state.layoutsItems[layoutName].editorItems = filteredItems;
    },

    INITIALIZE_LAYOUT_EDITOR(state, { layoutsItems, layoutName }) {
      state.layoutsItems[layoutName] = layoutsItems;
    }
  },
  actions: {
    addItem(
      { commit },
      { layoutName, droppedItem, isLayoutTarget, isEditorSource }
    ) {
      if (isEditorSource && isLayoutTarget) {
        commit('ADD_LAYOUT_ITEM', { layoutName, droppedItem });
        commit('REMOVE_EDITOR_ITEM', { layoutName, droppedItem });
      }
      if (!isEditorSource && !isLayoutTarget) {
        commit('REMOVE_LAYOUT_ITEM', { layoutName, droppedItem });
        commit('ADD_EDITOR_ITEM', { layoutName, droppedItem });
      }
    },
    initializeLayoutEditorSource({ commit, state }, layoutName) {
      if (state.layoutsItems[layoutName]) {
        return;
      }

      const layoutsItems = {
        layoutItems: {},
        editorItems: [
          {
            id: 'item1',
            title: 'item1'
          },
          {
            id: 'item2',
            title: 'item2'
          },
          {
            id: 'item3',
            title: 'item3'
          }
        ]
      };
      commit('INITIALIZE_LAYOUT_EDITOR', { layoutsItems, layoutName });
    }
  },
  getters: {
    layoutItemsByLayoutName: state => layoutName => {
      const layout = state.layoutsItems[layoutName];
      if (!layout) {
        return null;
      }
      const { layoutItems } = layout;
      return layoutItems;
    },
    editorItems: state => layoutName => {
      const items = state.layoutsItems[layoutName];
      const { editorItems } = items;
      return editorItems;
    }
  }
});
