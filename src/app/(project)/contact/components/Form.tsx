'use client'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from './Input'
import { InputContainer } from './InputContainer'
import { InputError } from './InputError'
import { Label } from './Label'

import { emailJsInstance } from '@/libs/email-js'

import 'react-toastify/dist/ReactToastify.css'

const emailFormSchema = z
  .object({
    fromName: z
      .string()
      .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
    fromLastName: z
      .string()
      .min(2, { message: 'Sobrenome deve ter pelo menos 2 caracteres' }),
    fromEmail: z.string().email({ message: 'Email inválido' }),
    fromMessage: z
      .string()
      .min(30, { message: 'Mensagem deve ter no mínimo 30 caracteres' }),
    toName: z.string(),
  })
  .transform(({ fromEmail, fromLastName, fromMessage, fromName, toName }) => {
    return {
      fromFullName: `${fromName} ${fromLastName}`,
      fromEmail,
      fromMessage,
      toName,
    }
  })

type EmailFormInputs = z.input<typeof emailFormSchema>
type EmailFormOutputs = z.output<typeof emailFormSchema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EmailFormInputs>({
    resolver: zodResolver(emailFormSchema),
  })

  const handleSubmitForm = async (data: any) => {
    const { fromEmail, fromFullName, fromMessage, toName } =
      data as EmailFormOutputs
    const emailResult = await emailJsInstance.sendEmail({
      fromEmail,
      fromFullName,
      fromMessage,
      toName,
    })

    if (emailResult.status === 200) {
      toast.success('Email enviado com sucesso!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })

      reset()
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="
        flex flex-col gap-3 
        items-center justify-center
        mb-8
      "
      >
        <div
          className="
          max-w-xl w-full flex flex-col gap-4
          border-2 border-solid border-fuchsia-700
          px-10 py-4 rounded-lg
          backdrop-saturate-blur bg-[#08070B] bg-opacity-60
        "
        >
          <Input
            type="hidden"
            {...register('toName')}
            value="contato.alanjunqueira@gmail.com"
          />
          <InputContainer>
            <Label htmlFor="fromName">Nome</Label>
            <Input
              type="text"
              placeholder="Digite seu nome"
              id="fromName"
              {...register('fromName')}
            />
            {errors.fromName && (
              <InputError error={errors.fromName.message as string} />
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fromLastName">Sobrenome</Label>
            <Input
              type="text"
              placeholder="Digite seu sobrenome"
              id="fromLastName"
              {...register('fromLastName')}
            />
            {errors.fromLastName && (
              <InputError error={errors.fromLastName.message as string} />
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fromEmail">Email</Label>
            <Input
              type="text"
              placeholder="Digite seu melhor email"
              id="fromEmail"
              {...register('fromEmail')}
            />
            {errors.fromEmail && (
              <InputError error={errors.fromEmail.message as string} />
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fromMessage">Mensagem</Label>
            <textarea
              className=" 
              border-2 border-solid border-fuchsia-700 rounded-md pl-4 outline-none focus:border-pink-500
              text-sm text-neutral-50
              bg-transparent
              py-2
            "
              placeholder="Digite uma mensagem com no mínimo 30 caracteres"
              rows={4}
              id="fromMessage"
              {...register('fromMessage')}
            />
            {errors.fromMessage && (
              <InputError error={errors.fromMessage.message as string} />
            )}
          </InputContainer>
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex gap-2 items-center justify-center
              text-lg uppercase font-bold font-sans
              mt-8 py-2 px-4 rounded-lg
              bg-fuchsia-700  hover:bg-transparent
              text-green-300 hover:text-green-500
              border-2 border-green-500 hover:border-fuchsia-700
              transition-all ease-in duration-200 
              w-full truncate
              disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}
