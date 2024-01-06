<script setup lang="ts">
import SquareBox from '@/components/squareBox.vue';
import Header from '@/components/header/headerContent.vue';
</script>

<template>
  <div>
    <Header />
    <div class="fixed top-38px right-0 left-0 bottom-0 bg-gray/40">
      <div class="absolute top-1/2 transform -translate-y-1/2 w-full">
        <div class="grid grid-cols-3 gap-2 mx-4px">
          <SquareBox v-for="index in 9" :key="index" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
