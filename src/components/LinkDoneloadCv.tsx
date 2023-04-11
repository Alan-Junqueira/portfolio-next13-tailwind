import { LinkIcon } from './LinkIcon'
import { BsFiletypePdf } from 'react-icons/bs'

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
