'use client'

import styles from './DestinationLayout.module.css'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'
import Conditional from '@/components/layout/Conditional'

export interface DestinationLayoutProps {
  title: string
  backHref?: string
  children?: ReactNode
}

export default function DestinationLayout(props: DestinationLayoutProps) {
  const router = useRouter()

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.gold}>
          <span>0 Gold</span>
        </div>
        <div className={styles.title}>
          <span>{props.title}</span>
        </div>
        <div>
          <Conditional show={!!props.backHref}>
            <Button onClick={() => router.push(props.backHref!)}>Back</Button>
          </Conditional>
        </div>
      </div>
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}
