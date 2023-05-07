'use client'

import { TPortfolio } from '@/@types/Portfolio'
import { firestore } from '@/libs/firebase'
import { usePortfolioStore } from '@/store/portfolioStore'
import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore'
import { HTMLAttributes, useCallback, useEffect, useState } from 'react'

interface IProjectsPagination extends HTMLAttributes<HTMLDivElement> {
  totalProjects: number
  totalItemsPerPage: number
  lastRef: string
}

export const ProjectsPagination = ({
  totalProjects,
  totalItemsPerPage,
  lastRef,
  ...props
}: IProjectsPagination) => {
  const [actualPage, setActualPage] = useState(1)
  const [updatedLastRef, setUpdatedLastRef] = useState('')

  const totalPages = Math.ceil(totalProjects / 10)

  const changeLastRef = (newRef: string) => {
    setUpdatedLastRef(newRef)
  }

  const {
    state: { portfolios },
    actions: { addPortfolio },
  } = usePortfolioStore()

  const changeActualPage = () => {
    if (actualPage >= totalPages) return

    setActualPage(actualPage + 1)
  }

  const getProjects = useCallback(async () => {
    const portfolioQuery = query(
      collection(firestore, 'portfolio'),
      orderBy('projectCreation', 'desc'),
      startAfter(updatedLastRef),
      limit(totalItemsPerPage),
    )

    const portfolioDocs = await getDocs(portfolioQuery)
    const portfolios = portfolioDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TPortfolio[]

    changeLastRef(portfolios[portfolios.length - 1].projectCreation)

    addPortfolio(portfolios)
  }, [addPortfolio, totalItemsPerPage, updatedLastRef])

  useEffect(() => {
    if (actualPage === 1) return

    getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage])

  useEffect(() => {
    changeLastRef(lastRef)
  }, [lastRef])

  return (
    <div {...props} className="flex flex-col">
      {portfolios.map((portfolio) => (
        <p key={portfolio.id}>{portfolio.projectName}</p>
      ))}
      <p>{totalPages}</p>
      <p>{actualPage}</p>
      <button onClick={changeActualPage}>Mostrar mais</button>
    </div>
  )
}
