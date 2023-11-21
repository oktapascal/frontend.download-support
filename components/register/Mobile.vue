<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'

const schema = toTypedSchema(z.object({
  name: z.string().min(1, "nama tidak boleh kosong").max(100, { message: "maksimal karakter berjumlah 100 karakter" }),
  email: z.string().min(1, "email tidak boleh kosong").email({ message: "email tidak valid" }),
  password: z.string().min(1, "password tidak boleh kosong"),
}))

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    password: ''
  }
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="card bg-white/90 border border-gray-300 shadow h-[34rem] w-[25rem]">
      <div class="card-header">
        <h2 class="card-title pb-2">Sign Up</h2>
        <p class="text-sm text-neutral-400">Get Consulting Support</p>
      </div>
      <div class="card-content h-[77%] relative">
        <form @submit="onSubmit" novalidate>
          <div class="relative" :class="{ error: errors.name }">
            <label for="name" class="label">Name</label>
            <input type="text" id="name" name="name" class="form-control" placeholder="Your Name..." v-model="name" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.name }}</small>
          </div>
          <div class="relative" :class="{ error: errors.email }">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Your Email..."
              v-model="email" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.email }}</small>
          </div>
          <div class="relative" :class="{ error: errors.password }">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" class="form-control" placeholder="Your Password..."
              v-model="password" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.password }}</small>
          </div>
          <div class="relative block mt-8">
            <button type="submit" class="btn btn-default w-full">Sign Up</button>
          </div>
        </form>
        <div class="absolute bottom-0 right-0 left-0 text-center">
          <span class="text-sm text-neutral-400">Have an account ?</span>
          <NuxtLink to="/login" class="text-sm text-blue-600 font-semibold pl-2 hover:text-blue-600/900">
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>