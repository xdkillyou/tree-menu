<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const isFlashBox = computed(() => {
  switch (props.index) {
    case 3:
    case 5:
    case 9:
      return true;
    default:
      return false;
  }
});
</script>

<template>
  <!-- bg-[radial-gradient(circle,rgba(113,81,95,1)_81%,rgba(0,0,0,1)_100%)] -->
  <div class="border-black border-2px">
    <div
      :class="isFlashBox ? 'animate-pulse' : ''"
      class="h-100px squareBoxBg"
    ></div>
  </div>
</template>

<style>
.squareBoxBg {
  background: radial-gradient(
    circle,
    rgba(113, 81, 95, 1) 81%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
