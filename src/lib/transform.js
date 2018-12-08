/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import text from "./text";
import UniqArray from "./uniqarray";

export default word => {
  const list = new UniqArray();
  const v = verbs[word];
  if (v) {
    list.push(v);
  }
  const n = nouns[word];
  if (n) {
    list.push(n);
  }
  const otherForms = text.tryToReplaceTrailingStrings(word, replaceTrailingRules);
  list.merge(otherForms);
  return list.toArray();
};

const replaceTrailingRules = [
  [
    { search: "nned", new: "n" },
    { search: "tted", new: "t" },
    { search: "dded", new: "d" },
    { search: "gged", new: "g" },
    { search: "pped", new: "p" },
    { search: "mmed", new: "m" },
    { search: "bbed", new: "b" },
    { search: "rred", new: "r" },
    { search: "zzed", new: "z" },
    { search: "ied", new: "y" }
  ],
  [
    { search: "nning", new: "n" },
    { search: "tting", new: "t" },
    { search: "dding", new: "d" },
    { search: "gging", new: "g" },
    { search: "pping", new: "p" },
    { search: "mming", new: "m" },
    { search: "bbing", new: "b" },
    { search: "rring", new: "r" },
    { search: "lling", new: "l" },
    { search: "zzing", new: "z" },
    { search: "ing", new: "" }
  ],
  [{ search: "ying", new: "ie" }],
  [{ search: "ing", new: "e" }],
  [{ search: "ed", new: "" }],
  [{ search: "ed", new: "e" }],
  [{ search: "ies", new: "y" }],
  [{ search: "ier", new: "y" }],
  [{ search: "ves", new: "fe" }],
  [{ search: "ves", new: "f" }],
  [{ search: "zzes", new: "z" }],
  [{ search: "es", new: "" }],
  [{ search: "s", new: "" }],
  [{ search: "men", new: "man" }]
];

