'use client'

import { Oauth } from '@/app/(auth)/login/components/Oauth'
import { auth } from '@/libs/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function PanelPage() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div>
      {user ? <p>user</p> : <Oauth />}
      <h1>Panel</h1>
    </div>
  )
}
