<script lang="ts" setup>
const config = useRuntimeConfig()

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
const isLoading = ref(false)
const showNotification = ref(false)
const notificationType = ref<'success' | 'error'>('success')
const notificationMessage = ref('')

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

  isLoading.value = true

  try {
    const body = {
      ...formData.value,
      access_key: config.public.web3formsAccessKey,
      subject: 'Portfolio Contact Form - New Inquiry',
    }
    await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body,
    })

    notificationType.value = 'success'
    notificationMessage.value = 'Message sent successfully! Thank you for reaching out.'
    showNotification.value = true
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error)
    notificationType.value = 'error'
    notificationMessage.value = 'Failed to send message. Please try again later.'
    showNotification.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <div class="w-full glass-effect rounded-lg p-6 sm:p-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <MyInput
          v-model="formData.name"
          label="Name *"
          placeholder="Your name"
          :error="errors.name"
        />

        <MyInput
          v-model="formData.email"
          label="Email *"
          placeholder="example@example.com"
          :error="errors.email"
          :attrs="{
            autocapitalize: 'off',
          }"
        />

        <MyInput
          v-model="formData.message"
          textarea
          label="Message *"
          placeholder="Your message"
          :error="errors.message"
        />

        <MyButton type="submit" variant="primary" :loading="isLoading" class="w-full sm:w-fit"
          >Send Message</MyButton
        >
      </form>
    </div>

    <MyNotification
      :type="notificationType"
      :message="notificationMessage"
      :show="showNotification"
      @close="showNotification = false"
    />
  </div>
</template>
