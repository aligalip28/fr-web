<script setup lang="ts">
const containerRef = ref(null);
const categories = computed(() => [
  { name: "Türk Mutfağı", image: "https://picsum.photos/200/200?random=1" },
  { name: "İtalyan Mutfağı", image: "https://picsum.photos/200/200?random=2" },
  { name: "Hint Mutfağı", image: "https://picsum.photos/200/200?random=3" },
  { name: "Meksika Mutfağı", image: "https://picsum.photos/200/200?random=4" },
  { name: "Japon Mutfağı", image: "https://picsum.photos/200/200?random=5" },
  { name: "Çin Mutfağı", image: "https://picsum.photos/200/200?random=6" },
  { name: "Yunan Mutfağı", image: "https://picsum.photos/200/200?random=7" },
  { name: "Fransız Mutfağı", image: "https://picsum.photos/200/200?random=8" },
  { name: "Türk Mutfağı", image: "https://picsum.photos/200/200?random=9" },
  { name: "İtalyan Mutfağı", image: "https://picsum.photos/200/200?random=10" },
  { name: "Hint Mutfağı", image: "https://picsum.photos/200/200?random=11" },
  { name: "Meksika Mutfağı", image: "https://picsum.photos/200/200?random=12" },
  { name: "Japon Mutfağı", image: "https://picsum.photos/200/200?random=13" },
  { name: "Çin Mutfağı", image: "https://picsum.photos/200/200?random=14" },
  { name: "Yunan Mutfağı", image: "https://picsum.photos/200/200?random=15" },
  { name: "Fransız Mutfağı", image: "https://picsum.photos/200/200?random=16" },
]);
</script>

<template>
  <div class="mt-5">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :init="true"
        :breakpoints="{
          320: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
          1280: { slidesPerView: 9, spaceBetween: 20 },
        }"
        :grab-cursor="true"
        :loop="true"
        :effect="'slide'"
        :lazy-preload-prev-next="2"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide
          v-for="(category, idx) in categories"
          :key="idx"
          class="flex justify-center items-center"
        >
          <div class="relative">
            <NuxtImg
              :src="category.image"
              alt="Category Image"
              class="object-cover rounded-4xl object-center bg-center"
            />
            <div class="overlay rounded-4xl"></div>
            <div
              class="text-sm text-center w-full font-bold absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white px-2 py-1"
            >
              {{ category.name }}
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2rem; /* rounded-4xl ile eşleşmesi için */
}
</style>
