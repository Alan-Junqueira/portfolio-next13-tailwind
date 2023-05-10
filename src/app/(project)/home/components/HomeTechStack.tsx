import Image from 'next/image'
import React from 'react'
import { HomeTitle } from './HomeTitle'
import { HomeTechHighlight } from './HomeTechHighlight'

export const HomeTechStack = () => {
  return (
    <div className='flex flex-col gap-6 py-10'>
      <HomeTitle title='Tech Stack' />
      <div className='
            flex sm:grid items-center
            sm:flex-col 
            md:grid-cols-2
            gap-4 lg:gap-8
            px-6
          '
      >
        <div className='relative'>
          <Image
            src="/assets/images/techStack.svg"
            alt='Tech Stack'
            width={500}
            height={500}
          />
        </div>
        <div
          className='
            flex flex-col gap-4 
            overflow-y-scroll 
            max-h-80 
            border border-emerald-500
            rounded
            p-4
            text-green-500 text-sm text-justify
          '
        >
          <p>Imagine só ter o poder de criar incríveis projetos web, do zero ao avançado! Foi assim que iniciei meu desenvolvimento, aprendendo as bases do <HomeTechHighlight> HTML</HomeTechHighlight>, <HomeTechHighlight> CSS </HomeTechHighlight>e <HomeTechHighlight> Javascript</HomeTechHighlight>. Mas, com o tempo, fui descobrindo que existem outras formas de escrever código, para aprimorar ainda mais a minha produtividade.</p>
          <p>Aprendi sobre a importância de componentizar os projetos e utilizar ferramentas atualizadas, que me garantem uma performance excepcional. Descobri que a utilização de <HomeTechHighlight> Typescript</HomeTechHighlight> em conjunto com <HomeTechHighlight> ReactJS</HomeTechHighlight> é uma forma poderosa de evitar erros futuros em produção e melhorar a experiência de desenvolvimento.</p>
          <p>Não parei por aí! Também entendi que, para certos casos, não basta criar apenas Single Page Applications, sendo necessário a criação de projetos com o <HomeTechHighlight> NextJS</HomeTechHighlight> como framework SSR.</p>
          <p>Cheguei a me aventurar no <HomeTechHighlight>AngularJs</HomeTechHighlight>, com o objetivo de entender como é a escrita dos components e como funciona o código, pois acredito que um desenvolvedor <HomeTechHighlight>Javascript</HomeTechHighlight> precisa entender, nem que seja o básico, de como funciona as ferramentas que o tem como base.</p>
          <p>E quanto às estilizações? Descobri diversas formas novas, como <HomeTechHighlight> Sass</HomeTechHighlight>, <HomeTechHighlight> Styled-Components</HomeTechHighlight>, <HomeTechHighlight> Stiches</HomeTechHighlight> e <HomeTechHighlight> Tailwind</HomeTechHighlight>, que me permitem criar projetos ainda mais surpreendentes. E para aumentar ainda mais a minha produtividade, aprendi a utilizar bibliotecas de UI como <HomeTechHighlight>Radix Ui</HomeTechHighlight>, <HomeTechHighlight>Chakra Ui</HomeTechHighlight>, <HomeTechHighlight>Material Ui</HomeTechHighlight>, que já possuem componentes com funcionalidades prontas. Com todas essas habilidades, posso criar projetos impressionantes do início ao fim!</p>
          <p>
            Ao longo do meu caminho como desenvolvedor, aprendi a criar incríveis <HomeTechHighlight> APIs</HomeTechHighlight> utilizando <HomeTechHighlight> NodeJS</HomeTechHighlight> e <HomeTechHighlight> Express</HomeTechHighlight>. E não paro por aí! Estou sempre buscando aprimorar minhas habilidades, e atualmente estou aprendendo a utilizar o <HomeTechHighlight> Fastify</HomeTechHighlight> e em breve o <HomeTechHighlight>Nest JS</HomeTechHighlight>.</p>
          <p>Percebi que é possível utilizar tanto bancos de dados relacionais quanto não relacionais para salvar dados, e aprendi diversas formas de trabalhar com eles. Desde a utilização dos bancos na minha própria máquina até a conexão com sites que suportam esses bancos. Além disso, descobri como criar containers <HomeTechHighlight>Docker</HomeTechHighlight> e utilizá-los para acessar os bancos de dados, tornando todo o processo ainda mais eficiente.</p>
          <p>Para facilitar a inserção de dados nos bancos, aprendi a utilizar <HomeTechHighlight> ORMs</HomeTechHighlight> como Sequelize e Prisma para bancos de dados relacionais, como <HomeTechHighlight> PostgreSQL</HomeTechHighlight>, <HomeTechHighlight> MySQL</HomeTechHighlight> e <HomeTechHighlight> SQLite</HomeTechHighlight>, além do <HomeTechHighlight> Mongoose</HomeTechHighlight> para bancos NoSQL, como o <HomeTechHighlight> MongoDB</HomeTechHighlight>, conectando-me com o <HomeTechHighlight>Atlas</HomeTechHighlight>. E não paro de me aperfeiçoar nesses conceitos!</p>
          <p>Mas meu aprendizado não fica restrito ao desenvolvimento web, também comecei a estudar o desenvolvimento mobile, utilizando o poderoso <HomeTechHighlight>React Native</HomeTechHighlight>, para expandir ainda mais minha stack de desenvolvimento e criar soluções mobile.</p>
          <p>E é claro, não poderia deixar de mencionar a importância do <HomeTechHighlight>Git</HomeTechHighlight> para versionamento de código, que me permite trabalhar de forma colaborativa e com total segurança. Com todas essas habilidades, sou capaz de criar soluções incríveis e tornar o mundo digital ainda mais surpreendente!</p>
        </div>
      </div>
    </div>
  )
}
