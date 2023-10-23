<script setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  title: String,
  thumbnail: Object
})
</script>

<template>
  <div class="bg-[#652B80] flex w-full h-full text-white">
    <div class="absolute top-0 left-0 bottom-0 flex flex-col w-1/2 h-full">
      <div class="p-8">
        <h1 class="text-[3.5rem] m-0 text-[#FB7959] leading-[1.1] font-black tracking-tight line-clamp-[7]">
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="absolute top-0 right-0 bottom-0 flex w-1/2">
      <img :src="thumbnail.src" alt="" class="w-full h-full object-cover">
    </div>
    <img
      src="https://content.forall2024.eu/wp-content/uploads/2023/10/for-all.png"
      class="h-[20rem] w-[20rem] absolute right-0 bottom-0" style="transform: rotate(-8deg) scale(1.2);">
    <img
      src="https://content.forall2024.eu/wp-content/uploads/2023/10/efa.png"
      class="absolute left-[1.5rem] bottom-[1.5rem] h-[40px] w-[122px]">

    <span class="absolute bottom-[1.5rem] left-[360px] text-2xl">EU Elections 2024</span>
  </div>
</template>
