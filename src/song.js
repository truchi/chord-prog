export default {
  chords  : { A7: 'A 1 3 5 ♭7', D7: 'D 1 3 5 ♭7', E7: 'E 1 3 5 ♭7' }
, sections: {
    A: [
      { chord: 'A7', repeat: 16 }
    , { chord: 'D7', repeat:  8 }
    , { chord: 'A7', repeat:  8 }
    , { chord: 'E7', repeat:  4 }
    , { chord: 'D7', repeat:  4 }
    , { chord: 'A7', repeat:  4 }
    , { chord: 'E7', repeat:  4 }
    ]
  , B: [
      { chord: 'A7', repeat: 16 }
    , { chord: 'D7', repeat:  8 }
    , { chord: 'A7', repeat:  8 }
    , { chord: 'E7', repeat:  4 }
    , { chord: 'D7', repeat:  4 }
    , { chord: 'A7', repeat:  4 }
    , { chord: 'E7', repeat:  4 }
    ]
  }
, plan: [
    {
      section: 'A'
    , repeat : 4
    }
  , {
      section: 'B'
    , repeat : 4
    }
  ]
}
