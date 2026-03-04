import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return scrollY
}
