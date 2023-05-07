import { TPortfolio } from '@/@types/Portfolio'
import { firestore } from '@/libs/firebase'
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'

const getProjects = async () => {
  const portfolioQuery = query(
    collection(firestore, 'portfolio'),
    orderBy('projectCreation', 'desc'),
    limit(20),
  )

  const portfolioDocs = await getDocs(portfolioQuery)
  const portfolios = portfolioDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TPortfolio[]

  return portfolios
  // console.log(portfolios)
}

export default async function Projects() {
  const projects: TPortfolio[] = await getProjects()

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
    </>
  )
}