// This data is based on ejdic-hand
const verbs = {
  abode: "abide",
  alit: "alight",
  arcked: "arc",
  arisen: "arise",
  arose: "arise",
  ate: "eat",
  awoke: "awake",
  bade: "bid",
  beaten: "beat",
  became: "become",
  been: "be",
  began: "begin",
  begot: "beget",
  begotten: "beget",
  begun: "begin",
  beheld: "behold",
  bent: "bend",
  bereft: "bereave",
  besought: "beseech",
  bespoke: "bespeak",
  bethought: "bethink",
  betook: "betake",
  bidden: "bid",
  bit: "bit",
  bitten: "bite",
  bled: "bleed",
  blent: "blend",
  blest: "bless",
  blew: "blow",
  blown: "blow",
  bode: "bide",
  bore: "bear",
  borne: "bear",
  bought: "buy",
  bound: "bind",
  bred: "breed",
  broke: "break",
  broken: "break",
  brought: "bring",
  built: "build",
  burnt: "burn",
  came: "come",
  caught: "catch",
  chose: "choose",
  chosen: "choose",
  clave: "cleave",
  cleft: "cleave",
  clove: "cleave",
  cloven: "cleave",
  clung: "cling",
  could: "con",
  crept: "creep",
  crew: "crow",
  cried: "cry",
  dealt: "deal",
  did: "do",
  done: "do",
  dove: "dive",
  drank: "drink",
  drawn: "draw",
  dreamt: "dream",
  drew: "draw",
  dried: "dry",
  driven: "drive",
  drove: "drive",
  drunk: "drink",
  dug: "dig",
  durst: "dare",
  dwelt: "dwell",
  eaten: "eat",
  fallen: "fall",
  fed: "feed",
  fell: "fall",
  felt: "feel",
  fled: "flee",
  flew: "fly",
  flied: "fly",
  flown: "fly",
  flung: "fling",
  forbad: "forbid",
  forbade: "forbid",
  forbidden: "forbid",
  forbore: "forbear",
  forborne: "forbear",
  foregone: "forego",
  foretold: "foretell",
  forgave: "forgive",
  forgiven: "forgive",
  forgot: "forget",
  forgotten: "forget",
  forwent: "forgo",
  fought: "fight",
  found: "find",
  fried: "fry",
  froze: "freeze",
  frozen: "freeze",
  gave: "give",
  gilt: "gild",
  girt: "gird",
  given: "give",
  gone: "go",
  got: "get",
  gotten: "get",
  graven: "graver",
  grew: "grow",
  ground: "grind",
  grown: "grow",
  had: "have",
  heard: "hear",
  held: "hold",
  hewn: "hew",
  hid: "hide",
  hove: "heave",
  hung: "hang",
  inlaid: "inlay",
  kept: "keep",
  knelt: "kneel",
  knew: "know",
  known: "know",
  laden: "lade",
  laid: "lay",
  lain: "lie",
  lay: "lie",
  leant: "lean",
  leapt: "leap",
  learnt: "learn",
  left: "leave",
  lent: "lend",
  lit: "light",
  lost: "lose",
  made: "make",
  meant: "mean",
  met: "meet",
  methought: "methinks",
  might: "may",
  misled: "mislead",
  mistaken: "mistake",
  mistook: "mistake",
  misunderstood: "misunderstand",
  mown: "mow",
  outdid: "outdo",
  outdone: "outdo",
  outgone: "outgo",
  outgrew: "outgrow",
  outgrown: "outgrow",
  outran: "outrun",
  outrode: "outride",
  outsold: "outsell",
  outwent: "outgo",
  overate: "ocereat",
  overbore: "overbear",
  overborne: "overbear",
  overcame: "overcome",
  overdone: "overdo",
  overdrew: "overdraw",
  overflew: "overfly",
  overflown: "overfly",
  overhung: "overhang",
  overran: "overrun",
  overshot: "overshoot",
  overtaken: "overtake",
  overtook: "overtake",
  paid: "pay",
  partaken: "partake",
  partook: "partake",
  pent: "pen",
  pled: "plead",
  prepaid: "prepay",
  proven: "prove",
  ran: "run",
  rang: "ring",
  read: "read",
  remade: "remake",
  rent: "rent",
  ridden: "ride",
  risen: "rise",
  rode: "ride",
  rose: "rise",
  rove: "reeve",
  rung: "ring",
  sang: "sing",
  sank: "sink",
  sat: "sit",
  saw: "see",
  sawn: "saw",
  seen: "see",
  sent: "send",
  sewn: "sew",
  shaken: "shake",
  shaven: "shave",
  shod: "shoe",
  shone: "shine",
  shook: "shake",
  shorn: "shear",
  shot: "shoot",
  should: "shall",
  shown: "show",
  shrank: "shrink",
  shriven: "shrive",
  shrove: "shrive",
  shrunk: "shrink",
  shrunken: "shrink",
  slain: "slay",
  slept: "sleep",
  slew: "slay",
  slid: "slide",
  slung: "sling",
  slunk: "slink",
  smelt: "smell",
  smitten: "smite",
  smote: "smite",
  snuck: "sneak",
  sold: "sell",
  sought: "seek",
  sown: "sow",
  spake: "speak",
  spat: "spit",
  sped: "speed",
  spelt: "spell",
  spent: "spend",
  spilt: "spill",
  spoilt: "spoil",
  spoke: "speak",
  spoken: "speak",
  sprang: "spring",
  sprung: "spring",
  spun: "spin",
  stank: "stink",
  stole: "steal",
  stolen: "steal",
  stood: "stand",
  stove: "stave",
  strewn: "strew",
  stricken: "strike",
  stridden: "stride",
  striven: "strive",
  strode: "stride",
  strove: "strive",
  struck: "strike",
  strung: "string",
  stuck: "stick",
  stung: "sting",
  stunk: "stink",
  sung: "sing",
  sunk: "sink",
  sunken: "sink",
  swam: "swim",
  swept: "sweep",
  swollen: "swell",
  swore: "swear",
  sworn: "swear",
  swum: "swim",
  swung: "swing",
  taken: "take",
  taught: "teach",
  thought: "think",
  threw: "throw",
  throve: "thrive",
  thrown: "throw",
  told: "tell",
  took: "take",
  tore: "tear",
  torn: "tear",
  tried: "try",
  trod: "tread",
  trodden: "tread",
  unbent: "unbend",
  unbound: "unbind",
  unclad: "unclothe",
  undergone: "undergo",
  undershot: "undershoot",
  understood: "understand",
  undertook: "undertake",
  underwent: "undergo",
  undone: "undo",
  unsaid: "unsay",
  unstrung: "unstring",
  unwound: "unwind",
  upheld: "uphold",
  wend: "go",
  went: "go",
  wept: "weep",
  whipt: "whip",
  wist: "wit",
  withdrawn: "withdraw",
  withdrew: "withdraw",
  woke: "wake",
  woken: "wake",
  won: "win",
  wore: "wear",
  worn: "wear",
  would: "will",
  wound: "wind",
  wove: "weave",
  woven: "weave",
  wrapt: "wrap",
  writ: "write",
  written: "write",
  wrote: "write",
  wrought: "work",
  wrung: "wring"
};

