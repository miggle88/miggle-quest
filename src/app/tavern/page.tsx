import DestinationLayout from '@/components/layout/DestinationLayout'
import HeroRoster from '@/components/heroes/HeroRoster'
import { Hero, HeroClass } from '@/models/hero'

const fakeHeroes: Hero[] = [
  {
    id: '1',
    accountId: '1',
    name: 'Mike',
    level: 1,
    class: HeroClass.Cleric,
    experience: 0,
    hiredAt: new Date(),
  },
  {
    id: '2',
    accountId: '1',
    name: 'Evan',
    level: 1,
    class: HeroClass.Ranger,
    experience: 0,
    hiredAt: new Date(),
  },
  {
    id: '3',
    accountId: '1',
    name: 'Quick',
    level: 2,
    class: HeroClass.Thief,
    experience: 0,
    hiredAt: new Date(),
  },
  {
    id: '4',
    accountId: '1',
    name: 'Steve',
    level: 2,
    class: HeroClass.Wizard,
    experience: 0,
    hiredAt: new Date(),
  },
  {
    id: '5',
    accountId: '1',
    name: 'Stabby',
    level: 2,
    class: HeroClass.Warrior,
    experience: 0,
    hiredAt: new Date(),
  },
  {
    id: '6',
    accountId: '1',
    name: 'Dead',
    level: 2,
    class: HeroClass.Warrior,
    experience: 0,
    hiredAt: new Date(),
    diedAt: new Date(),
  },
]

export default function Tavern() {
  return (
    <DestinationLayout title={'Tavern'} backHref={'/'}>
      <div className={'h-container'}>
        <h1>Roster</h1>
        <HeroRoster heroes={fakeHeroes} />
      </div>
    </DestinationLayout>
  )
}
