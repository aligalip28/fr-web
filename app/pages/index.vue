<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-screen mt-24">
    <HomeFastCategories />
    <div>
      <button @click="testToastify">Click me</button>
    </div>
    <div>
      <h1 class="text-black" v-for="country in countries" :key="country.id">
        {{ country.nr[locale] }}
      </h1>
      <h1 class="text-black" v-for="category in categories" :key="category.id">
        {{ category.nr[locale] }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ana Sayfa | Yemek Tarifleri", 
  meta: [
    {
      name: "description",
      content:
        "En lezzetli yemek tarifleri burada! Kolay ve pratik tariflerle mutfakta harikalar yaratın.",
    },
    {
      name: "keywords",
      content:
        "yemek tarifleri, pratik tarifler, lezzetli yemekler, mutfak, yemek yapma",
    },
  ],
});

// Toastify işlevi
function testToastify() {
  useToastify("test", {
    autoClose: 5000,
    position: ToastifyOption.POSITION.TOP_RIGHT,
  });
}

// SSR için veri çekme
const localePath = useLocalePath();
const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

const { data: countries } = await useAsyncData(
  "countriesfromcache",
  async () => {
    const result = await baseServices.get(
      `${locale.value}/countriesfromcache`
    );
    if (result.isSuccess()) {
      return result.ro;
    } else {
      router.push(localePath({ name: "404" }));
      return [];
    }
  }
);
const { data: categories } = await useAsyncData("categories", async () => {
  const result = await baseServices.get(`${locale.value}/categories`);
  if (result.isSuccess()) {
    return result.ro; 
  } else {
    router.push(localePath({ name: "404" }));
    return [];
  }
});
</script>
