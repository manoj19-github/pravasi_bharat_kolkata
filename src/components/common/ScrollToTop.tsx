import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop automatically scrolls to top on route changes,
 * or smoothly scrolls to a hash anchor if provided (e.g., #featured-hotels).
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname, hash])

  return null
}
