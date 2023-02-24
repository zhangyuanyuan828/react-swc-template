import { NavLink } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-y-auto">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-500">The page you are looking was moved, removed, renamed, or might never exist!</p>
      <NavLink
        to="/"
        className="rounded border-blue-600 bg-blue-600 px-4 py-2 text-white outline-none transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:border-blue-700 focus:bg-blue-700 focus-visible:outline-blue-700"
      >
        Back To Home
      </NavLink>
    </div>
  )
}

export default NotFound
