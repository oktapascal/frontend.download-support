<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'

const schema = toTypedSchema(z.object({
  name: z.string().min(1, "nama tidak boleh kosong").max(100, { message: "maksimal karakter berjumlah 100 karakter" }),
  email: z.string().min(1, "email tidak boleh kosong").email({ message: "email tidak valid" }),
  password: z.string().min(1, "password tidak boleh kosong"),
}))

const { handleSubmit, errors, isSubmitting, setFieldError } = useForm({
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

const onSubmit = handleSubmit(async values => {
  const { email, name, password } = values

  const { data, error } = await useFetch('/api/signup', {
    method: 'POST',
    body: {
      email,
      name,
      password
    }
  })

  if (error.value?.statusCode === 400) {
    setFieldError('email', error.value?.data.message)
  }

  if (data.value) {
    await navigateTo('/confirm', { redirectCode: 302 })
  }
})
</script>

<template>
  <div class="relative register-background h-screen w-full flex flex-row-reverse">
    <div class="card bg-neutral-50/70 rounded-tr-none rounded-br-none w-[26.5%] py-8 px-4">
      <div class="card-header">
        <h2 class="card-title pb-2">Sign Up</h2>
        <p class="text-sm text-neutral-400">Get Consulting Support</p>
      </div>
      <div class="card-content relative h-[80%]">
        <form @submit="onSubmit" novalidate>
          <div class="relative" :class="{ error: errors.name }">
            <label for="name" class="label">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name..." class="form-control" v-model="name"
              :readonly="isSubmitting" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.name }}</small>
          </div>
          <div class="relative" :class="{ error: errors.email }">
            <label for="email" class="label">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email..." class="form-control" v-model="email"
              :readonly="isSubmitting" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.email }}</small>
          </div>
          <div class="relative" :class="{ error: errors.password }">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" placeholder="Your password..." class="form-control"
              v-model="password" :readonly="isSubmitting" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.password }}</small>
          </div>
          <div class="relative block mt-8">
            <button type="submit" class="btn btn-default w-full" :disabled="isSubmitting">Sign Up</button>
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

<style>
.register-background {
  background: url("~/assets/background/support-background.webp") no-repeat;
  background-size: contain;
}
</style>