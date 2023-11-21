<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <ClientOnly>
    <LoginDekstop v-if="isLargeScreen" />
    <LoginMobile v-else />
  </ClientOnly>
</template>