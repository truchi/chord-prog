import MuJS from 'mujs'

const arr2intvs = (arr) => MuJS.utils.arr2items(MuJS.Interval, arr)

class Progression {
  constructor (chords, sections, plan) {
    this.chords   = chords
    this.sections = sections
    this.plan     = this._normalizePlan(plan)
  }

  iterator() {
    return this[Symbol.iterator]()
  }

  [Symbol.iterator]() {
    let        done = false
    let   planIndex = 0
    let  chordIndex = 0

    return {
      next: () => {
        if (done) return { done: true }

        // Section
        let section = this.plan[planIndex]
        section     = this.sections[section]
        // Chord
        let { chord, quarters } = section[chordIndex]
        chord = this.chords[chord]
        let [root, ...intvs] = chord.split(' ')
        root  = new MuJS.Note(root)
        intvs = arr2intvs(intvs)
        chord = new MuJS.Mode(root, intvs)
        // Value
        let value = { chord, quarters }

        // Update indexes
        ++chordIndex
        if (chordIndex  >= section.length  ) ++planIndex && (chordIndex  = 0)
        if (planIndex   >= this.plan.length) done = true

        return { value, done: false }
      }
    }
  }

  _normalizePlan(plan) {
    let ret = []

    plan.forEach(part => {
      const l = part.repeat || 1

      for(let i = 0; i < l; ++i) ret.push(part.section)
    })

    return ret
  }
}

export default Progression
