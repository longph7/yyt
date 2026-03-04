<script setup>
import { ref, watch } from 'vue'
import { fetchReimburseDetail } from '../api/mock'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  activeId: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['open-inbound'])

const loading = ref(false)
const detail = ref(null)
const error = ref('')

const loadDetail = async (id) => {
  loading.value = true
  error.value = ''
  detail.value = null

  try {
    detail.value = await fetchReimburseDetail(id)
  } catch (err) {
    error.value = err?.message || 'Failed to load detail.'
  } finally {
    loading.value = false
  }
}

const openInboundDetail = () => {
  if (!detail.value?.inboundNo) {
    return
  }
  emit('open-inbound', detail.value.inboundNo)
}

watch(
  () => [props.open, props.activeId],
  ([isOpen, id]) => {
    if (isOpen && id) {
      loadDetail(id)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="detail-wrap">
    <p v-if="!activeId" class="muted">No item selected.</p>
    <p v-else-if="loading" class="muted">Loading...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <div v-else-if="detail" class="detail-card">
      <h3>{{ detail.id }}</h3>
      <p><strong>Applicant:</strong> {{ detail.name }}</p>
      <p><strong>Amount:</strong> {{ detail.amount }} CNY</p>
      <p><strong>Status:</strong> {{ detail.status }}</p>
      <p><strong>Date:</strong> {{ detail.date }}</p>
      <p><strong>Department:</strong> {{ detail.department }}</p>
      <p><strong>Reason:</strong> {{ detail.reason }}</p>
      <p>
        <strong>Inbound No:</strong>
        <button class="id-link" @click="openInboundDetail">
          {{ detail.inboundNo }}
        </button>
      </p>
    </div>
  </div>
</template>
