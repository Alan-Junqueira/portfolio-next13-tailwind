'use client'

import { HTMLAttributes, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore'

import { ProjectsCard } from './ProjectsCard'

import { firestore } from '@/libs/firebase'

import { usePortfolioStore } from '@/store/portfolioStore'

import { TPortfolio } from '@/@types/Portfolio'

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
  const [scrolled, setScrolled] = useState(false);
  const [actualPage, setActualPage] = useState(1)
  const [updatedLastRef, setUpdatedLastRef] = useState('')

  const showMoreRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    function handleShowMoreClick() {
      console.log('entrou')
      if (!scrolled) {
        return;
      }
      showMoreRef.current?.click();
    }

    const observer = new IntersectionObserver(handleShowMoreClick, {
      rootMargin: '150px',
      threshold: 1.0
    });
    observer.observe(document.querySelector('#show-more-button') as Element);

    return () => {
      observer.disconnect();
    };
  }, [scrolled])

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 150) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div {...props} className="flex flex-col mb-16">
      <div className='grid grid-cols-1 md:grid-cols-2 sm:px-4 md:gap-4'>
        {portfolios.map((portfolio) => (
          <ProjectsCard
            key={portfolio.id}
            project={portfolio}
          />
        ))}
      </div>
      {totalPages !== actualPage && (
        <button id='show-more-button' className='opacity-0 w-fit' ref={showMoreRef} onClick={changeActualPage}>.</button>
      )
      }
    </div >
  )
}
