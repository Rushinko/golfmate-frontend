import React from 'react'

type NavLinkIconProps = {
  icon: React.Component
}

export default function NavLinkIcon({icon} : NavLinkIconProps) {
  return (
    <div>
      {icon}
    </div>
  )
}