const nouns = {
  abaci: "abacus",
  addenda: "addendum",
  alumnae: "alumna",
  alumni: "alumnus",
  analyses: "analysis",
  antennae: "antenna",
  apices: "apex",
  appendices: "appendix",
  automata: "automaton",
  axes: "axis",
  bases: "basis",
  beaux: "beau",
  beeves: "beef",
  bronchi: "bronchus",
  bureaux: "bureau",
  busses: "bus",
  cacti: "cactus",
  calves: "calf",
  calyces: "calyx",
  cantharides: "cantharis",
  cherubim: "cherub",
  children: "child",
  cola: "colon",
  corpora: "corpus",
  crises: "crisis",
  criteria: "criterion",
  diagnoses: "diagnosis",
  dicta: "dictum",
  elves: "elf",
  errata: "erratum",
  feet: "foot",
  flagella: "flagellum",
  foci: "focus",
  fora: "forum",
  formulae: "formula",
  frusta: "frustum",
  fungi: "fungus",
  geese: "goose",
  genera: "genus",
  genii: "genie",
  genii: "genius, genie",
  gymnasia: "gymnasium",
  halfpence: "halfpenny",
  halves: "half",
  hooves: "hoof",
  hypotheses: "hypothesis",
  indices: "index",
  jinn: "jinni",
  knives: "knife",
  labia: "labium",
  leaves: "leaf",
  lei: "leu",
  lice: "louse",
  lives: "life",
  loaves: "loaf",
  loci: "locus",
  maria: "mare",
  matrices: "matrix",
  maxima: "maximum",
  media: "medium",
  memoranda: "memorandum",
  men: "man",
  mesdames: "madame",
  mesdemoiselles: "mademoiselle",
  messieurs: "monsieur",
  mice: "mouse",
  micra: "micron",
  minima: "minimum",
  nimbi: "nimbus",
  nuclei: "nucleus",
  oases: "oasis",
  ova: "ovum",
  oxen: "ox",
  parentheses: "parenthesis",
  pease: "pea",
  pelves: "pelvis",
  pence: "penny",
  phenomena: "phenomenon",
  pix: "pic",
  plena: "plenum",
  quanta: "quantum",
  radii: "radius",
  sancta: "sanctum",
  selves: "self",
  sera: "serum",
  seraphim: "seraph",
  sheaves: "sheaf",
  shelves: "shelf",
  sox: "sock",
  spectra: "spectrum",
  staves: "staff",
  stimuli: "stimulus",
  stomata: "stoma",
  strata: "stratum",
  strati: "stratus",
  styli: "stylus",
  syllabi: "syllabus",
  syntheses: "synthesis",
  tableaux: "tableau",
  tali: "talus",
  teeth: "tooth",
  termini: "terminus",
  testes: "testis",
  theses: "thesis",
  thieves: "thief",
  tympana: "tympanum",
  ultimata: "ultimatum",
  vortices: "vortex",
  wharves: "wharf",
  wives: "wife",
  wolves: "wolf",
  women: "woman",
  yourselves: "yourself",
  Messeigneurs: "Monseigneur"
};
