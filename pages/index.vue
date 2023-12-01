<script setup lang="ts">
definePageMeta({
  layout: 'private'
})
</script>

<template>
  <div class="card bg-white rounded-none col-span-7">
    <h1 class="text-lg font-bold p-4">Preview Data</h1>
    <hr class="mt-2" />
    <div class="mt-4 grid grid-cols-12 h-screen">
      &nbsp;
    </div>
  </div>
  <div class="card bg-white rounded-none col-span-3">
    <div class="flex justify-between">
      <div>
        <h1 class="text-lg font-bold p-4">Filter Data</h1>
      </div>
      <div class="p-4">
        <button
          class="btn border border-neutral-400 p-1 hover:bg-neutral-400 hover:border-neutral-400 hover:text-white">Terapkan</button>
      </div>
    </div>
    <hr class="mt-2" />
    <div class="mt-4 flex flex-col">
      <div class="flex flex-col border-b border-b-neutral-200 px-2 pb-2 mb-2">
        <div class="flex justify-between">
          <div>
            <h6 class="text-base font-semibold">Regional</h6>
          </div>
          <div class="flex w-32 justify-between">
            <div>
              <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-100 active:bg-neutral-200">
                Pilih Semua
              </button>
            </div>
            <div>
              <button class="h-6 w-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
                <i class="ri-arrow-down-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <div class="mb-2">
            <input type="text" placeholder="Cari Regional..."
              class="text-sm border border-neutral-300 w-full py-1 px-4 rounded-full focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-neutral-400" />
          </div>
          <div class="px-2">
            <ul>
              <li>
                <div class="flex gap-2">
                  <input type="checkbox" id="checkbox-regional-1"
                    class="appearance-none peer w-4 h-4 border-2 border-neutral-300 rounded-sm bg-white mt-0.5 shrink-0 checked:bg-neutral-500 checked:border-0" />
                  <label for="checkbox-regional-1"
                    class="cursor-pointer select-none text-neutral-700 text-sm peer-checked:font-bold">
                    REG 1
                  </label>
                  <svg class="absolute w-4 h-4 mt-0.5 hidden pointer-events-none peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-b border-b-neutral-200 px-2 pb-2 mb-2">
        <div class="flex justify-between">
          <div>
            <h6 class="text-base font-semibold">Area</h6>
          </div>
          <div class="flex w-32 justify-between">
            <div>
              <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-100 active:bg-neutral-200">
                Pilih Semua
              </button>
            </div>
            <div>
              <button class="h-6 w-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
                <i class="ri-arrow-down-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <div class="mb-2">
            <input type="text" placeholder="Cari Area..."
              class="text-sm border border-neutral-300 w-full py-1 px-4 rounded-full focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-neutral-400" />
          </div>
          <div class="px-2">list data</div>
        </div>
      </div>
      <div class="flex flex-col border-b border-b-neutral-200 px-2 pb-2 mb-2">
        <div class="flex justify-between">
          <div>
            <h6 class="text-base font-semibold">BM/TM/TRO</h6>
          </div>
          <div class="flex w-32 justify-between">
            <div>
              <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-100 active:bg-neutral-200">
                Pilih Semua
              </button>
            </div>
            <div>
              <button class="h-6 w-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
                <i class="ri-arrow-down-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <div class="mb-2">
            <input type="text" placeholder="Cari BM/TM/TRO..."
              class="text-sm border border-neutral-300 w-full py-1 px-4 rounded-full focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-neutral-400" />
          </div>
          <div class="px-2">list data</div>
        </div>
      </div>
      <div class="flex flex-col border-b border-b-neutral-200 px-2 pb-2 mb-2">
        <div class="flex justify-between">
          <div>
            <h6 class="text-base font-semibold">Fungsi</h6>
          </div>
          <div class="flex w-32 justify-between">
            <div>
              <button class="btn border border-neutral-3  00 p-1 text-xs hover:bg-neutral-100 active:bg-neutral-200">
                Pilih Semua
              </button>
            </div>
            <div>
              <button class="h-6 w-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200">
                <i class="ri-arrow-down-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <div class="mb-2">
            <input type="text" placeholder="Cari Fungsi..."
              class="text-sm border border-neutral-300 w-full py-1 px-4 rounded-full focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-neutral-400" />
          </div>
          <div class="px-2">list data</div>
        </div>
      </div>
    </div>
  </div>
</template>