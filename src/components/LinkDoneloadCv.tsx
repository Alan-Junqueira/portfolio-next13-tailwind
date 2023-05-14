import { BsFiletypePdf } from 'react-icons/bs'

import { LinkIcon } from './LinkIcon'

export const LinkDownloadCv = () => {
  return (
    <LinkIcon
      href="/assets/files/Curriculo.pdf"
      target="_blank"
      iconLeft={() => <BsFiletypePdf />}
    >
      Curriculum
    </LinkIcon>
  )
}
