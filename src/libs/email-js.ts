import { FormProps } from '@/@types/form'
import emailjs from '@emailjs/browser'

export const emailJsInstance = {
  sendEmail: async ({
    fromEmail,
    fromFullName,
    fromMessage,
    toName,
  }: FormProps) => {
    const emailResponse = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      {
        fromEmail,
        fromFullName,
        fromMessage,
        toName,
      },
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
    )

    return emailResponse
  },
}
