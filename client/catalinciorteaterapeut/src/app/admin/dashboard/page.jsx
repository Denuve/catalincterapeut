'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard Admin</h2>
      <p>Aici poți gestiona programările, utilizatorii etc.</p>
    </div>
  )
}