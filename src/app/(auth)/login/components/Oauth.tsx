'use client'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { z } from 'zod'

import { auth, firestore } from '@/libs/firebase'
import { useEffect } from 'react'
import { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

const loginFormSchema = z.object({
  username: z.string().email(),
  password: z.string(),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export const Oauth = () => {
  const router = useRouter()

  const [signInWithGoogle, userCredentials, loading, error] =
    useSignInWithGoogle(auth)

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid)
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
  }

  useEffect(() => {
    if (userCredentials?.user) {
      const validEmail = !!(
        userCredentials.user.email === process.env.NEXT_PUBLIC_AUTHORIZED_EMAIL
      )
      validEmail && createUserDocument(userCredentials.user)
      validEmail && router.push('/panel')
    }
  }, [router, userCredentials])
  return <button onClick={() => signInWithGoogle()}>Google</button>
}
