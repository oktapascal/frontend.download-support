<script setup lang="ts">
definePageMeta({
  layout: 'private'
})
</script>

<template>
  <div class="card bg-white rounded-none col-span-10 p-4">
    <h1 class="text-lg font-bold">Filter Data</h1>
    <hr class="mt-2" />
    <div class="mt-4 grid grid-cols-12 h-screen">
      <div class="col-span-3 border-r border-r-neutral-400">
        <div class="flex gap-4">
          <div>
            <h6 class="text-base font-semibold">Regional</h6>
          </div>
          <div>
            <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-300 active:bg-neutral-400">Pilih
              Semua</button>
          </div>
        </div>
      </div>
      <div class="col-span-3 border-r border-r-neutral-400">
        <div class="flex gap-4">
          <div>
            <h6 class="text-base font-semibold ml-2">Area</h6>
          </div>
          <div>
            <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-300 active:bg-neutral-400">Pilih
              Semua</button>
          </div>
        </div>
      </div>
      <div class="col-span-3 border-r border-r-neutral-400">
        <div class="flex gap-4">
          <div>
            <h6 class="text-base font-semibold ml-2">BM/TM/TRO</h6>
          </div>
          <div>
            <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-300 active:bg-neutral-400">Pilih
              Semua</button>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex gap-4">
          <div>
            <h6 class="text-base font-semibold ml-2">Fungsi</h6>
          </div>
          <div>
            <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-300 active:bg-neutral-400">Pilih
              Semua</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>