const fs = require('fs');

function hold(btn) { return [ {type: 'text', value: 'Mantener'}, {type: 'button', value: btn} ]; }
function press(btn) { return [ {type: 'button', value: btn} ]; }
function tap(dir) { return [ {type: 'text', value: 'Toque'}, {type: 'direction', value: dir} ]; }
function plus() { return {type: 'text', value: '+'}; }
function text(val) { return {type: 'text', value: val}; }
function stick(name) { return {type: 'stick', value: name}; }
function btn(name) { return {type: 'button', value: name}; }
function dir(val) { return {type: 'direction', value: val}; }

// Helper to assemble
function assemble(...parts) {
  let res = [];
  parts.forEach((p, i) => {
    if (Array.isArray(p)) { res.push(...p); }
    else { res.push(p); }
    if (i < parts.length - 1 && parts[i+1] && parts[i+1].type !== 'direction' && parts[i+1].value !== 'Toque' && p.value !== '+' && parts[i+1].value !== '+') {
      res.push(plus());
    }
  });
  return res;
}

const moves = [
  // --- 1 STAR ---
  {
    id: 'tunel-direccional', name: 'Túnel direccional', stars: 1, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), hold('R1'), plus(), stick('RS'), text('Dirección')),
    animationType: 'nutmeg'
  },
  {
    id: 'dominar-balon', name: 'Dominar el balón (de pie)', stars: 1, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), press('R1'), text('Pulsar')),
    animationType: 'juggle'
  },
  {
    id: 'amago-tiro-izq-abrir', name: 'Amago de tiro hacia la izquierda y abrir', stars: 1, category: 'basic', isNew: true,
    inputs: assemble(hold('L1'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), dir('up-left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'amago-tiro-der-abrir', name: 'Amago de tiro hacia la derecha y abrir', stars: 1, category: 'basic', isNew: true,
    inputs: assemble(hold('L1'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), dir('up-right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'elevar-balon-1', name: 'Elevar el balón', stars: 1, category: 'juggles', isNew: false,
    inputs: assemble(press('R3')),
    animationType: 'juggle'
  },
  {
    id: 'giro-finta-primer-toque', name: 'Giro con finta de primer toque', stars: 1, category: 'basic', isNew: true,
    inputs: assemble(hold('L1'), plus(), hold('R1'), plus(), stick('LS'), dir('down')),
    animationType: 'lateral-shift'
  },
  
  // --- 2 STARS ---
  {
    id: 'finta-adelante-giro', name: 'Finta hacia adelante y giro', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), tap('down'), tap('down')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-cuerpo-der', name: 'Finta del cuerpo - derecha', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), tap('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-cuerpo-izq', name: 'Finta del cuerpo - izquierda', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), tap('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'bicicleta-der', name: 'Bicicleta a la derecha', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-up-right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'bicicleta-izq', name: 'Bicicleta a la izquierda', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-up-left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'bicicleta-inversa-der', name: 'Bicicleta invertida a la derecha', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-right-up')),
    animationType: 'lateral-shift'
  },
  {
    id: 'bicicleta-inversa-izq', name: 'Bicicleta invertida a la izquierda', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-left-up')),
    animationType: 'lateral-shift'
  },
  {
    id: 'rodar-izq', name: 'Rodar el balón a la izquierda', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), hold('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'rodar-der', name: 'Rodar el balón a la derecha', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), hold('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'arrastrar-atras', name: 'Arrastrar atrás (de pie)', stars: 2, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), hold('R1'), plus(), stick('LS'), tap('down')),
    animationType: 'drag-back'
  },

  // --- 3 STARS ---
  {
    id: 'toque-talon', name: 'Toque de talón', stars: 3, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('down')),
    animationType: 'forward-flick'
  },
  {
    id: 'ruleta-der', name: 'Ruleta a la derecha', stars: 3, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-down-right')),
    animationType: 'spin-360'
  },
  {
    id: 'ruleta-izq', name: 'Ruleta a la izquierda', stars: 3, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-down-left')),
    animationType: 'spin-360'
  },
  {
    id: 'finta-izq-ir-der', name: 'Finta a la izquierda e ir a la derecha', stars: 3, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-left-right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-der-ir-izq', name: 'Finta a la derecha e ir a la izquierda', stars: 3, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-right-left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'corte-talon-izq', name: 'Corte de talón a la izquierda (corriendo)', stars: 3, category: 'flicks', isNew: false,
    inputs: assemble(hold('L2'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), hold('left')),
    animationType: 'chop'
  },
  {
    id: 'corte-talon-der', name: 'Corte de talón a la derecha (corriendo)', stars: 3, category: 'flicks', isNew: false,
    inputs: assemble(hold('L2'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), hold('right')),
    animationType: 'chop'
  },
  {
    id: 'fintar-izq-salir-der', name: 'Fintar a la izquierda y salir a la derecha', stars: 3, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-left-right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'fintar-der-salir-izq', name: 'Fintar a la derecha y salir a la izquierda', stars: 3, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-right-left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-de-finta', name: 'Finta de finta', stars: 3, category: 'basic', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), dir('left'), dir('right'), text('o'), dir('right'), dir('left')),
    animationType: 'lateral-shift'
  },

  // --- 4 STARS ---
  {
    id: 'cuauhtemina', name: 'Cuauhtemiña (de pie)', stars: 4, category: 'juggles', isNew: false,
    inputs: assemble(hold('L1'), plus(), press('R3')),
    animationType: 'juggle'
  },
  {
    id: 'rodar-arrastrar-atras', name: 'Rodar y arrastrar atrás', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), tap('up'), tap('left'), text('o'), tap('right')),
    animationType: 'drag-back'
  },
  {
    id: 'arrastrar-atras-giro', name: 'Arrastrar atrás y giro', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), hold('down')),
    animationType: 'drag-back'
  },
  {
    id: 'tuneles-estilo', name: 'Túneles con estilo', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), hold('R1'), plus(), stick('RS'), text('Toque Dirección')),
    animationType: 'nutmeg'
  },
  {
    id: 'talon-a-talon', name: 'Talón a talón', stars: 4, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('down')),
    animationType: 'forward-flick'
  },
  {
    id: 'sombrerito-simple', name: 'Sombrerito simple', stars: 4, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), tap('down'), tap('up')),
    animationType: 'rainbow'
  },
  {
    id: 'giro-izq', name: 'Giro a la izquierda', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), dir('rotate-left')),
    animationType: 'spin-360'
  },
  {
    id: 'giro-der', name: 'Giro a la derecha', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), dir('rotate-right')),
    animationType: 'spin-360'
  },
  {
    id: 'parar-girar-izq', name: 'Parar y girar a la izquierda (corriendo)', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('left')),
    animationType: 'spin-360'
  },
  {
    id: 'parar-girar-der', name: 'Parar y girar a la derecha (corriendo)', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('right')),
    animationType: 'spin-360'
  },
  {
    id: 'rodar-cortar-izq', name: 'Rodar el balón y cortar a la izquierda', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), hold('left'), stick('LS'), hold('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'rodar-cortar-der', name: 'Rodar el balón y cortar a la derecha', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), hold('right'), stick('LS'), hold('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'pase-falso-pos', name: 'Pase falso (en posición)', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('R2'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X')),
    animationType: 'lateral-shift'
  },
  {
    id: 'salida-izq-pase-falso', name: 'Salida por izquierda de pase falso', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('R2'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), dir('up-left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-tres-toques-izq', name: 'Finta de tres toques por la izquierda', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('down'), tap('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-tres-toques-der', name: 'Finta de tres toques por la derecha', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('down'), tap('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'arrastrar-atras-giro-izq', name: 'Arrastrar atrás y giro sobre la izquierda', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), tap('down'), tap('left')),
    animationType: 'drag-back'
  },
  {
    id: 'arrastrar-atras-giro-der', name: 'Arrastrar atrás y giro sobre la derecha', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), tap('down'), tap('right')),
    animationType: 'drag-back'
  },
  {
    id: 'arrastre-talon', name: 'Arrastre a talón', stars: 4, category: 'flicks', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), tap('down'), tap('left'), text('o'), tap('right')),
    animationType: 'behind-leg'
  },
  {
    id: 'toque-talon-ruede', name: 'Toque de talón con ruede de balón', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), tap('up'), tap('down')),
    animationType: 'lateral-shift'
  },
  {
    id: 'rodar-balon-cortar', name: 'Rodar el balón y cortar', stars: 4, category: 'advanced', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), tap('down'), tap('down')),
    animationType: 'lateral-shift'
  },
  {
    id: 'rodar-rapido-balon', name: 'Rodar rápido el balón', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(stick('RS'), hold('down')),
    animationType: 'lateral-shift'
  },
  {
    id: 'cambio-linea-izq', name: 'Cambio de línea por la izquierda', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), hold('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'cambio-linea-der', name: 'Cambio de línea por la derecha', stars: 4, category: 'basic', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), hold('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'ruleta-tres-toques-izq', name: 'Ruleta de tres toques por la izquierda', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('down'), tap('left')),
    animationType: 'spin-360'
  },
  {
    id: 'ruleta-tres-toques-der', name: 'Ruleta de tres toques por la derecha', stars: 4, category: 'spins', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('down'), tap('right')),
    animationType: 'spin-360'
  },

  // --- 5 STARS ---
  {
    id: 'toque-elastica-izq', name: 'Toque elástica a la izquierda', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), dir('rotate-right-left')),
    animationType: 'snap-back'
  },
  {
    id: 'toque-elastica-der', name: 'Toque elástica a la derecha', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), dir('rotate-left-right')),
    animationType: 'snap-back'
  },
  {
    id: 'toque-giro', name: 'Toque con giro', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), tap('up'), tap('right')),
    animationType: 'spin-360'
  },
  {
    id: 'toque-arriba', name: 'Toque por arriba', stars: 5, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), hold('up')),
    animationType: 'forward-flick'
  },
  {
    id: 'tornado-giro', name: 'Tornado con giro', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), tap('up'), tap('left')),
    animationType: 'spin-360'
  },
  {
    id: 'finta-talon', name: 'Finta de talón', stars: 5, category: 'flicks', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), dir('left'), dir('right'), text('o'), dir('right'), dir('left')),
    animationType: 'behind-leg'
  },
  {
    id: 'arcoiris-estilo', name: 'Arcoíris con estilo', stars: 5, category: 'flicks', isNew: false,
    inputs: assemble(hold('L1'), plus(), stick('RS'), tap('down'), tap('up')),
    animationType: 'rainbow'
  },
  {
    id: 'elastica', name: 'Elástica', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-right-left')),
    animationType: 'snap-back'
  },
  {
    id: 'elastica-inversa', name: 'Elástica inversa', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-left-right')),
    animationType: 'snap-back'
  },
  {
    id: 'sombrerito-avanzado', name: 'Sombrerito avanzado', stars: 5, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), tap('down'), hold('up'), tap('up')),
    animationType: 'rainbow'
  },
  {
    id: 'abracadabra', name: 'Abracadabra', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-down-right'), stick('RS'), dir('rotate-right-left')),
    animationType: 'behind-leg'
  },
  {
    id: 'triple-elastico', name: 'Triple elástico', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), dir('rotate-down-right'), stick('RS'), dir('rotate-right-left')),
    animationType: 'snap-back'
  },
  {
    id: 'rodar-elevar-izq', name: 'Rodar el balón y elevarlo a la izq.', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(stick('RS'), hold('left'), tap('up')),
    animationType: 'juggle'
  },
  {
    id: 'rodar-elevar-der', name: 'Rodar el balón y elevarlo a la der.', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(stick('RS'), hold('right'), tap('up')),
    animationType: 'juggle'
  },
  {
    id: 'toque-sombrero-der', name: 'Toque de sombrero a la derecha', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('LS'), dir('right')),
    animationType: 'juggle'
  },
  {
    id: 'alrededor-mundo', name: 'Alrededor del mundo', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), dir('rotate-full')),
    animationType: 'juggle'
  },
  {
    id: 'elastica-aire', name: 'Elástica en el aire', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('right'), tap('left')),
    animationType: 'juggle'
  },
  {
    id: 'elastica-inversa-aerea', name: 'Elástica inversa aérea', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('left'), tap('right')),
    animationType: 'juggle'
  },
  {
    id: 'elevar-balon-5', name: 'Elevar el balón (Dominadas)', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('LS')),
    animationType: 'juggle'
  },
  {
    id: 'toque-pecho', name: 'Toque con el pecho', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('R3'), text('x2')),
    animationType: 'juggle'
  },
  {
    id: 'doble-vuelta-mundo', name: 'Doble vuelta al mundo', stars: 5, category: 'juggles', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), dir('rotate-full'), text('luego'), stick('RS'), tap('up')),
    animationType: 'juggle'
  },
  {
    id: 'giro-toque-talon', name: 'Giro y toque de talón', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), hold('R1'), plus(), stick('RS'), tap('up'), tap('down')),
    animationType: 'behind-leg'
  },
  {
    id: 'toque-sombrero-pie', name: 'Toque de sombrero (de pie)', stars: 5, category: 'flicks', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('up'), tap('down')),
    animationType: 'rainbow'
  },
  {
    id: 'vuelta-giro-izq', name: 'Vuelta y giro a la izquierda', stars: 5, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('left')),
    animationType: 'spin-360'
  },
  {
    id: 'vuelta-giro-der', name: 'Vuelta y giro a la derecha', stars: 5, category: 'spins', isNew: false,
    inputs: assemble(stick('RS'), tap('up'), tap('right')),
    animationType: 'spin-360'
  },
  {
    id: 'finta-rodar-izq-pie', name: 'Finta rodar balón izq. (de pie)', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), hold('left'), text('luego'), stick('RS'), tap('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-rodar-der-pie', name: 'Finta rodar balón der. (de pie)', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(stick('RS'), hold('right'), text('luego'), stick('RS'), tap('left')),
    animationType: 'lateral-shift'
  },
  {
    id: 'ruede-finta-giro', name: 'Ruede de balón con finta de giro', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), stick('RS'), tap('up'), tap('left'), text('o'), tap('right')),
    animationType: 'lateral-shift'
  },
  {
    id: 'finta-rabona', name: 'Finta de rabona (al encarar)', stars: 5, category: 'advanced', isNew: false,
    inputs: assemble(hold('L2'), plus(), press('Square'), text('o'), press('Circle'), text('luego'), press('X'), plus(), stick('LS'), tap('down')),
    animationType: 'behind-leg'
  }
];

const outStr = `import type { SkillMove } from '../types';

export const psToXboxMap: Record<string, string> = {
  'L1': 'LB',
  'L2': 'LT',
  'R1': 'RB',
  'R2': 'RT',
  'R3': 'RS',
  'X': 'A',
  'Square': 'X',
  'Triangle': 'Y',
  'Circle': 'B',
  'RS': 'RS',
  'LS': 'LS',
};

export const categoryIcons: Record<string, string> = {
  basic: '⚡',
  flicks: '🦶',
  spins: '🔄',
  juggles: '🎯',
  advanced: '🔥',
};

export const skillMoves: SkillMove[] = ${JSON.stringify(moves.map(m => {
  return {
    ...m,
    description: {
      es: m.name,
      en: m.name
    },
    inputs: {
      classic: m.inputs,
      alternative: m.inputs
    }
  };
}), null, 2)};
`;

fs.writeFileSync('src/data/skillMoves.ts', outStr);
console.log('Written to src/data/skillMoves.ts');
