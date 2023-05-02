import { Metadata } from 'next'
import { Oauth } from './components/Oauth'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-lg border border-slate-600 bg-gray-100 overflow-hidden">
      <h1 className="text-center text-gray-800 font-bold">Dashboard Login</h1>
      <Oauth />
    </div>
  )
}
