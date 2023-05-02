import { Metadata } from 'next'
import { Oauth } from './components/Oauth'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="">
      <h1>Login</h1>
      <Oauth />
    </div>
  )
}
