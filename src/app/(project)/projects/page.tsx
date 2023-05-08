import { TPortfolio } from '@/@types/Portfolio'
import { firestore } from '@/libs/firebase'
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'
// import { ProjectsPagination } from './components/ProjectsPagination'

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

// const getTotalProjects = async () => {
//   const portfolioQuery = query(collection(firestore, 'portfolio'))
//   const portfolioDocs = await getDocs(portfolioQuery)
//   const totalProjects = portfolioDocs.size

//   return totalProjects
// }

export default async function Projects() {
  const projects = await getProjects()
  // const totalProjects = await getTotalProjects()

  return (
    <>
      <h1>Projetos</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <div>descrição: {project.description}</div>
          <div>githubLink: {project.githubLink}</div>
          <div>imageUrl: {project.imageUrl}</div>
          <div>projectCreation: {project.projectCreation}</div>
          <div>projectName: {project.projectName}</div>
          <div>siteLink: {project.siteLink}</div>
          <div>Techs {project.techs.map((tech) => tech)}</div>
        </div>
      ))}
      {/* <ProjectsPagination
        totalProjects={totalProjects}
        totalItemsPerPage={totalItemsPerPage}
        lastRef={projects[projects.length - 1].projectCreation}
      /> */}
    </>
  )
}
