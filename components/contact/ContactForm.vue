<script lang="ts" setup>
interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  message: '',
})

const errors = ref<FormErrors>({})
// TODO: Add loading spinner to button
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validateForm = (): boolean => {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Show success notification
    // TODO: This should be reset after 5 seconds, or less
    isSubmitted.value = true
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="w-full glass-effect rounded-lg p-6 sm:p-8">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <MyInput v-model="formData.name" label="Name*" placeholder="Your name" :error="errors.name" />

      <MyInput
        v-model="formData.email"
        label="Email*"
        placeholder="example@example.com"
        :error="errors.email"
      />

      <MyInput
        v-model="formData.message"
        textarea
        label="Message*"
        placeholder="Your message"
        :error="errors.message"
      />

      <MyButton type="submit" variant="primary" class="w-full sm:w-fit">Send Message</MyButton>
    </form>
  </div>
</template>
