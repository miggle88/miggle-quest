import styles from './HeroCard.module.css'
import format from 'date-fns/format'
import { Hero, HeroClass } from '@/models/hero'
import { toTitleCase } from '@/utils/strings'
import Conditional from '@/components/layout/Conditional'

export interface HeroCardProps {
  hero: Hero
}

export default function HeroCard({ hero }: HeroCardProps) {
  const isDead = hero.diedAt != null
  const deadClass = isDead ? styles.dead : ''

  return (
    <div className={`${styles.card} ${deadClass}`}>
      <div className={deadClass}>
        <span className={styles.name}>{hero.name}</span>
      </div>
      <div>
        <span>Level </span>
        <span>{`${hero.level} `}</span>
        <span className={isDead ? styles.dead : getClassColor(hero.class)}>
          {toTitleCase(hero.class)}
        </span>
      </div>
      <Conditional show={!isDead}>
        <div>
          <span>{100 - hero.experience}</span>
          <span className={isDead ? styles.dead : styles.experience}>
            {' experience '}
          </span>
          <span>until next level</span>
        </div>
      </Conditional>
      <div>
        <span>Recruited at {format(hero.hiredAt, 'M/d/yyyy')}</span>
      </div>
      <Conditional show={isDead}>
        <div>Died at {format(hero.diedAt ?? new Date(), 'M/d/yyyy')}</div>
      </Conditional>
    </div>
  )
}

function getClassColor(heroClass: HeroClass): string {
  return styles[heroClass.replace(' ', '-').toLowerCase()]
}
