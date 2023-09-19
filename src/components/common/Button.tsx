'use client'
import styles from './Button.module.css'
import { ReactNode } from 'react'

export interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={styles.button}
      disabled={props.disabled}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  )
}
