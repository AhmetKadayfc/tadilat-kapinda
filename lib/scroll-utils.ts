/**
 * Smooth scroll utility using framer-motion principles
 */

export const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId)
  
  if (element) {
    const headerOffset = 80 // Header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  
  // Extract the hash from href
  const targetId = href.replace('#', '')
  
  if (targetId) {
    smoothScrollTo(targetId)
    // Update URL without scrolling
    window.history.pushState(null, '', href)
  } else {
    // If href is just "#", scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
