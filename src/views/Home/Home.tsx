import reactLogo from '@/assets/react.svg'
import { Button } from '@/components'
import { useStores } from '@/stores'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'

export const Home = observer(function Home() {
  const { appStore } = useStores()
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

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
      <div className="flex gap-4">
        <label>
          <input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />
          <span className="select-none">Disabled</span>
        </label>
        <label>
          <input type="checkbox" checked={loading} onChange={(event) => setLoading(event.target.checked)} />
          <span className="select-none">Loading</span>
        </label>
      </div>
      <div className="p-8 text-center">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="py-1 px-2" rowSpan={2}>
                colorTheme
              </th>
              <th className="py-1 px-2" colSpan={3}>
                size
              </th>
              <th className="py-1 px-2" colSpan={4}>
                variant
              </th>
            </tr>
            <tr>
              <th className="py-1 px-2">small</th>
              <th className="py-1 px-2">normal</th>
              <th className="py-1 px-2">large</th>
              <th className="py-1 px-2">contained</th>
              <th className="py-1 px-2">outlined</th>
              <th className="py-1 px-2">text</th>
              <th className="py-1 px-2">link</th>
            </tr>
          </thead>
          <tbody>
            {(['blue', 'red', 'orange', 'yellow', 'green', 'slate', 'teal', 'sky', 'pink', 'gray'] as const).map((color) => (
              <tr key={color}>
                <td className="py-1 px-2">
                  <Button colorScheme={color} disabled={disabled} loading={loading}>
                    {color}
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} size="small" disabled={disabled} loading={loading} startIcon={<MdSend />}>
                    small
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} size="normal" disabled={disabled} loading={loading} endIcon={<MdSend />}>
                    normal
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} size="large" disabled={disabled} loading={loading}>
                    large
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} disabled={disabled} loading={loading}>
                    contained
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} variant="outlined" disabled={disabled} loading={loading}>
                    outline
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} variant="text" disabled={disabled} loading={loading}>
                    text
                  </Button>
                </td>
                <td className="py-1 px-2">
                  <Button colorScheme={color} variant="link" disabled={disabled} loading={loading}>
                    link
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={() => appStore.increase()}>count is {appStore.count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>true</div>
      <p className="text-gray-400">Click on the Vite and React logos to learn more</p>
    </div>
  )
})

export default Home
