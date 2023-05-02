import { create } from 'zustand'

type TBurgerMenuState = {
  isMenuBurgerOpen: boolean
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
