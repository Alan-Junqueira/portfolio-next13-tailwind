import { BsFillEnvelopeAtFill } from 'react-icons/bs'

import { LinkIcon } from './LinkIcon'

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
