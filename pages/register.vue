<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <ClientOnly>
    <RegisterDekstop v-if="isLargeScreen" />
    <RegisterMobile v-else />
  </ClientOnly>
</template>