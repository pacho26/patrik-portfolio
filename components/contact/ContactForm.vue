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
  } else if (formData.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
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

    isSubmitted.value = true
    formData.value = { name: '', email: '', message: '' }

    // Reset success message after 5 seconds
    // TODO: Show success notification
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="w-full">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name Field -->
      <MyInput
        v-model="formData.name"
        type="text"
        label="Name"
        placeholder="Your name"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.name"
      />

      <!-- Email Field -->
      <MyInput
        v-model="formData.email"
        type="email"
        label="Email"
        placeholder="your.email@example.com"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.email"
      />

      <!-- Message Field -->
      <MyInput
        v-model="formData.message"
        type="textarea"
        label="Message"
        placeholder="Your message (minimum 10 characters)"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.message"
        :rows="5"
      />

      <!-- Submit Button -->
      <MyButton type="submit" variant="primary"> Send Message </MyButton>
    </form>
  </div>
</template>
