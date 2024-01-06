<script setup lang="ts">
import TreeMenu from '@/components/header/components/treeMenu.vue';

const treeMenuRef = ref();
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

    <TreeMenu ref="treeMenuRef" />
  </div>
</template>
