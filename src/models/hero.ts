export enum HeroClass {
  Warrior = 'WARRIOR',
  Thief = 'THIEF',
  Wizard = 'WIZARD',
  Cleric = 'CLERIC',
  Ranger = 'RANGER'

}

export type Hero = {
  id: string
  accountId: string
  name: string
  level: number
  class: HeroClass
  experience: number
  hiredAt: Date
  diedAt?: Date
}
