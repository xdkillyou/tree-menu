<script setup lang="ts">
import { type IMenuItem } from '@/interface/data';
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

function expandItem(item: IMenuItem) {
  item.expand = !item.expand;
}

const expandEvent = inject('expandEvent') as IUpdateMenu;
</script>

<template>
  <div :class="item.expand ? 'bg-gray-600' : ''">
    <div
      @click="() => expandEvent(item.path)"
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
