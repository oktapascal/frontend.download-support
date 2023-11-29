<script setup lang="ts">
const dataDownload = useDataDownload();

function onClickType(value: string) {
  dataDownload.value = value
}
</script>

<template>
  <div class="grid grid-cols-12 gap-1">
    <div class="relative bg-white flex flex-col py-5 col-span-2 h-screen">
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'land' }" @click="onClickType('land')">
        <i class="ri-collage-line"></i>
        <span class="pl-4 text-base">Lahan</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'building' }" @click="onClickType('building')">
        <i class="ri-building-line"></i>
        <span class="pl-4 text-base">Gedung</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'leverage' }" @click="onClickType('leverage')">
        <i class="ri-map-2-line"></i>
        <span class="pl-4 text-base">Leveraging</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'vehicle' }" @click="onClickType('vehicle')">
        <i class="ri-roadster-line"></i>
        <span class="pl-4 text-base">KBM</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'equipment' }" @click="onClickType('equipment')">
        <i class="ri-device-line"></i>
        <span class="pl-4 text-base">Perangkat</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': dataDownload === 'asset' }" @click="onClickType('asset')">
        <i class="ri-archive-line"></i>
        <span class="pl-4 text-base">Aset SAP</span>
      </button>
      <hr class="border-[1.5px] border-neutral-200 my-4" />
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg hover:bg-neutral-200 active:bg-neutral-300">
        <i class="ri-account-box-line"></i>
        <span class="pl-4 text-base">Akun Saya</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg hover:bg-neutral-200 active:bg-neutral-300">
        <i class="ri-logout-circle-line"></i>
        <span class="pl-4 text-base">Keluar</span>
      </button>
    </div>
    <slot />
  </div>
</template>