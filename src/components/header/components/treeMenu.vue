<script setup lang="ts">
import {
  type IMenuItem,
  type IUpdateMenu,
  type IMenuSelectLists,
} from '@/interface/data';
import { usePathStore } from '@/stores/index';
import MenuItem from './menuItem.vue';

const props = defineProps({
  data: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
  selectLists: {
    type: Array as PropType<IMenuSelectLists[]>,
    default: () => [],
  },
});

const isTreeMenuShow = ref(false);
const pathStore = usePathStore();

function show() {
  isTreeMenuShow.value = true;
}
function hide() {
  isTreeMenuShow.value = false;
}

const selected = ref(pathStore.path);
const expandEvent = inject('expandEvent') as IUpdateMenu;

function expandItem(path: string) {
  pathStore.updatePath(path);
  expandEvent(path);
}

watch(selected, () => {
  if (pathStore.path === selected.value) return;
  expandItem(selected.value);
});

watch(pathStore, () => {
  selected.value = pathStore.path;
});

defineExpose({
  isTreeMenuShow,
  show,
  hide,
});
</script>

<template>
  <!-- mask -->
  <div
    v-show="isTreeMenuShow"
    @click="hide"
    class="absolute top-0 left-0 right-0 bottom-0 z-1"
  ></div>

  <Transition name="slide">
    <div
      v-show="isTreeMenuShow"
      class="fixed top-0 bottom-0 w-200px bg-black text-white z-1 overflow-y-auto"
    >
      <select
        v-model="selected"
        class="text-black w-11/12 mx-a block py-5px my-10px"
      >
        <option v-for="{ text, path } in selectLists" :key="path" :value="path">
          {{ text }}
        </option>
      </select>

      <MenuItem
        v-for="item in props.data"
        :key="item.key"
        :item="item"
        :children="item.children"
      />
    </div>
  </Transition>
</template>
