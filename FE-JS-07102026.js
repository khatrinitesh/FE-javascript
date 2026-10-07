// If you mean interesting built-in browser JavaScript properties/APIs like document.lastModified, here are some useful ones to explore:
// Last modified date of current document
console.log(document.lastModified)

// Current page title
console.log(document.title)

// Current URL
console.log(document.URL)

// Referrer page
console.log(document.referrer)

// Character encoding
console.log(document.characterSet)

// Document ready state
console.log(document.readyState)
// "loading" | "interactive" | "complete"

// Is page currently visible?
console.log(document.visibilityState)
// "visible" | "hidden"

// Is document fullscreen?
console.log(document.fullscreenElement)

// Current domain
console.log(document.domain)

// Number of elements
console.log(document.all.length)

// Number of scripts
console.log(document.scripts.length)

// All images
console.log(document.images)

// All links
console.log(document.links)

// Current focused element
console.log(document.activeElement)

// Browser language
console.log(navigator.language)

// =============================== Some more developer-friendly browser APIs:
// Online/offline status
console.log(navigator.onLine)

// CPU logical cores
console.log(navigator.hardwareConcurrency)

// Approximate device memory (not supported everywhere)
console.log(navigator.deviceMemory)

// User agent
console.log(navigator.userAgent)

// Platform
console.log(navigator.platform)

// Touch support
console.log(navigator.maxTouchPoints)

// Cookies enabled
console.log(navigator.cookieEnabled)


// =============================== for screen / window information 
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.outerWidth)
console.log(window.outerHeight)
console.log(screen.width)
console.log(screen.height)
console.log(screen.availWidth)
console.log(screen.availHeight)
console.log(window.devicePixelRatio)

// =============================== A few especially useful ones:
// Dark/light mode
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Reduced motion preference
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Current scroll position
console.log(window.scrollX, window.scrollY)

// Current URL information
console.log(location.hostname)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)

// Browser history length
console.log(history.length)

// =============================== And some fun developer APIs:
// Performance timing
console.log(performance.now())

// Navigation information
console.log(performance.getEntriesByType('navigation'))

// Storage usage
navigator.storage?.estimate().then(console.log)

// Network information (browser support varies)
console.log(navigator.connection?.effectiveType)
// "4g", "3g", etc.

// Clipboard
navigator.clipboard?.readText()

// Share API
navigator.share?.({
  title: document.title,
  url: location.href,
})

// Detect tab visibility change
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState)
})

console.log(navigator.connection?.effectiveType)
console.log(navigator.connection?.downlink)
console.log(navigator.connection?.saveData)