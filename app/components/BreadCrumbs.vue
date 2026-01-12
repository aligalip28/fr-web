<template>
  <nav class="text-sm text-gray-600">
    <ul class="flex items-center space-x-2">
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        class="flex items-center"
      >
        <NuxtLink
          v-if="crumb.to"
          :to="crumb.to"
          class="hover:text-gray-800 transition-colors font-bold"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-gray-400">{{ crumb.label }}</span>
        <span v-if="index < crumbs.length - 1" class="mx-2 text-gray-400"
          >/</span
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
});
</script>
