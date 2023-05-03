import { create } from 'zustand'

type TDashboardMenu =
  | 'portfolio'
  | 'certificate'
  | 'techStack'
  | 'idioms'
  | 'residence'
  | 'experience'
  | 'social'
  | 'texts'

type TDashboardState = {
  openedMenu: TDashboardMenu
}

type TDashboardActions = {
  changeOpenedMenu: (menu: TDashboardMenu) => void
}

interface IDashboardStore {
  state: TDashboardState
  actions: TDashboardActions
}

export const useDashboardStore = create<IDashboardStore>(
  (set, get, actions) => ({
    state: {
      openedMenu: 'portfolio',
    },
    actions: {
      changeOpenedMenu: (menu: TDashboardMenu) => {
        set((prev) => ({
          ...prev,
          state: {
            ...prev.state,
            openedMenu: menu,
          },
        }))
      },
    },
  }),
)
