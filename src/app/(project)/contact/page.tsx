import { Form } from './components/Form'

export default function Contact() {
  return (
    <div className="relative">
      <h1
        className="px-4 md:px-6 lg:px-8
          text-center
          text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-4xl font-bold
          my-10"
      >
        Deixe sua mensagem
      </h1>
      <Form />
    </div>
  )
}
