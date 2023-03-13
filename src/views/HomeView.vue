<script setup>
import CountTimer from '../components/CountTimer.vue'
</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen">
    <div class="flex justify-around max-w-[500px] w-full">
      <CountTimer :dateTime="'Apr 25, 2023 22:00:00'"/>
    </div>
      
  </div>
</template>
