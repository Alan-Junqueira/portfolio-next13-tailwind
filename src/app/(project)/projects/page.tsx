import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'

import { ProjectsCard } from './components/ProjectsCard'
import { ProjectsMain } from './components/ProjectsMain'
import { ProjectsPagination } from './components/ProjectsPagination'

import { firestore } from '@/libs/firebase'

import { TPortfolio } from '@/@types/Portfolio'

const getProjects = async (limitReturn: number): Promise<TPortfolio[]> => {
  const portfolioQuery = query(
    collection(firestore, 'portfolio'),
    orderBy('projectCreation', 'desc'),
    limit(limitReturn),
  )

  const portfolioDocs = await getDocs(portfolioQuery)
  const projects = portfolioDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TPortfolio[]

  return projects
}

// export const dynamic = 'force-dynamic'
export const revalidate = 60

const getTotalProjects = async () => {
  const portfolioQuery = query(collection(firestore, 'portfolio'))
  const portfolioDocs = await getDocs(portfolioQuery)
  const totalProjects = portfolioDocs.size

  return totalProjects
}

export default async function Projects() {
  const totalItemsPerPage = 10

  const [projects, totalProjects] = await Promise.all([
    getProjects(10),
    getTotalProjects(),
  ])

  return (
    <>
      <ProjectsMain totalProjects={totalProjects} />
      <div className="grid grid-cols-1 md:grid-cols-2 sm:px-4 md:gap-4">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            project={project}
          />
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
