import { createContext, useContext } from 'react'
import { AppStore } from './app.store'

export class RootStore {
  appStore: AppStore

  constructor() {
    this.appStore = new AppStore(this)
  }
}

export const rootStore = new RootStore()

if (import.meta.env.DEV) {
  Object.assign(window, { rootStore })
}

export const RootStoreContext = createContext(rootStore)

export const useStores = () => useContext(RootStoreContext)
