interface Props {
  serviceId: string
  className?: string
}

const shared = (className: string) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
})

export default function ServiceIcon({ serviceId, className = 'w-7 h-7' }: Props) {
  switch (serviceId) {
    case 'oil-change':
      return (
        <svg {...shared(className)}>
          {/* oil drop */}
          <path d="M12 3c0 0-5.5 6.5-5.5 11a5.5 5.5 0 0 0 11 0C17.5 9.5 12 3 12 3z" />
          {/* shine highlight */}
          <path d="M9.5 15a2.8 2.8 0 0 0 2.5 2" />
        </svg>
      )

    case 'brake-service':
      return (
        <svg {...shared(className)}>
          {/* outer rotor ring */}
          <circle cx="12" cy="12" r="9" />
          {/* center hub */}
          <circle cx="12" cy="12" r="4" />
          {/* ventilation holes (6 evenly spaced) */}
          <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
          <circle cx="17.6" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="17.6" cy="16" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
          <circle cx="6.4" cy="16" r="1" fill="currentColor" stroke="none" />
          <circle cx="6.4" cy="8" r="1" fill="currentColor" stroke="none" />
        </svg>
      )

    case 'tire-rotation':
      return (
        <svg {...shared(className)}>
          {/* tire/outer rim */}
          <circle cx="12" cy="12" r="9" />
          {/* hub */}
          <circle cx="12" cy="12" r="3.5" />
          {/* 4 spokes */}
          <line x1="12" y1="8.5" x2="12" y2="3" />
          <line x1="15.5" y1="12" x2="21" y2="12" />
          <line x1="12" y1="15.5" x2="12" y2="21" />
          <line x1="8.5" y1="12" x2="3" y2="12" />
        </svg>
      )

    case 'battery':
      return (
        <svg {...shared(className)}>
          {/* battery body */}
          <rect x="2" y="8" width="17" height="10" rx="1.5" />
          {/* positive terminal nub */}
          <path d="M19 11.5h2v3h-2" />
          {/* + symbol */}
          <path d="M7 13h3M8.5 11.5v3" />
          {/* - symbol */}
          <path d="M13.5 13h3" />
        </svg>
      )

    case 'diagnostic':
      return (
        <svg {...shared(className)}>
          {/* laptop/monitor screen */}
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M3 16h18M12 16v3M9 19h6" />
          {/* car icon inside screen */}
          <path d="M9 11h6M9.5 11l1-2h3l1 2" />
          <circle cx="10" cy="12.3" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12.3" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )

    default:
      return null
  }
}
