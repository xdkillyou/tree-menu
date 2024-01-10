<script setup lang="ts">
import { type IMenuItem, type IUpdateMenu } from '@/interface/data';
import { usePathStore } from '@/stores/index';
import MenuItem from './menuItem.vue';

defineProps({
  item: {
    type: Object as PropType<IMenuItem>,
    default: () => {},
  },
  children: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
});

const pathStore = usePathStore();

const expandEvent = inject('expandEvent') as IUpdateMenu;

function expandItem(path: string) {
  pathStore.updatePath(path);
  expandEvent(path);
}
</script>

<template>
  <div :class="item.expand ? 'bg-gray-600' : ''">
    <div
      @click="() => expandItem(item.path)"
      class="px-15px py-10px"
      :class="item.expand ? 'text-yellow' : ''"
    >
      {{ item.text }}
    </div>

    <MenuItem
      v-show="children.length > 0 && item.expand"
      v-for="childrenItem in children"
      :key="childrenItem.key"
      :item="childrenItem"
      :children="childrenItem.children"
      class="pl-15px"
    />
  </div>
</template>
