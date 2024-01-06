<script setup lang="ts">
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
    class="absolute top-0 left-0 right-0 bottom-0"
  ></div>

  <Transition>
    <div
      v-show="isTreeMenuShow"
      class="absolute h-100vh w-300px bg-black text-white"
    >
      <div>123</div>
    </div>
  </Transition>
</template>
