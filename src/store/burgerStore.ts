import { create } from 'zustand'

type TBurgerMenuState = {
  isMenuBurgerOpen: boolean
  selectedMenu: '/' | 'projects' | 'contact'
}

type TBurgerMenuActions = {
  toggleMenuBurger: () => void
}

interface IBurgerMenuStore {
  state: TBurgerMenuState
  actions: TBurgerMenuActions
}

export const useBurgerMenuStore = create<IBurgerMenuStore>(
  (set, get, actions) => ({
    state: {
      isMenuBurgerOpen: false,
      selectedMenu: '/',
    },
    actions: {
      toggleMenuBurger: () => {
        set((prev) => ({
          ...prev,
          state: {
            ...prev.state,
            isMenuBurgerOpen: !prev.state.isMenuBurgerOpen,
          },
        }))
      },
    },
  }),
)
