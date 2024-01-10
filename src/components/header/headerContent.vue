<script setup lang="ts">
import TreeMenu from '@/components/header/components/treeMenu.vue';
import { usePathStore } from '@/stores/index';
import { treeMenuRawData } from '@/mock/data';
import { type IMenuItem, type IMenuItemRawData } from '@/interface/data';

const treeMenuRef = ref();
const pathStore = usePathStore();

function addPropertyToRawData(
  rawData: IMenuItemRawData[],
  parentPath: string = ''
): IMenuItem[] {
  return rawData.map((menuItemRawData: IMenuItemRawData) => {
    const path =
      parentPath === ''
        ? menuItemRawData.key
        : `${parentPath}/${menuItemRawData.key}`;

    return {
      ...menuItemRawData,
      expand: false,
      path,
      children: menuItemRawData.children
        ? addPropertyToRawData(menuItemRawData.children, path)
        : [],
    };
  });
}
const treeMenu = ref(addPropertyToRawData(treeMenuRawData));

if (pathStore.path !== '') {
  expandTreeMenu(pathStore.path);
}

function updateTreeMenu(newData: IMenuItem[]) {
  treeMenu.value = newData;
}

function updateExpandStatus(
  treeMenuItem: IMenuItem[],
  targetPath: string = ''
): IMenuItem[] {
  const targets = targetPath.split('/');

  return treeMenuItem.map((menuItem: IMenuItem) => {
    return {
      ...menuItem,
      expand: targets.includes(menuItem.key) ? true : false,
      children:
        menuItem.children?.length > 0
          ? updateExpandStatus(menuItem.children, targetPath)
          : [],
    };
  });
}

function expandTreeMenu(path: string = '') {
  updateTreeMenu(updateExpandStatus(treeMenu.value, path));
}
provide('expandEvent', expandTreeMenu);
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
