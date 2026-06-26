import React from 'react'

const S = ({ children, size = 22, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
)

export const IconPlan = (p) => (
  <S {...p}><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 9h18M9 9v12" /></S>
)
export const IconCube = (p) => (
  <S {...p}><path d="M12 2.5 21 7v10l-9 4.5L3 17V7z" /><path d="m3 7 9 4.5L21 7M12 11.5V21.5" /></S>
)
export const IconPlus = (p) => (
  <S {...p}><path d="M12 5v14M5 12h14" /></S>
)
export const IconRoom = (p) => (
  <S {...p}><path d="M3 21V8l9-5 9 5v13" /><path d="M3 21h18M9 21v-6h6v6" /></S>
)
export const IconRotate = (p) => (
  <S {...p}><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v5h-5" /></S>
)
export const IconCopy = (p) => (
  <S {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></S>
)
export const IconTrash = (p) => (
  <S {...p}><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></S>
)
export const IconTune = (p) => (
  <S {...p}><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" /><circle cx="16" cy="6" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="14" cy="18" r="2" /></S>
)
export const IconClose = (p) => (
  <S {...p}><path d="M6 6l12 12M18 6 6 18" /></S>
)
export const IconReset = (p) => (
  <S {...p}><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.3 2.6L3 8" /><path d="M3 4v4h4" /></S>
)
export const IconCenter = (p) => (
  <S {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><circle cx="12" cy="12" r="4" /></S>
)
export const IconLayers = (p) => (
  <S {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></S>
)
