"use client"

import { useEffect, useRef, useState } from "react"

export default function FadeInSection({ children, delay = 0, className = "" }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const delayClass = delay ? `fade-delay-${delay}` : ""

  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}

