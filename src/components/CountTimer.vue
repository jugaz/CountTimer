<template>
   
    <div class="flex flex-col items-center">
        <div class="days text-7xl text-white"></div>
        <div class="text-2xl text-white">DAYS</div>
    </div>

    <div class="flex flex-col items-center text-7xl text-white">:</div>

    <div class="flex flex-col items-center">
        <div class="hours text-7xl text-white"></div>
        <div class="text-2xl text-white">HOURS</div>
    </div>

    <div class="flex flex-col items-center text-7xl text-white">:</div>
    
    <div class="flex flex-col items-center">
        <div class="minutes text-7xl text-white"></div>
        <div class="text-2xl text-white">MINUTES</div>
    </div>
    
    <div class="flex flex-col items-center text-7xl text-white">:</div>

    <div class="flex flex-col items-center">
        <div class="seconds text-7xl text-white"></div>
        <div class="text-2xl text-white">SECONDS</div>
    </div>
 
    
</template>
<script setup>

import { useCount } from "@/composables/useShared";

const props = defineProps({
    dateTime: {
      type: Date,
      default: new Date()
    }
})
useCount(props.dateTime)


</script>