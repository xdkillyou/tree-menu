<script setup lang="ts">
import TreeMenu from '@/components/header/components/treeMenu.vue';
import { treeMenuRawData } from '@/mock/data';
import { type IMenuItem, type IMenuItemRawData } from '@/interface/data';

const treeMenuRef = ref();

function addPropertyToRawData(
  rawData: IMenuItemRawData[],
  parentPath: string = ''
): IMenuItem[] {
  return rawData.map((menuItemRawData: IMenuItemRawData) => {
    const path =
      parentPath === ''
        ? menuItemRawData.key
        : `${parentPath}/${menuItemRawData.key}`;

    if (menuItemRawData.children) {
      return {
        ...menuItemRawData,
        expand: false,
        path,
        children: addPropertyToRawData(menuItemRawData.children, path),
      };
    } else {
      return { ...menuItemRawData, expand: false, path };
    }
  });
}

const treeMenu = ref(addPropertyToRawData(treeMenuRawData));
</script>

<template>
  <div class="flex justify-end">
    <button
      @click="treeMenuRef.show()"
      type="button"
      class="border border-black/60 bg-gray/20 rounded-4px px-12px py-2px m-4px hover:bg-gray/30"
    >
      三
    </button>

    <TreeMenu ref="treeMenuRef" :data="treeMenu" />
  </div>
</template>
