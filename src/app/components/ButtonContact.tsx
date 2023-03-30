'use client'
import { useRouter } from 'next/navigation'
import { Button } from './Button'
import { Envelope } from 'phosphor-react'
import { HTMLAttributes } from 'react'

interface IButtonContact extends HTMLAttributes<HTMLButtonElement> {}

export const ButtonContact = ({ ...props }: IButtonContact) => {
  const router = useRouter()
  return (
    <Button
      type="button"
      onClick={() => router.push('/contact')}
      iconLeft={() => <Envelope />}
      {...props}
    >
      Contato
    </Button>
  )
}
