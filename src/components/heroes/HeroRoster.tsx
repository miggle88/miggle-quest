import styles from './HeroRoster.module.css'
import { Hero } from '@/models/hero'
import HeroCard from '@/components/heroes/HeroCard'

export interface HeroRosterProps {
  heroes: Hero[]
}

export default function HeroRoster({ heroes }: HeroRosterProps) {
  return (
    <div className={styles.grid}>
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero}></HeroCard>
      })}
    </div>
  )
}
