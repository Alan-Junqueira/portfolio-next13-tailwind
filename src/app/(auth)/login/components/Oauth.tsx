'use client'

import { useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth'

import { auth, firestore } from '@/libs/firebase'
import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner } from 'react-icons/im'

export const Oauth = () => {
  const [loginError, setLoginError] = useState('')
  const router = useRouter()

  const [signInWithGoogle, userCredentials, loading, error] =
    useSignInWithGoogle(auth)
  const [signOut] = useSignOut(auth)

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid)
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
  }

  useEffect(() => {
    if (userCredentials?.user) {
      setLoginError('')
      const validEmail = !!(
        userCredentials.user.email === process.env.NEXT_PUBLIC_AUTHORIZED_EMAIL
      )
      validEmail && createUserDocument(userCredentials.user)
      validEmail && router.push('/panel')

      !validEmail && setLoginError('email não autorizado')
      console.log(error)
    }
  }, [error, router, userCredentials])

  useEffect(() => {
    signOut()
  }, [signOut])
  return (
    <>
      <button
        className="
          flex items-center justify-between gap-2 
          rounded-lg border border-gray-800 
          text-gray-800 font-semibold 
          px-4 py-2
          bg-gray-200
          hover:bg-gray-300
          transition-all ease-in duration-200
        "
        onClick={() => signInWithGoogle()}
        disabled={loading}
      >
        <FcGoogle size={28} />
        {loading ? (
          <>
            Entrando
            <ImSpinner size={20} className="animate-spin text-black/50" />
          </>
        ) : (
          'Login com Google'
        )}
      </button>
      {loginError && (
        <p className="text-red-500 text-sm text-center -mt-2">{loginError}</p>
      )}
    </>
  )
}
