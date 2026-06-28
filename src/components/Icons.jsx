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
export const IconDoor = (p) => (
  <S {...p}><path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" /><path d="M14 12h.01" /></S>
)
export const IconWalk = (p) => (
  <S {...p}><circle cx="13" cy="4" r="1.6" /><path d="M11 21l2-6-3-2 1-5 3 2 2 2" /><path d="M10 13l-2 8M14 15l2 6" /></S>
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
export const IconUndo = (p) => (
  <S {...p}><path d="M9 14 4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 0 10h-3" /></S>
)
export const IconRedo = (p) => (
  <S {...p}><path d="m15 14 5-5-5-5" /><path d="M20 9H9a5 5 0 0 0 0 10h3" /></S>
)
export const IconShare = (p) => (
  <S {...p}><path d="M12 15V3" /><path d="m8 7 4-4 4 4" /><path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" /></S>
)
export const IconSun = (p) => (
  <S {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></S>
)
export const IconCursor = (p) => (
  <S {...p}><path d="M5 3l6.5 16 2.2-6.3L20 10.5 5 3Z" /></S>
)
export const IconSquare = (p) => (
  <S {...p}><rect x="4" y="4" width="16" height="16" rx="2" /></S>
)
export const IconWall = (p) => (
  <S {...p}><path d="M3 6h18M3 12h18M3 18h18M9 6v6M15 12v6M9 18v3M15 3v3" /></S>
)
export const IconHeight = (p) => (
  <S {...p}><path d="M12 3v18M8 6l4-3 4 3M8 18l4 3 4-3" /></S>
)
export const IconSide = (p) => (
  <S {...p}><path d="M3 20h18" /><rect x="6" y="4" width="7" height="16" rx="1" /><path d="M13 9h5v11" /></S>
)
export const IconNew = (p) => (
  <S {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M12 11v6M9 14h6" /></S>
)
export const IconPen = (p) => (
  <S {...p}><path d="M12 19l7-7-4-4-7 7v4z" /><path d="M14 6l4 4M5 21l3-1" /></S>
)
export const IconCheck = (p) => (
  <S {...p}><path d="M4 12l5 5L20 6" /></S>
)
