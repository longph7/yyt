<script setup>
import { ref, watch } from 'vue'
import { fetchInboundDetail } from '../api/mock'

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

const loading = ref(false)
const detail = ref(null)
const error = ref('')

const loadDetail = async (id) => {
  loading.value = true
  error.value = ''
  detail.value = null

  try {
    detail.value = await fetchInboundDetail(id)
  } catch (err) {
    error.value = err?.message || 'Failed to load inbound detail.'
  } finally {
    loading.value = false
  }
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
    <p v-if="!activeId" class="muted">No inbound selected.</p>
    <p v-else-if="loading" class="muted">Loading...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <div v-else-if="detail" class="detail-card">
      <h3>{{ detail.id }}</h3>
      <p><strong>Warehouse:</strong> {{ detail.warehouse }}</p>
      <p><strong>Operator:</strong> {{ detail.operator }}</p>
      <p><strong>Date:</strong> {{ detail.date }}</p>
      <p><strong>Status:</strong> {{ detail.status }}</p>
      <p><strong>Remark:</strong> {{ detail.remark }}</p>
    </div>
  </div>
</template>
