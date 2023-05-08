import { TPortfolio } from '@/@types/Portfolio'
import { firestore } from '@/libs/firebase'
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'
import { ProjectsPagination } from './components/ProjectsPagination'
import Image from 'next/image'
import dayjs from 'dayjs'

const totalItemsPerPage = 10

const getProjects = async (): Promise<TPortfolio[]> => {
  const portfolioQuery = query(
    collection(firestore, 'portfolio'),
    orderBy('projectCreation', 'desc'),
    limit(totalItemsPerPage),
  )

  const portfolioDocs = await getDocs(portfolioQuery)
  const projects = portfolioDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TPortfolio[]

  return projects
}

const getTotalProjects = async () => {
  const portfolioQuery = query(collection(firestore, 'portfolio'))
  const portfolioDocs = await getDocs(portfolioQuery)
  const totalProjects = portfolioDocs.size

  return totalProjects
}

export default async function Projects() {
  const projects = await getProjects()
  const totalProjects = await getTotalProjects()

  return (
    <>
      <h1>Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:px-4 md:gap-4">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="flex items-center justify-between">
              <h3 className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-2xl font-bold">
                {project.projectName}
              </h3>
              <div className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-sm font-bold">
                {dayjs(project.projectCreation).format('MM/YYYY')}
              </div>
            </div>
            <div className="relative rounded-t-lg overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.projectName}
                width={1080}
                height={720}
                className="w-full h-auto"
              />
              <div
                className="
                  flex items-center justify-end gap-2 flex-wrap
                  absolute bottom-0 left-0 right-0
                  backdrop-saturate-blur bg-[#08070B] bg-opacity-60
                  px-6 py-2
                "
              >
                {project.techs.map((tech, index) => (
                  <span
                    key={tech + index}
                    className="bg-fuchsia-700 text-xs font-bold rounded-lg text-neutral-50 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>descrição: {project.description}</div>
            <div>githubLink: {project.githubLink}</div>

            <div>siteLink: {project.siteLink}</div>
          </div>
        ))}
      </div>
      <ProjectsPagination
        totalProjects={totalProjects}
        totalItemsPerPage={totalItemsPerPage}
        lastRef={projects[projects.length - 1].projectCreation}
      />
    </>
  )
}
