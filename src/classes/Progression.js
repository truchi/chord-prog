import MuJS from 'mujs'

const arr2intvs = (arr) => MuJS.utils.arr2items(MuJS.Interval, arr)

class Progression {
  constructor (chords, sections, plan) {
    this.chords   = chords
    this.sections = this._normalize(sections, 'chord'  )
    this.plan     = this._normalize(plan    , 'section')
  }

  setChord(chord) {
    const name        = `${chord.root.name} ${chord.toString()}`
    this.chords[name] = name

    return this
  }

  duplicateSection(name) {
    const section = this.sections[name]

    let [ful, str, int] = /([a-z]*)([0-9]*)/gi.exec(name)
    int = int || 0

    this.sections[str + ++int] = section.map(chord => Object.assign({}, chord))

    return this
  }

  iterator() {
    return this[Symbol.iterator]()
  }

  [Symbol.iterator]() {
    let       done = false
    let  planIndex = 0
    let chordIndex = 0

    return {
      next: () => {
        if (done) return { done: true }

        // Section
        let section = this.plan[planIndex]
        section     = this.sections[section]
        // Chord
        let chord = section[chordIndex]
        chord = this.chords[chord]
        let [root, ...intvs] = chord.split(' ')
        root  = new MuJS.Note(root)
        intvs = arr2intvs(intvs)
        chord = new MuJS.Mode(root, intvs)

        // Update indexes
        ++chordIndex
        if (chordIndex  >= section.length  ) ++planIndex && (chordIndex  = 0)
        if (planIndex   >= this.plan.length) done = true

        return { value: chord, done: false }
      }
    }
  }

  _normalize(arr, key) {
    let ret

    if (Array.isArray(arr)) {
      ret = []

      arr.forEach(part => {
        const l = part.repeat || 1

        for(let i = 0; i < l; ++i) ret.push(part[key])
      })
    } else {
      ret = {}

      for (let name in arr) {
        ret[name] = this._normalize(arr[name], key)
      }
    }

    return ret
  }
}

export default Progression
