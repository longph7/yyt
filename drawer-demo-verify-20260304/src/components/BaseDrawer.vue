<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Drawer',
  },
})

const emit = defineEmits(['close'])

const handleMaskClick = () => {
  emit('close')
}

const handleCloseClick = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="drawer-mask" @click="handleMaskClick"></div>
    </Transition>

    <Transition name="slide-right">
      <aside v-if="open" class="drawer-panel" role="dialog" aria-modal="true">
        <header class="drawer-header">
          <h2>{{ title }}</h2>
          <button class="close-btn" @click="handleCloseClick">×</button>
        </header>
        <div class="drawer-body">
          <slot />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>
