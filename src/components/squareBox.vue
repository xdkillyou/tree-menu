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

const haveBallBox = computed(() => {
  switch (props.index) {
    case 1:
    case 3:
    case 7:
    case 9:
      return true;
    default:
      return false;
  }
});
</script>

<template>
  <!-- bg-[radial-gradient(circle,rgba(113,81,95,1)_81%,rgba(0,0,0,1)_100%)] -->
  <div class="border-black border-2px relative">
    <div
      :class="isFlashBox ? 'animate-flash' : ''"
      class="h-100px squareBoxBg"
    ></div>
    <div
      v-if="haveBallBox"
      class="animate-slide absolute z-1 top-1/2 left-1/2 rounded-full bg-#A5F12B w-30px h-30px text-center leading-30px"
    >
      0
    </div>
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
