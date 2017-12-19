import Progression from './Progression'

class Creator {
  constructor(data) {
    this.originalProg = new Progression(data.chords, data.sections, data.plan)
    this.userProg     = new Progression(data.chords, data.sections, data.plan)
  }
}

export default Creator
