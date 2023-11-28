<script setup lang="ts">
const type = useTicketType();

function onClickType(value: string) {
  type.value = value
}
</script>

<template>
  <div class="grid grid-cols-12 gap-1">
    <div class="relative bg-white flex flex-col py-5 col-span-2 h-screen">
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': type === 'all' }" @click="onClickType('all')">
        <i class="ri-inbox-2-fill"></i>
        <span class="pl-4 text-base">Semua</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': type === 'send' }" @click="onClickType('send')">
        <i class="ri-mail-send-line"></i>
        <span class="pl-4 text-base">Terkirim</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg border-b hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': type === 'process' }" @click="onClickType('process')">
        <i class="ri-shape-2-line"></i>
        <span class="pl-4 text-base">Diproses</span>
      </button>
      <button type="button"
        class="btn py-3 px-2 justify-start rounded-none text-lg hover:bg-neutral-200 active:bg-neutral-300"
        :class="{ 'bg-neutral-200': type === 'done' }" @click="onClickType('done')">
        <i class="ri-verified-badge-line"></i>
        <span class="pl-4 text-base">Selesai</span>
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
      <div class="px-2 absolute bottom-5">
        <button type="button" class="btn w-48 h-10 text-base bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">
          Tambah Pengaduan
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>