import MuJS from 'mujs'
import Progression from './classes/Progression'
import song from './song'

const MODES = MuJS.Dict.modes()
console.log(MODES);

console.log(song);

let prog = new Progression(song.chords, song.sections, song.plan)
console.log(prog);

prog.setChord(MODES[4])
prog.duplicateSection('A')

const a = prog.sections['A']
const a1 = prog.sections['A1']
a1[0].quarters = -1
prog.duplicateSection('A1')
