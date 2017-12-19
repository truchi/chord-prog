import MuJS from 'mujs'
import Progression from './classes/Progression'
import song from './song'

console.log(song);
let prog = new Progression(song.chords, song.sections, song.plan)

console.log(prog);
console.log(prog.iterator());
for (const val of prog) {
  let chord = val.chord
  let quarters = val.quarters
  console.log(chord.root.name + ' ' + chord.toString() + ' ' + quarters);
}
