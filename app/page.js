'use client'
import Contacts from './components/Contacts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Contacts />
    </main>
  )
}
