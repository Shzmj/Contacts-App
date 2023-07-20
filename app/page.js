'use client'
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Contacts />
    </main>
  )
}
