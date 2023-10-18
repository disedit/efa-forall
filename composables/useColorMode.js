export const useColorMode = () => {
  const colors = {
    dark: '#000',
    default: '#E9D5CA',
    primary: '#652B80'
  }

  const setDark = () => {
    document.documentElement.classList.add('dark')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.dark)
  }

  const unsetDark = () => {
    document.documentElement.classList.remove('dark')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.default)
  }

  const setMenuOpen = () => {
    document.documentElement.classList.add('menu-open')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.primary)
  }

  const unsetMenuOpen = () => {
    document.documentElement.classList.remove('menu-open')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.default)
  }

  return {
    setDark,
    unsetDark,
    setMenuOpen,
    unsetMenuOpen
  }
}