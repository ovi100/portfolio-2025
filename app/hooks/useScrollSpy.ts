'use client'
import { useEffect, useState } from 'react'

export default function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}