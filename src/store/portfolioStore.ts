import { TPortfolio } from '@/@types/Portfolio'
import { create } from 'zustand'

type TPortfolioState = {
  portfolios: TPortfolio[]
}

type TPortfolioActions = {
  addPortfolio: (portfolios: TPortfolio[]) => void
}

interface IPortfolioStore {
  state: TPortfolioState
  actions: TPortfolioActions
}

export const usePortfolioStore = create<IPortfolioStore>(
  (set, get, actions) => ({
    state: {
      portfolios: [],
    },
    actions: {
      addPortfolio: (portfolios: TPortfolio[]) => {
        set((prev) => ({
          ...prev,
          state: {
            ...prev.state,
            portfolios: [...prev.state.portfolios, ...portfolios],
          },
        }))
      },
    },
  }),
)
