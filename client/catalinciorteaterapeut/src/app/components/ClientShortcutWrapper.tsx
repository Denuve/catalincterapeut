'use client'

import useAdminShortcut from '@/hooks/useAdminShortcut'

export default function ClientShortcutWrapper() {
  useAdminShortcut()
  return null // nu randăm nimic
}