import { InputRef } from '@/components/InputRef'
import { useSelectedFile } from '@/hooks/useSelectedFile'
import { firestore, storage } from '@/libs/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AiFillGithub, AiOutlineGlobal, AiOutlineProject } from 'react-icons/ai'
import { ImageUpload } from '@/components/ImageUpload'
import { TbAtomOff } from 'react-icons/tb'
import { BsFillCalendarWeekFill } from 'react-icons/bs'

export const portfolioFormSchema = z.object({
  projectName: z.string().min(1),
  githubLink: z.string().min(1),
  siteLink: z.string().min(1),
  description: z.string().min(1),
  projectCreation: z.string().min(4),
  techs: z.string().transform((tech) => tech.split(',')),
})

export type TPortfolioFormInput = z.input<typeof portfolioFormSchema>
export type TPortfolioFormOutput = z.output<typeof portfolioFormSchema>

export const PortfolioConfig = () => {
  const [removeImage, setRemoveImage] = useState(false)

  const { selectedFile, handleSelectFile, changeSelectedFile } =
    useSelectedFile()

  const {
    handleSubmit,
    setError,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<TPortfolioFormInput>({
    resolver: zodResolver(portfolioFormSchema),
  })

  const handleCreatePortfolioItem = async (dataOutput: any) => {
    const data = dataOutput as TPortfolioFormOutput
    try {
      setError('root', { message: '' })
      const {
        description,
        githubLink,
        projectName,
        siteLink,
        techs,
        projectCreation,
      } = data
      const newPortfolioItem: TPortfolioFormOutput = {
        description,
        githubLink,
        projectName,
        siteLink,
        techs,
        projectCreation,
      }

      const postDocRef = await addDoc(
        collection(firestore, 'portfolio'),
        newPortfolioItem,
      )

      if (selectedFile) {
        const imageRef = ref(storage, `portfolio/${postDocRef.id}/image`)
        //* format 'data_url is because the method used to convert the file were readAsDataURL
        await uploadString(imageRef, selectedFile, 'data_url')
        const downloadURL = await getDownloadURL(imageRef)

        await updateDoc(postDocRef, {
          imageUrl: downloadURL,
        })
      }
    } catch (error: any) {
      console.log('handleCreatePost error', error.message)
      setError('root', { message: 'Error creating post' })
    } finally {
      reset()
      setRemoveImage(true)
    }
  }

  const handleRemoveImage = (remove: boolean) => {
    setRemoveImage(remove)
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <h3 className="text-center font-bold text-3xl my-10">
        Adicionar novo Portfolio
      </h3>
      <form
        onSubmit={handleSubmit(handleCreatePortfolioItem)}
        className="flex flex-col gap-2"
      >
        <div className="flex gap-2 w-full">
          <div className="flex flex-col px-4 w-full">
            <label htmlFor="projectName" className="text-purple-500 font-bold">
              Nome do Projeto
            </label>
            <InputRef
              id="projectName"
              type="text"
              placeholder="Ex. Clone do Reddit"
              {...register('projectName')}
              icon={() => (
                <AiOutlineProject size={28} className="text-purple-500" />
              )}
            />
          </div>
          <div className="flex flex-col px-4 w-fit">
            <label htmlFor="projectName" className="text-purple-500 font-bold">
              Ano de Criação
            </label>
            <InputRef
              id="projectName"
              type="date"
              placeholder="Ex. 2023"
              {...register('projectCreation')}
              icon={() => (
                <BsFillCalendarWeekFill size={24} className="text-purple-500" />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col px-4">
          <label htmlFor="projectName" className="text-purple-500 font-bold">
            Descrição
          </label>
          <textarea
            className="text-sm font-sans
              rounded-lg
              border-2 border-purple-500 
              px-4 py-2
              focus:outline-none focus:border-purple-800
              hover:border-purple-700
              transition duration-200 ease-in
              bg-white
              w-full
            "
            rows={5}
            placeholder="Detalhes de implementação do projeto"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col px-4">
          <label htmlFor="githubLink" className="text-purple-500 font-bold">
            Github
          </label>
          <InputRef
            id="githubLink"
            type="text"
            placeholder="Ex. https://github.com/Alan-Junqueira/portfolio-next13-tailwind"
            {...register('githubLink')}
            icon={() => <AiFillGithub size={28} className="text-purple-500" />}
          />
        </div>
        <div className="flex flex-col px-4">
          <label htmlFor="siteLink" className="text-purple-500 font-bold">
            Site
          </label>
          <InputRef
            id="siteLink"
            type="text"
            placeholder="Ex. https://portfolio-next13-tailwind.vercel.app/"
            {...register('siteLink')}
            icon={() => (
              <AiOutlineGlobal size={28} className="text-purple-500" />
            )}
          />
        </div>
        <div className="flex flex-col px-4">
          <label htmlFor="techs" className="text-purple-500 font-bold">
            Tecnologias
          </label>
          <InputRef
            id="techs"
            type="text"
            placeholder="Ex. React, NextJs, Tailwind, Zod, Prisma"
            {...register('techs')}
            icon={() => <TbAtomOff size={28} className="text-purple-500" />}
          />
        </div>
        <div className="self-center w-fit m-4 p-8 border-2 border-purple-500 rounded-lg">
          <ImageUpload
            onSelectImage={handleSelectFile}
            selectedFile={selectedFile}
            setSelectedFile={changeSelectedFile}
            removeImage={removeImage}
            handleRemoveImage={handleRemoveImage}
          />
        </div>
        <button
          className="bg-gray-900 px-6 py-2 rounded w-4/12 self-center font-bold disabled:cursor-not-allowed disabled:bg-opacity-50"
          type="submit"
          disabled={isSubmitting}
        >
          Criar novo Portfolio
        </button>
      </form>
    </div>
  )
}
