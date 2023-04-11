'use client'
import { LinkIcon } from './LinkIcon'
import { Envelope } from 'phosphor-react'

export const LinkContact = () => {
  return (
    <LinkIcon passHref href="/contact" iconLeft={() => <Envelope />}>
      Contato
    </LinkIcon>
  )
}
