<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const baseUrl = "https://www.yemektarifi.com";

watchEffect(() => {
  const canonicalUrl = `${baseUrl}${route.path}`;

  useHead({
    title: "Yemek Tarifleri",
    meta: [
      { property: "og:title", content: "Yemek Tarifleri" },
      {
        property: "og:description",
        content:
          "Yemek Tarifleri ile iletişime geçin! Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçebilirsiniz.",
      },
      { property: "og:image", content: "/img/logo.png" },
    ],
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  });
});
</script>
