<script setup lang="ts">
import { type IMenuItem } from '@/interface/data';
import MenuItem from './menuItem.vue';

const props = defineProps({
  data: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
});

const isTreeMenuShow = ref(false);
function show() {
  isTreeMenuShow.value = true;
}
function hide() {
  isTreeMenuShow.value = false;
}

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
      class="fixed top-0 bottom-0 w-200px bg-black text-white z-1 overflow-y-scroll"
    >
      <MenuItem
        v-for="item in props.data"
        :key="item.key"
        :item="item"
        :children="item.children"
      />
    </div>
  </Transition>
</template>
