'use client'

import { useRouter } from 'next/navigation'
import DestinationLayout from '@/components/layout/DestinationLayout'
import Button from '@/components/common/Button'


export default function Town() {
  const router = useRouter()

  return (
    <DestinationLayout title={'Miggleton'}>
      <div>
        <h1>Welcome to Town</h1>
        <Button onClick={() => router.push('/tavern')}>Tavern</Button>
      </div>
    </DestinationLayout>

  )
}
