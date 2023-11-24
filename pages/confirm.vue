<template>
  <div class="h-screen flex justify-center items-center">
    <div class="card w-[29rem]">
      <div class="card-header text-center">
        <i class="ri-mail-check-line text-6xl"></i>
        <h2 class="card-title">Konfirmasi Email</h2>
      </div>
      <div class="card-content text-center">
        Terima kasih telah mendaftar. Untuk melanjutkan proses, silahkan cek email anda untuk melakukan verifikasi.
        <div class="mt-4">
          <NuxtLink to="/login" class="btn btn-default">Sign In</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>