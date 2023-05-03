import Image from 'next/image'
import { ChangeEvent, useRef } from 'react'

interface IImageUpload {
  selectedFile?: string
  setSelectedFile: (value: string) => void
  onSelectImage: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ImageUpload = ({
  onSelectImage,
  setSelectedFile,
  selectedFile,
}: IImageUpload) => {
  const selectedFileRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    document.getElementById('file-input')?.click()
  }

  return (
    <div className="flex items-center justify-center flex-col w-full">
      {selectedFile ? (
        <>
          <Image src={selectedFile} width={720} height={480} alt="" />
          <div className="flex mt-4 gap-2">
            <button
              className="bg-gray-900 px-6 py-2 rounded font-bold"
              onClick={() => setSelectedFile('')}
            >
              Remover
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center p-20 border border-dashed border-gray-200 w-full rounded">
          <button
            type="button"
            className="bg-gray-900 px-6 py-2 rounded font-bold"
            onClick={handleUploadClick}
          >
            Banner Upload
          </button>
          <input
            type="file"
            id="file-input"
            hidden
            ref={selectedFileRef}
            onChange={onSelectImage}
          />
        </div>
      )}
    </div>
  )
}
