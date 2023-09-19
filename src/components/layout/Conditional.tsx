import { ReactNode } from 'react'

export interface ConditionalProps {
  show: boolean | (() => boolean)
  children: ReactNode
}

export default function Conditional(props: ConditionalProps) {
  const shouldShow =
    typeof props.show === 'function' ? props.show() : props.show

  if (!shouldShow) {
    return null
  }

  return <>{props.children}</>
}
