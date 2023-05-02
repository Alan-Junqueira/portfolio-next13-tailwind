'use client'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth, firestore } from '@/libs/firebase'
import { useEffect } from 'react'
import { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

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

      console.log(error)
    }
  }, [error, router, userCredentials])
  return (
    <button onClick={() => signInWithGoogle()} disabled={loading}>
      Google
    </button>
  )
}
