import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop automatically scrolls the window to (0, 0)
 * whenever the route URL (pathname) changes.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return null
}
