export const reimburseList = [
  { id: 'R001', name: 'Zhang San', amount: 1500, status: 'Approved', date: '2026-03-01' },
  { id: 'R002', name: 'Li Si', amount: 2300, status: 'Pending', date: '2026-03-02' },
  { id: 'R003', name: 'Wang Wu', amount: 800, status: 'Rejected', date: '2026-03-03' },
]

const detailMap = {
  R001: {
    id: 'R001',
    inboundNo: 'IN001',
    name: 'Zhang San',
    amount: 1500,
    status: 'Approved',
    date: '2026-03-01',
    department: 'Sales',
    reason: 'Client visit travel expense',
  },
  R002: {
    id: 'R002',
    inboundNo: 'IN002',
    name: 'Li Si',
    amount: 2300,
    status: 'Pending',
    date: '2026-03-02',
    department: 'Marketing',
    reason: 'Event material purchase',
  },
  R003: {
    id: 'R003',
    inboundNo: 'IN003',
    name: 'Wang Wu',
    amount: 800,
    status: 'Rejected',
    date: '2026-03-03',
    department: 'Admin',
    reason: 'Office supplies purchase',
  },
}

const inboundDetailMap = {
  IN001: {
    id: 'IN001',
    warehouse: 'WH-A',
    operator: 'Tom',
    date: '2026-03-01',
    status: 'Done',
    remark: 'Inbound from reimbursement asset purchase',
  },
  IN002: {
    id: 'IN002',
    warehouse: 'WH-B',
    operator: 'Jerry',
    date: '2026-03-02',
    status: 'Pending',
    remark: 'Waiting quality check',
  },
  IN003: {
    id: 'IN003',
    warehouse: 'WH-A',
    operator: 'Alice',
    date: '2026-03-03',
    status: 'Rejected',
    remark: 'Document mismatch',
  },
}

export function fetchReimburseDetail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detail = detailMap[id]
      if (!detail) {
        reject(new Error('Detail not found.'))
        return
      }
      resolve(detail)
    }, 500)
  })
}

export function fetchInboundDetail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detail = inboundDetailMap[id]
      if (!detail) {
        reject(new Error('Inbound detail not found.'))
        return
      }
      resolve(detail)
    }, 500)
  })
}
