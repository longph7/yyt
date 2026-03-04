<script setup>
import { computed, ref } from 'vue'
import BaseDrawer from './components/BaseDrawer.vue'
import ReimburseDetail from './components/ReimburseDetail.vue'
import InboundDetail from './components/InboundDetail.vue'
import { reimburseList } from './api/mock'

const open = ref(false)
const activeId = ref('')

const isInboundView = computed(() => activeId.value.startsWith('IN'))
const drawerTitle = computed(() => (isInboundView.value ? 'Inbound Detail' : 'Reimbursement Detail'))

const openDrawer = (id) => {
  activeId.value = id
  open.value = true
}

const openInboundInSameDrawer = (inboundNo) => {
  activeId.value = inboundNo
}

const closeDrawer = () => {
  open.value = false
  activeId.value = ''
}
</script>

<template>
  <main class="page">
    <section class="card">
      <h1>Reimbursements</h1>
      <table class="list-table">
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Applicant</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in reimburseList" :key="item.id">
            <td>
              <button class="id-link" @click="openDrawer(item.id)">
                {{ item.id }}
              </button>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.amount }} CNY</td>
            <td>{{ item.status }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <BaseDrawer :open="open" :title="drawerTitle" @close="closeDrawer">
      <ReimburseDetail
        v-if="!isInboundView"
        :open="open"
        :active-id="activeId"
        @open-inbound="openInboundInSameDrawer"
      />
      <InboundDetail v-else :open="open" :active-id="activeId" />
    </BaseDrawer>
  </main>
</template>
