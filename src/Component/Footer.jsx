import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-6 text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer