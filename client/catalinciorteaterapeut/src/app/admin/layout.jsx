export const metadata = {
  title: 'Admin - Terapeut',
}

export default function AdminLayout({ children }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Zona Admin</h1>
      <hr />
      {children}
    </div>
  )
}