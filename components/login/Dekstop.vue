<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'

const schema = toTypedSchema(z.object({
  email: z.string().min(1, "email tidak boleh kosong").email({ message: "email tidak valid" }),
  password: z.string().min(1, "password tidak boleh kosong"),
}))

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: ''
  }
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="relative register-background h-screen w-full flex flex-row-reverse">
    <div class="card bg-neutral-50/70 rounded-tr-none rounded-br-none w-[26.5%] py-8 px-4">
      <div class="card-header">
        <h2 class="card-title pb-2">Sign In</h2>
        <p class="text-sm text-neutral-400">Get Consulting Support</p>
      </div>
      <div class="card-content relative h-[80%]">
        <form @submit="onSubmit" novalidate>
          <div class="relative" :class="{ error: errors.email }">
            <label for="email" class="label">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email..." class="form-control" v-model="email" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.email }}</small>
          </div>
          <div class="relative" :class="{ error: errors.password }">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" placeholder="Your password..." class="form-control"
              v-model="password" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.password }}</small>
          </div>
          <div class="relative block mt-8">
            <button type="submit" class="btn btn-default w-full">Sign Up</button>
          </div>
        </form>
        <div class="absolute bottom-0 right-0 left-0 text-center">
          <span class="text-sm text-neutral-400">Don't have an account ? ?</span>
          <NuxtLink to="/register" class="text-sm text-blue-600 font-semibold pl-2 hover:text-blue-600/900">
            Sign Up
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.register-background {
  background: url("~/assets/background/support-background.webp") no-repeat;
  background-size: contain;
}
</style>