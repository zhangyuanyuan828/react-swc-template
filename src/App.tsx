import { observer } from 'mobx-react-lite'
import reactLogo from './assets/react.svg'
import { useStores } from './stores'

export const App = observer(function App() {
  const { appStore } = useStores()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <a className="outline-none focus-visible:drop-shadow-[0_0_2em_#646cffaa]" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="m-6 h-24 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a className="outline-none focus-visible:drop-shadow-[0_0_2em_#61dafbaa]" href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="m-6 h-24 animate-[spin_infinite_20s_linear] will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-4 text-5xl leading-tight">Vite + React</h1>
      <div className="p-8 text-center">
        <button
          type="button"
          className="rounded border-blue-500 bg-blue-500 px-4 py-2 text-white outline-none transition-colors duration-300 hover:border-blue-400 hover:bg-blue-400 focus:border-blue-600 focus:bg-blue-600 focus-visible:outline-blue-600"
          onClick={() => appStore.increase()}>
          count is {appStore.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">Click on the Vite and React logos to learn more</p>
    </div>
  )
})

export default App
