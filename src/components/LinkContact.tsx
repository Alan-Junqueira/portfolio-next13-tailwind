import { LinkIcon } from './LinkIcon'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'

export const LinkContact = () => {
  return (
    <LinkIcon
      passHref
      href="/contact"
      iconLeft={() => <BsFillEnvelopeAtFill />}
    >
      Contato
    </LinkIcon>
  )
}
