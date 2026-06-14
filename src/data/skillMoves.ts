import type { SkillMove } from '../types';

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
  meta: '👑',
};

export const skillMoves: SkillMove[] = [
  {
    "id": "tunel-direccional",
    "name": "Túnel direccional",
    "stars": 1,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Dirección"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Dirección"
        }
      ]
    },
    "animationType": "nutmeg",
    "description": {
      "es": "Túnel direccional",
      "en": "Túnel direccional"
    }
  },
  {
    "id": "dominar-balon",
    "name": "Dominar el balón (de pie)",
    "stars": 1,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Pulsar"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Pulsar"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Dominar el balón (de pie)",
      "en": "Dominar el balón (de pie)"
    }
  },
  {
    "id": "amago-tiro-izq-abrir",
    "name": "Amago de tiro hacia la izquierda y abrir",
    "stars": 1,
    "category": "basic",
    "isNew": true,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Amago de tiro hacia la izquierda y abrir",
      "en": "Amago de tiro hacia la izquierda y abrir"
    }
  },
  {
    "id": "amago-tiro-der-abrir",
    "name": "Amago de tiro hacia la derecha y abrir",
    "stars": 1,
    "category": "basic",
    "isNew": true,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Amago de tiro hacia la derecha y abrir",
      "en": "Amago de tiro hacia la derecha y abrir"
    }
  },
  {
    "id": "elevar-balon-1",
    "name": "Elevar el balón",
    "stars": 1,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "button",
          "value": "R3"
        }
      ],
      "alternative": [
        {
          "type": "button",
          "value": "R3"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Elevar el balón",
      "en": "Elevar el balón"
    }
  },
  {
    "id": "giro-finta-primer-toque",
    "name": "Giro con finta de primer toque",
    "stars": 1,
    "category": "basic",
    "isNew": true,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Giro con finta de primer toque",
      "en": "Giro con finta de primer toque"
    }
  },
  {
    "id": "finta-adelante-giro",
    "name": "Finta hacia adelante y giro",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta hacia adelante y giro",
      "en": "Finta hacia adelante y giro"
    }
  },
  {
    "id": "finta-cuerpo-der",
    "name": "Finta del cuerpo - derecha",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta del cuerpo - derecha",
      "en": "Finta del cuerpo - derecha"
    }
  },
  {
    "id": "finta-cuerpo-izq",
    "name": "Finta del cuerpo - izquierda",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta del cuerpo - izquierda",
      "en": "Finta del cuerpo - izquierda"
    }
  },
  {
    "id": "bicicleta-der",
    "name": "Bicicleta a la derecha",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-up-right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-up-right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Bicicleta a la derecha",
      "en": "Bicicleta a la derecha"
    }
  },
  {
    "id": "bicicleta-izq",
    "name": "Bicicleta a la izquierda",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-up-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-up-left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Bicicleta a la izquierda",
      "en": "Bicicleta a la izquierda"
    }
  },
  {
    "id": "bicicleta-inversa-der",
    "name": "Bicicleta invertida a la derecha",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-up"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Bicicleta invertida a la derecha",
      "en": "Bicicleta invertida a la derecha"
    }
  },
  {
    "id": "bicicleta-inversa-izq",
    "name": "Bicicleta invertida a la izquierda",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-up"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Bicicleta invertida a la izquierda",
      "en": "Bicicleta invertida a la izquierda"
    }
  },
  {
    "id": "rodar-izq",
    "name": "Rodar el balón a la izquierda",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar el balón a la izquierda",
      "en": "Rodar el balón a la izquierda"
    }
  },
  {
    "id": "rodar-der",
    "name": "Rodar el balón a la derecha",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar el balón a la derecha",
      "en": "Rodar el balón a la derecha"
    }
  },
  {
    "id": "arrastrar-atras",
    "name": "Arrastrar atrás (de pie)",
    "stars": 2,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "drag-back",
    "description": {
      "es": "Arrastrar atrás (de pie)",
      "en": "Arrastrar atrás (de pie)"
    }
  },
  {
    "id": "toque-talon",
    "name": "Toque de talón",
    "stars": 3,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "forward-flick",
    "description": {
      "es": "Toque de talón",
      "en": "Toque de talón"
    }
  },
  {
    "id": "ruleta-der",
    "name": "Ruleta a la derecha",
    "stars": 3,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Ruleta a la derecha",
      "en": "Ruleta a la derecha"
    }
  },
  {
    "id": "ruleta-izq",
    "name": "Ruleta a la izquierda",
    "stars": 3,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Ruleta a la izquierda",
      "en": "Ruleta a la izquierda"
    }
  },
  {
    "id": "finta-izq-ir-der",
    "name": "Finta a la izquierda e ir a la derecha",
    "stars": 3,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta a la izquierda e ir a la derecha",
      "en": "Finta a la izquierda e ir a la derecha"
    }
  },
  {
    "id": "finta-der-ir-izq",
    "name": "Finta a la derecha e ir a la izquierda",
    "stars": 3,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta a la derecha e ir a la izquierda",
      "en": "Finta a la derecha e ir a la izquierda"
    }
  },
  {
    "id": "corte-talon-izq",
    "name": "Corte de talón a la izquierda (corriendo)",
    "stars": 3,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ]
    },
    "animationType": "chop",
    "description": {
      "es": "Corte de talón a la izquierda (corriendo)",
      "en": "Corte de talón a la izquierda (corriendo)"
    }
  },
  {
    "id": "corte-talon-der",
    "name": "Corte de talón a la derecha (corriendo)",
    "stars": 3,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ]
    },
    "animationType": "chop",
    "description": {
      "es": "Corte de talón a la derecha (corriendo)",
      "en": "Corte de talón a la derecha (corriendo)"
    }
  },
  {
    "id": "fintar-izq-salir-der",
    "name": "Fintar a la izquierda y salir a la derecha",
    "stars": 3,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Fintar a la izquierda y salir a la derecha",
      "en": "Fintar a la izquierda y salir a la derecha"
    }
  },
  {
    "id": "fintar-der-salir-izq",
    "name": "Fintar a la derecha y salir a la izquierda",
    "stars": 3,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Fintar a la derecha y salir a la izquierda",
      "en": "Fintar a la derecha y salir a la izquierda"
    }
  },
  {
    "id": "finta-de-finta",
    "name": "Finta de finta",
    "stars": 3,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta de finta",
      "en": "Finta de finta"
    }
  },
  {
    "id": "cuauhtemina",
    "name": "Cuauhtemiña (de pie)",
    "stars": 4,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "R3"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "R3"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Cuauhtemiña (de pie)",
      "en": "Cuauhtemiña (de pie)"
    }
  },
  {
    "id": "rodar-arrastrar-atras",
    "name": "Rodar y arrastrar atrás",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "drag-back",
    "description": {
      "es": "Rodar y arrastrar atrás",
      "en": "Rodar y arrastrar atrás"
    }
  },
  {
    "id": "arrastrar-atras-giro",
    "name": "Arrastrar atrás y giro",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "down"
        }
      ]
    },
    "animationType": "drag-back",
    "description": {
      "es": "Arrastrar atrás y giro",
      "en": "Arrastrar atrás y giro"
    }
  },
  {
    "id": "tuneles-estilo",
    "name": "Túneles con estilo",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque Dirección"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque Dirección"
        }
      ]
    },
    "animationType": "nutmeg",
    "description": {
      "es": "Túneles con estilo",
      "en": "Túneles con estilo"
    }
  },
  {
    "id": "talon-a-talon",
    "name": "Talón a talón",
    "stars": 4,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "forward-flick",
    "description": {
      "es": "Talón a talón",
      "en": "Talón a talón"
    }
  },
  {
    "id": "sombrerito-simple",
    "name": "Sombrerito simple",
    "stars": 4,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "rainbow",
    "description": {
      "es": "Sombrerito simple",
      "en": "Sombrerito simple"
    }
  },
  {
    "id": "giro-izq",
    "name": "Giro a la izquierda",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Giro a la izquierda",
      "en": "Giro a la izquierda"
    }
  },
  {
    "id": "giro-der",
    "name": "Giro a la derecha",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Giro a la derecha",
      "en": "Giro a la derecha"
    }
  },
  {
    "id": "parar-girar-izq",
    "name": "Parar y girar a la izquierda (corriendo)",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Parar y girar a la izquierda (corriendo)",
      "en": "Parar y girar a la izquierda (corriendo)"
    }
  },
  {
    "id": "parar-girar-der",
    "name": "Parar y girar a la derecha (corriendo)",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Parar y girar a la derecha (corriendo)",
      "en": "Parar y girar a la derecha (corriendo)"
    }
  },
  {
    "id": "rodar-cortar-izq",
    "name": "Rodar el balón y cortar a la izquierda",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar el balón y cortar a la izquierda",
      "en": "Rodar el balón y cortar a la izquierda"
    }
  },
  {
    "id": "rodar-cortar-der",
    "name": "Rodar el balón y cortar a la derecha",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar el balón y cortar a la derecha",
      "en": "Rodar el balón y cortar a la derecha"
    }
  },
  {
    "id": "pase-falso-pos",
    "name": "Pase falso (en posición)",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Pase falso (en posición)",
      "en": "Pase falso (en posición)"
    }
  },
  {
    "id": "salida-izq-pase-falso",
    "name": "Salida por izquierda de pase falso",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up-left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Salida por izquierda de pase falso",
      "en": "Salida por izquierda de pase falso"
    }
  },
  {
    "id": "finta-tres-toques-izq",
    "name": "Finta de tres toques por la izquierda",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta de tres toques por la izquierda",
      "en": "Finta de tres toques por la izquierda"
    }
  },
  {
    "id": "finta-tres-toques-der",
    "name": "Finta de tres toques por la derecha",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta de tres toques por la derecha",
      "en": "Finta de tres toques por la derecha"
    }
  },
  {
    "id": "arrastrar-atras-giro-izq",
    "name": "Arrastrar atrás y giro sobre la izquierda",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "drag-back",
    "description": {
      "es": "Arrastrar atrás y giro sobre la izquierda",
      "en": "Arrastrar atrás y giro sobre la izquierda"
    }
  },
  {
    "id": "arrastrar-atras-giro-der",
    "name": "Arrastrar atrás y giro sobre la derecha",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "drag-back",
    "description": {
      "es": "Arrastrar atrás y giro sobre la derecha",
      "en": "Arrastrar atrás y giro sobre la derecha"
    }
  },
  {
    "id": "arrastre-talon",
    "name": "Arrastre a talón",
    "stars": 4,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "behind-leg",
    "description": {
      "es": "Arrastre a talón",
      "en": "Arrastre a talón"
    }
  },
  {
    "id": "toque-talon-ruede",
    "name": "Toque de talón con ruede de balón",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Toque de talón con ruede de balón",
      "en": "Toque de talón con ruede de balón"
    }
  },
  {
    "id": "rodar-balon-cortar",
    "name": "Rodar el balón y cortar",
    "stars": 4,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar el balón y cortar",
      "en": "Rodar el balón y cortar"
    }
  },
  {
    "id": "rodar-rapido-balon",
    "name": "Rodar rápido el balón",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "down"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodar rápido el balón",
      "en": "Rodar rápido el balón"
    }
  },
  {
    "id": "cambio-linea-izq",
    "name": "Cambio de línea por la izquierda",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Cambio de línea por la izquierda",
      "en": "Cambio de línea por la izquierda"
    }
  },
  {
    "id": "cambio-linea-der",
    "name": "Cambio de línea por la derecha",
    "stars": 4,
    "category": "basic",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Cambio de línea por la derecha",
      "en": "Cambio de línea por la derecha"
    }
  },
  {
    "id": "ruleta-tres-toques-izq",
    "name": "Ruleta de tres toques por la izquierda",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Ruleta de tres toques por la izquierda",
      "en": "Ruleta de tres toques por la izquierda"
    }
  },
  {
    "id": "ruleta-tres-toques-der",
    "name": "Ruleta de tres toques por la derecha",
    "stars": 4,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Ruleta de tres toques por la derecha",
      "en": "Ruleta de tres toques por la derecha"
    }
  },
  {
    "id": "toque-elastica-izq",
    "name": "Toque elástica a la izquierda",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "snap-back",
    "description": {
      "es": "Toque elástica a la izquierda",
      "en": "Toque elástica a la izquierda"
    }
  },
  {
    "id": "toque-elastica-der",
    "name": "Toque elástica a la derecha",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ]
    },
    "animationType": "snap-back",
    "description": {
      "es": "Toque elástica a la derecha",
      "en": "Toque elástica a la derecha"
    }
  },
  {
    "id": "toque-giro",
    "name": "Toque con giro",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Toque con giro",
      "en": "Toque con giro"
    }
  },
  {
    "id": "toque-arriba",
    "name": "Toque por arriba",
    "stars": 5,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "up"
        }
      ]
    },
    "animationType": "forward-flick",
    "description": {
      "es": "Toque por arriba",
      "en": "Toque por arriba"
    }
  },
  {
    "id": "tornado-giro",
    "name": "Tornado con giro",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Tornado con giro",
      "en": "Tornado con giro"
    }
  },
  {
    "id": "finta-talon",
    "name": "Finta de talón",
    "stars": 5,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "behind-leg",
    "description": {
      "es": "Finta de talón",
      "en": "Finta de talón"
    }
  },
  {
    "id": "arcoiris-estilo",
    "name": "Arcoíris con estilo",
    "stars": 5,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "rainbow",
    "description": {
      "es": "Arcoíris con estilo",
      "en": "Arcoíris con estilo"
    }
  },
  {
    "id": "elastica",
    "name": "Elástica",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "snap-back",
    "description": {
      "es": "Elástica",
      "en": "Elástica"
    }
  },
  {
    "id": "elastica-inversa",
    "name": "Elástica inversa",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-left-right"
        }
      ]
    },
    "animationType": "snap-back",
    "description": {
      "es": "Elástica inversa",
      "en": "Elástica inversa"
    }
  },
  {
    "id": "sombrerito-avanzado",
    "name": "Sombrerito avanzado",
    "stars": 5,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "rainbow",
    "description": {
      "es": "Sombrerito avanzado",
      "en": "Sombrerito avanzado"
    }
  },
  {
    "id": "abracadabra",
    "name": "Abracadabra",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "behind-leg",
    "description": {
      "es": "Abracadabra",
      "en": "Abracadabra"
    }
  },
  {
    "id": "triple-elastico",
    "name": "Triple elástico",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-down-right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-right-left"
        }
      ]
    },
    "animationType": "snap-back",
    "description": {
      "es": "Triple elástico",
      "en": "Triple elástico"
    }
  },
  {
    "id": "rodar-elevar-izq",
    "name": "Rodar el balón y elevarlo a la izq.",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Rodar el balón y elevarlo a la izq.",
      "en": "Rodar el balón y elevarlo a la izq."
    }
  },
  {
    "id": "rodar-elevar-der",
    "name": "Rodar el balón y elevarlo a la der.",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Rodar el balón y elevarlo a la der.",
      "en": "Rodar el balón y elevarlo a la der."
    }
  },
  {
    "id": "toque-sombrero-der",
    "name": "Toque de sombrero a la derecha",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Toque de sombrero a la derecha",
      "en": "Toque de sombrero a la derecha"
    }
  },
  {
    "id": "alrededor-mundo",
    "name": "Alrededor del mundo",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-full"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-full"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Alrededor del mundo",
      "en": "Alrededor del mundo"
    }
  },
  {
    "id": "elastica-aire",
    "name": "Elástica en el aire",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Elástica en el aire",
      "en": "Elástica en el aire"
    }
  },
  {
    "id": "elastica-inversa-aerea",
    "name": "Elástica inversa aérea",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Elástica inversa aérea",
      "en": "Elástica inversa aérea"
    }
  },
  {
    "id": "elevar-balon-5",
    "name": "Elevar el balón (Dominadas)",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "LS"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "LS"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Elevar el balón (Dominadas)",
      "en": "Elevar el balón (Dominadas)"
    }
  },
  {
    "id": "toque-pecho",
    "name": "Toque con el pecho",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "R3"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "x2"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "R3"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "x2"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Toque con el pecho",
      "en": "Toque con el pecho"
    }
  },
  {
    "id": "doble-vuelta-mundo",
    "name": "Doble vuelta al mundo",
    "stars": 5,
    "category": "juggles",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-full"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "rotate-full"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ]
    },
    "animationType": "juggle",
    "description": {
      "es": "Doble vuelta al mundo",
      "en": "Doble vuelta al mundo"
    }
  },
  {
    "id": "giro-toque-talon",
    "name": "Giro y toque de talón",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "R1"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "behind-leg",
    "description": {
      "es": "Giro y toque de talón",
      "en": "Giro y toque de talón"
    }
  },
  {
    "id": "toque-sombrero-pie",
    "name": "Toque de sombrero (de pie)",
    "stars": 5,
    "category": "flicks",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "rainbow",
    "description": {
      "es": "Toque de sombrero (de pie)",
      "en": "Toque de sombrero (de pie)"
    }
  },
  {
    "id": "vuelta-giro-izq",
    "name": "Vuelta y giro a la izquierda",
    "stars": 5,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Vuelta y giro a la izquierda",
      "en": "Vuelta y giro a la izquierda"
    }
  },
  {
    "id": "vuelta-giro-der",
    "name": "Vuelta y giro a la derecha",
    "stars": 5,
    "category": "spins",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "spin-360",
    "description": {
      "es": "Vuelta y giro a la derecha",
      "en": "Vuelta y giro a la derecha"
    }
  },
  {
    "id": "finta-rodar-izq-pie",
    "name": "Finta rodar balón izq. (de pie)",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta rodar balón izq. (de pie)",
      "en": "Finta rodar balón izq. (de pie)"
    }
  },
  {
    "id": "finta-rodar-der-pie",
    "name": "Finta rodar balón der. (de pie)",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "right"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Finta rodar balón der. (de pie)",
      "en": "Finta rodar balón der. (de pie)"
    }
  },
  {
    "id": "ruede-finta-giro",
    "name": "Ruede de balón con finta de giro",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "up"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "left"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "right"
        }
      ]
    },
    "animationType": "lateral-shift",
    "description": {
      "es": "Ruede de balón con finta de giro",
      "en": "Ruede de balón con finta de giro"
    }
  },
  {
    "id": "finta-rabona",
    "name": "Finta de rabona (al encarar)",
    "stars": 5,
    "category": "advanced",
    "isNew": false,
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Square"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "o"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "Circle"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "button",
          "value": "X"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Toque"
        },
        {
          "type": "direction",
          "value": "down"
        }
      ]
    },
    "animationType": "behind-leg",
    "description": {
      "es": "Finta de rabona (al encarar)",
      "en": "Finta de rabona (al encarar)"
    }
  },

  // ═══════════════════════════════════════
  // META DRIBLING — EA FC 26
  // ═══════════════════════════════════════
  {
    "id": "mcgeady-spin-cancel",
    "name": "McGeady Spin + Cancel",
    "stars": 4,
    "category": "meta",
    "isNew": false,
    "animationType": "spin-360",
    "description": {
      "es": "Girá el RS en semicírculo y cancelá con L1 a mitad del giro. Uno de los driblados más efectivos del meta actual.",
      "en": "Rotate RS in a semicircle then cancel with L1 mid-spin. One of the most effective dribbles in the current meta."
    },
    "inputs": {
      "classic": [
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "rotate-down-right" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "alternative": [
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "rotate-down-right" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "note": {
        "es": "Corriendo suave. Cancelar a mitad del giro para la salida falsa.",
        "en": "While jogging. Cancel mid-spin for the fake exit."
      }
    }
  },
  {
    "id": "ball-roll-cancel",
    "name": "Rodar el Balón + Cancel",
    "stars": 2,
    "category": "meta",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Rodá el balón a un lado con el RS y cancelá con L1 para cambiar de dirección en seco. Base del meta en espacios reducidos.",
      "en": "Roll the ball to one side with RS and cancel with L1 to cut direction instantly. Core meta technique in tight spaces."
    },
    "inputs": {
      "classic": [
        { "type": "text", "value": "Mantener" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "left" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "alternative": [
        { "type": "text", "value": "Mantener" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "left" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "note": {
        "es": "Cancelar cuando el balón empieza a rodar para el corte más brusco.",
        "en": "Cancel just as the ball starts rolling for the sharpest cut."
      }
    }
  },
  {
    "id": "drag-back-180",
    "name": "Arrastrar Atrás 180°",
    "stars": 2,
    "category": "meta",
    "isNew": false,
    "animationType": "drag-back",
    "description": {
      "es": "Arrastrá el balón 180° y salí en sprint al lado contrario. El reset de presión más fiable del meta.",
      "en": "Drag the ball 180° and sprint the opposite way. The most reliable pressure reset in the meta."
    },
    "inputs": {
      "classic": [
        { "type": "text", "value": "Mantener" },
        { "type": "button", "value": "L2" },
        { "type": "text", "value": "+" },
        { "type": "button", "value": "R2" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "LS" },
        { "type": "direction", "value": "down" },
        { "type": "text", "value": "luego" },
        { "type": "stick", "value": "LS" },
        { "type": "direction", "value": "up" }
      ],
      "alternative": [
        { "type": "text", "value": "Mantener" },
        { "type": "button", "value": "L2" },
        { "type": "text", "value": "+" },
        { "type": "button", "value": "R2" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "LS" },
        { "type": "direction", "value": "down" },
        { "type": "text", "value": "luego" },
        { "type": "stick", "value": "LS" },
        { "type": "direction", "value": "up" }
      ],
      "note": {
        "es": "Soltá L2+R2 después del arrastre para el sprint inmediato.",
        "en": "Release L2+R2 after the drag for immediate sprint."
      }
    }
  },
  {
    "id": "lane-change-cancel",
    "name": "Cambio de Línea + Cancel",
    "stars": 3,
    "category": "meta",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Cambiá de carril y cancelá con L1 para parar en seco. Rompe el seguimiento defensivo por completo.",
      "en": "Shift lanes then cancel with L1 to stop dead. Completely breaks defensive tracking."
    },
    "inputs": {
      "classic": [
        { "type": "text", "value": "Mantener" },
        { "type": "button", "value": "L1" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "left" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "alternative": [
        { "type": "text", "value": "Mantener" },
        { "type": "button", "value": "L1" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "left" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "note": {
        "es": "Corriendo suave. Izquierda o derecha según la salida deseada.",
        "en": "While jogging. Left or right depending on desired exit."
      }
    }
  },
  {
    "id": "heel-flick-cancel",
    "name": "Toque de Talón + Cancel",
    "stars": 4,
    "category": "meta",
    "isNew": false,
    "animationType": "forward-flick",
    "description": {
      "es": "Iniciá el toque de talón y cancelá con L1 antes de que el balón se eleve. Genera un amago brutal imposible de leer.",
      "en": "Start the heel flick and cancel with L1 before the ball lifts. Creates an unreadable fake that freezes defenders."
    },
    "inputs": {
      "classic": [
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "up" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "down" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "alternative": [
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "up" },
        { "type": "text", "value": "+" },
        { "type": "stick", "value": "RS" },
        { "type": "direction", "value": "down" },
        { "type": "text", "value": "+" },
        { "type": "text", "value": "Cancelar" },
        { "type": "text", "value": "con" },
        { "type": "button", "value": "L1" }
      ],
      "note": {
        "es": "Corriendo suave. Cancelar justo antes de que el balón se eleve.",
        "en": "While jogging. Cancel just before the ball rises off the ground."
      }
    }
  }
];
