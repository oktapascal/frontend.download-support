<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'

const schema = toTypedSchema(z.object({
  email: z.string().min(1, "email tidak boleh kosong").email({ message: "email tidak valid" }),
  password: z.string().min(1, "password tidak boleh kosong"),
}))

const { $toast } = useNuxtApp()

const { handleSubmit, errors, isSubmitting, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: ''
  }
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(async values => {
  const { email, password } = values

  const { error } = await useFetch('/api/signin', {
    method: 'POST',
    body: {
      email,
      password
    }
  })

  if (error.value?.statusCode === 400) {
    switch (error.value.statusMessage) {
      case "EMAIL_NOT_CONFIRMED":
        setFieldError('email', error.value?.data.message)
        break;
      default:
        $toast.error(error.value?.data.message)
        break;
    }
  }
})
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="card bg-white/90 border border-gray-300 shadow h-[34rem] w-[25rem]">
      <div class="card-header">
        <h2 class="card-title pb-2">Sign In</h2>
        <p class="text-sm text-neutral-400">Get Consulting Support</p>
      </div>
      <div class="card-content h-[77%] relative">
        <form @submit="onSubmit" novalidate>
          <div class="relative" :class="{ error: errors.email }">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Your Email..." v-model="email"
              :readonly="isSubmitting" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.email }}</small>
          </div>
          <div class="relative" :class="{ error: errors.password }">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" class="form-control" placeholder="Your Password..."
              v-model="password" :readonly="isSubmitting" />
            <small class="text-sm font-medium leading-none text-red-600 pl-1">{{ errors.password }}</small>
          </div>
          <div class="relative block mt-8">
            <button type="submit" class="btn btn-default w-full" :disabled="isSubmitting">Sign In</button>
          </div>
        </form>
        <div class="absolute bottom-0 right-0 left-0 text-center">
          <span class="text-sm text-neutral-400">Don't have an account ?</span>
          <NuxtLink to="/register" class="text-sm text-blue-600 font-semibold pl-2 hover:text-blue-600/900">
            Sign Up
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <Toaster position="top-center" richColors />
</template>