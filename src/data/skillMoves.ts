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
    "id": "precision-touch",
    "name": {
      "es": "Regate de precisión (Precision Touch)",
      "en": "Precision Touch Dribble"
    },
    "stars": 1,
    "category": "basic",
    "isNew": true,
    "animationType": "lateral-shift",
    "description": {
      "es": "Mecánica clave de FC 26 para control milimétrico y regate fino (Strafe Dribbling) encarando al rival en espacios reducidos.",
      "en": "Key FC 26 mechanic for precision close-control and strafe dribbling when facing defenders in tight boxes."
    },
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
          "value": "LS"
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
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "Dirección"
        }
      ],
      "note": {
        "es": "Ideal dentro del área para encontrar el hueco perfecto para el disparo o pase filtrado.",
        "en": "Crucial inside the 18-yard box to create a shooting lane or slip through a pass."
      }
    }
  },
  {
    "id": "controlled-sprint",
    "name": {
      "es": "Sprint controlado",
      "en": "Controlled Sprint"
    },
    "stars": 1,
    "category": "basic",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Conducción rápida a zancada corta manteniendo el balón pegado al pie para giros y cambios de ritmo ágiles.",
      "en": "Fast dribble with close touches keeping the ball glued to your boots for agile cuts."
    },
    "inputs": {
      "classic": [
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
          "value": "Dirección"
        }
      ],
      "note": {
        "es": "Mantén R1 presionado para acelerar sin perder el control estrecho del esférico.",
        "en": "Hold R1 to accelerate smoothly without letting the ball get away from your player."
      }
    }
  },
  {
    "id": "proteger-balon",
    "name": {
      "es": "Proteger el balón",
      "en": "Protecting the Ball"
    },
    "stars": 1,
    "category": "basic",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Usa el cuerpo para interponerte entre el defensor y la pelota, ganando tiempo y reteniendo la posesión.",
      "en": "Shield the ball with your body to hold off defenders and retain possession under pressure."
    },
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
        },
        {
          "type": "button",
          "value": "L2"
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
        }
      ],
      "note": {
        "es": "Utilízalo cuando un defensor se acerque por la espalda para ganar la posición física.",
        "en": "Use when an opponent challenges from behind to win physical positioning."
      }
    }
  },
  {
    "id": "regate-rapido",
    "name": {
      "es": "Regate rápido / Aceleración",
      "en": "Fast Dribbling"
    },
    "stars": 1,
    "category": "basic",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Acelera a máxima velocidad para superar defensores en carrera abierta cuando hay espacio libre.",
      "en": "Burst forward at top speed to leave defenders behind when green grass opens up."
    },
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
          "type": "stick",
          "value": "LS"
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
          "value": "R2"
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
          "value": "Dirección"
        }
      ]
    }
  },
  {
    "id": "conduccion-balon",
    "name": {
      "es": "Conducción del balón",
      "en": "Carrying the Ball"
    },
    "stars": 1,
    "category": "basic",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Conducción fundamental con el joystick izquierdo para moverte y orientar al jugador en cualquier dirección.",
      "en": "Fundamental ball carrying with the Left Stick to navigate and orient your player in any direction."
    },
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "Dirección"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "text",
          "value": "Dirección"
        }
      ]
    }
  },
  {
    "id": "tunel-direccional",
    "name": {
      "es": "Túnel direccional",
      "en": "Directional Nutmeg"
    },
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
      "es": "Tira un túnel o autopase orientado en cualquier dirección para superar rivales en velocidad.",
      "en": "Nutmeg or push the ball past a defender in any direction to burst into space."
    }
  },
  {
    "id": "dominar-balon",
    "name": {
      "es": "Dominar el balón (de pie)",
      "en": "Ball Juggle (while standing)"
    },
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
      "es": "Da toques al balón en el lugar para iniciar malabares o jugadas aéreas.",
      "en": "Juggle the ball while stationary to set up volleys or aerial skill tricks."
    }
  },
  {
    "id": "amago-tiro-izq-abrir",
    "name": {
      "es": "Amago de tiro hacia la izquierda y abrir",
      "en": "Open Up Fake Shot Left"
    },
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
      "es": "Amago de tiro orientado hacia la diagonal izquierda para abrir ángulo de pase o tiro.",
      "en": "Fake shot angled diagonally left to create space and open up a passing or shooting angle."
    }
  },
  {
    "id": "amago-tiro-der-abrir",
    "name": {
      "es": "Amago de tiro hacia la derecha y abrir",
      "en": "Open Up Fake Shot Right"
    },
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
      "es": "Amago de tiro orientado hacia la diagonal derecha para abrir ángulo de pase o tiro.",
      "en": "Fake shot angled diagonally right to create space and open up a passing or shooting angle."
    }
  },
  {
    "id": "elevar-balon-1",
    "name": {
      "es": "Elevar el balón",
      "en": "Flick Up"
    },
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
      "es": "Eleva el balón ligeramente para remates de volea o superar barridas.",
      "en": "Flick the ball up into the air for volleys or to evade sliding challenges."
    }
  },
  {
    "id": "giro-finta-primer-toque",
    "name": {
      "es": "Giro con finta de primer toque",
      "en": "First Time Turn"
    },
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
      "es": "Deja correr el balón o gira en el primer toque engañando al defensor que te marca.",
      "en": "Feint and turn on your first touch to deceive marking defenders."
    }
  },
  {
    "id": "finta-adelante-giro",
    "name": {
      "es": "Finta hacia adelante y giro",
      "en": "Feint Forward and Turn"
    },
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
      "es": "Amaga con avanzar y gira 180° rápidamente hacia atrás.",
      "en": "Fake forward movement and quickly spin 180 degrees backwards."
    }
  },
  {
    "id": "finta-cuerpo-der",
    "name": {
      "es": "Finta del cuerpo - derecha",
      "en": "Body Feint Right"
    },
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
      "es": "Engaño con el cuerpo hacia la derecha para desestabilizar al defensor.",
      "en": "Feint your body to the right to unbalance the defending marker."
    }
  },
  {
    "id": "finta-cuerpo-izq",
    "name": {
      "es": "Finta del cuerpo - izquierda",
      "en": "Body Feint Left"
    },
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
      "es": "Engaño con el cuerpo hacia la izquierda para desestabilizar al defensor.",
      "en": "Feint your body to the left to unbalance the defending marker."
    }
  },
  {
    "id": "bicicleta-der",
    "name": {
      "es": "Bicicleta a la derecha",
      "en": "Stepover Right"
    },
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
      "es": "Pasa la pierna sobre el balón hacia la derecha para confundir al rival.",
      "en": "Step over the ball to the right to confuse and bypass your opponent."
    }
  },
  {
    "id": "bicicleta-izq",
    "name": {
      "es": "Bicicleta a la izquierda",
      "en": "Stepover Left"
    },
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
      "es": "Pasa la pierna sobre el balón hacia la izquierda para confundir al rival.",
      "en": "Step over the ball to the left to confuse and bypass your opponent."
    }
  },
  {
    "id": "bicicleta-inversa-der",
    "name": {
      "es": "Bicicleta invertida a la derecha",
      "en": "Reverse Stepover Right"
    },
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
      "es": "Bicicleta inversa saliendo hacia la derecha con gran aceleración.",
      "en": "Reverse stepover exiting to the right with explosive acceleration."
    }
  },
  {
    "id": "bicicleta-inversa-izq",
    "name": {
      "es": "Bicicleta invertida a la izquierda",
      "en": "Reverse Stepover Left"
    },
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
      "es": "Bicicleta inversa saliendo hacia la izquierda con gran aceleración.",
      "en": "Reverse stepover exiting to the left with explosive acceleration."
    }
  },
  {
    "id": "rodar-izq",
    "name": {
      "es": "Rodar el balón a la izquierda",
      "en": "Ball Roll Left"
    },
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
      "es": "Rueda el balón hacia la izquierda con la suela del pie, cambiando el ángulo de pase o tiro.",
      "en": "Roll the ball to the left with the sole of the boot to shift passing or shooting lanes."
    }
  },
  {
    "id": "rodar-der",
    "name": {
      "es": "Rodar el balón a la derecha",
      "en": "Ball Roll Right"
    },
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
      "es": "Rueda el balón hacia la derecha con la suela del pie, cambiando el ángulo de pase o tiro.",
      "en": "Roll the ball to the right with the sole of the boot to shift passing or shooting lanes."
    }
  },
  {
    "id": "arrastrar-atras",
    "name": {
      "es": "Arrastrar atrás (de pie)",
      "en": "Drag Back (while standing)"
    },
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
      "es": "Arrastra el balón hacia atrás pisándolo para eludir la presión frontal.",
      "en": "Drag the ball backwards with the sole to evade pressing defenders."
    }
  },
  {
    "id": "toque-talon",
    "name": {
      "es": "Toque de talón",
      "en": "Heel Flick"
    },
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
      "es": "Golpea el balón hacia adelante con el talón para una aceleración sorpresiva.",
      "en": "Flick the ball forward with your heel for a sudden burst of speed."
    }
  },
  {
    "id": "ruleta-der",
    "name": {
      "es": "Ruleta a la derecha",
      "en": "Roulette Right"
    },
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
      "es": "Giro de 360° sobre el balón saliendo por el perfil derecho.",
      "en": "360-degree spin over the ball exiting along the right flank."
    }
  },
  {
    "id": "ruleta-izq",
    "name": {
      "es": "Ruleta a la izquierda",
      "en": "Roulette Left"
    },
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
      "es": "Giro de 360° sobre el balón saliendo por el perfil izquierdo.",
      "en": "360-degree spin over the ball exiting along the left flank."
    }
  },
  {
    "id": "finta-izq-ir-der",
    "name": {
      "es": "Finta a la izquierda e ir a la derecha",
      "en": "Fake Left & Go Right"
    },
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
      "es": "Amaga con salir hacia la izquierda y escapa rápidamente por la derecha.",
      "en": "Feint to the left and break away sharply to the right."
    }
  },
  {
    "id": "finta-der-ir-izq",
    "name": {
      "es": "Finta a la derecha e ir a la izquierda",
      "en": "Fake Right & Go Left"
    },
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
      "es": "Amaga con salir hacia la derecha y escapa rápidamente por la izquierda.",
      "en": "Feint to the right and break away sharply to the left."
    }
  },
  {
    "id": "corte-talon-izq",
    "name": {
      "es": "Corte de talón a la izquierda (corriendo)",
      "en": "Heel Chop Left (while running)"
    },
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
      "es": "Corte seco con el talón hacia la izquierda en carrera para frenar o cambiar de dirección.",
      "en": "Sharp heel chop to the left while running to cut inside or change angle."
    }
  },
  {
    "id": "corte-talon-der",
    "name": {
      "es": "Corte de talón a la derecha (corriendo)",
      "en": "Heel Chop Right (while running)"
    },
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
      "es": "Corte seco con el talón hacia la derecha en carrera para frenar o cambiar de dirección.",
      "en": "Sharp heel chop to the right while running to cut inside or change angle."
    }
  },
  {
    "id": "fintar-izq-salir-der",
    "name": {
      "es": "Fintar a la izquierda y salir a la derecha",
      "en": "Feint Left and Exit Right"
    },
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
      "es": "Finta rápida con el cuerpo hacia la izquierda y salida hacia la derecha.",
      "en": "Quick body feint to the left with an explosive exit to the right."
    }
  },
  {
    "id": "fintar-der-salir-izq",
    "name": {
      "es": "Fintar a la derecha y salir a la izquierda",
      "en": "Feint Right and Exit Left"
    },
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
      "es": "Finta rápida con el cuerpo hacia la derecha y salida hacia la izquierda.",
      "en": "Quick body feint to the right with an explosive exit to the left."
    }
  },
  {
    "id": "finta-de-finta",
    "name": {
      "es": "Finta de finta",
      "en": "Stutter Feint"
    },
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
      "es": "Doble finta lateral consecutiva para dejar descolocado al marcador.",
      "en": "Quick double lateral feint to throw off the defender's positioning."
    }
  },
  {
    "id": "cuauhtemina",
    "name": {
      "es": "Cuauhtemiña (de pie)",
      "en": "Ball Hop (while standing)"
    },
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
      "es": "Salta atrapando el balón con ambos pies para eludir la entrada del rival (Blanco Hop).",
      "en": "Trap the ball between both boots and hop over an incoming tackle (Blanco Hop)."
    }
  },
  {
    "id": "rodar-arrastrar-atras",
    "name": {
      "es": "Rodar y arrastrar atrás",
      "en": "Ball Roll to Drag Back"
    },
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
      "es": "Combina un ruede lateral con un arrastre inmediato hacia atrás.",
      "en": "Combines a lateral ball roll with an immediate backward drag."
    }
  },
  {
    "id": "arrastrar-atras-giro",
    "name": {
      "es": "Arrastrar atrás y giro",
      "en": "Drag Back Turn"
    },
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
      "es": "Arrastre de espaldas con giro rápido protegiendo el balón con el cuerpo.",
      "en": "Backward drag with a swift turn while shielding the ball."
    }
  },
  {
    "id": "tuneles-estilo",
    "name": {
      "es": "Túneles con estilo",
      "en": "Flair Nutmegs"
    },
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
      "es": "Intento de túnel de fantasía con toques elegantes para humillar al rival.",
      "en": "Stylish nutmeg attempt using flashy flicks to beat oncoming markers."
    }
  },
  {
    "id": "talon-a-talon",
    "name": {
      "es": "Talón a talón",
      "en": "Heel to Heel Flick"
    },
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
      "es": "Golpe de talón a talón que proyecta el balón hacia adelante a gran velocidad.",
      "en": "Heel to heel touch that propels the ball forward into space with pace."
    }
  },
  {
    "id": "sombrerito-simple",
    "name": {
      "es": "Sombrerito simple",
      "en": "Simple Rainbow"
    },
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
      "es": "Eleva el balón sobre la cabeza del defensor mediante un toque de arcoíris.",
      "en": "Flicks the ball overhead with a simple rainbow arc to bypass the defender."
    }
  },
  {
    "id": "giro-izq",
    "name": {
      "es": "Giro a la izquierda",
      "en": "Spin Left"
    },
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
      "es": "Giro ágil hacia la izquierda para superar defensas en espacios reducidos.",
      "en": "Quick spin to the left to evade defenders in tight quarters."
    }
  },
  {
    "id": "giro-der",
    "name": {
      "es": "Giro a la derecha",
      "en": "Spin Right"
    },
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
      "es": "Giro ágil hacia la derecha para superar defensas en espacios reducidos.",
      "en": "Quick spin to the right to evade defenders in tight quarters."
    }
  },
  {
    "id": "parar-girar-izq",
    "name": {
      "es": "Parar y girar a la izquierda (corriendo)",
      "en": "Stop and Turn Left (while running)"
    },
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
      "es": "Frena en seco la carrera y gira 90° hacia la izquierda (Berba Spin).",
      "en": "Kills sprinting momentum and cuts 90 degrees left (Berba Spin)."
    }
  },
  {
    "id": "parar-girar-der",
    "name": {
      "es": "Parar y girar a la derecha (corriendo)",
      "en": "Stop and Turn Right (while running)"
    },
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
      "es": "Frena en seco la carrera y gira 90° hacia la derecha (Berba Spin).",
      "en": "Kills sprinting momentum and cuts 90 degrees right (Berba Spin)."
    }
  },
  {
    "id": "rodar-cortar-izq",
    "name": {
      "es": "Rodar el balón y cortar a la izquierda",
      "en": "Ball Roll Cut Left"
    },
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
      "es": "Rueda el balón a la derecha y corta bruscamente hacia la izquierda.",
      "en": "Rolls the ball right and sharply cuts back to the left."
    }
  },
  {
    "id": "rodar-cortar-der",
    "name": {
      "es": "Rodar el balón y cortar a la derecha",
      "en": "Ball Roll Cut Right"
    },
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
      "es": "Rueda el balón a la izquierda y corta bruscamente hacia la derecha.",
      "en": "Rolls the ball left and sharply cuts back to the right."
    }
  },
  {
    "id": "pase-falso-pos",
    "name": {
      "es": "Pase falso (en posición)",
      "en": "Fake Pass (while standing)"
    },
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
      "es": "Simula un pase largo quedando en posición con el balón dominado.",
      "en": "Disguises a pass while stationary, freezing nearby opponents."
    }
  },
  {
    "id": "salida-izq-pase-falso",
    "name": {
      "es": "Salida por izquierda de pase falso",
      "en": "Fake Pass Exit Left"
    },
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
      "es": "Finta de pase y aceleración inmediata hacia la izquierda.",
      "en": "Fake pass combined with an explosive escape touch to the left."
    }
  },
  {
    "id": "finta-tres-toques-izq",
    "name": {
      "es": "Finta de tres toques por la izquierda",
      "en": "Three Touch Roulette Left"
    },
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
      "es": "Ruleta de tres toques técnicos girando hacia la izquierda.",
      "en": "Technical three-touch roulette spinning past the defender to the left."
    }
  },
  {
    "id": "finta-tres-toques-der",
    "name": {
      "es": "Finta de tres toques por la derecha",
      "en": "Three Touch Roulette Right"
    },
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
      "es": "Ruleta de tres toques técnicos girando hacia la derecha.",
      "en": "Technical three-touch roulette spinning past the defender to the right."
    }
  },
  {
    "id": "arrastrar-atras-giro-izq",
    "name": {
      "es": "Arrastrar atrás y giro sobre la izquierda",
      "en": "Drag Back Spin Left"
    },
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
      "es": "Arrastra el balón con la suela y gira sobre el perfil izquierdo.",
      "en": "Drags the ball back with the sole and spins towards the left."
    }
  },
  {
    "id": "arrastrar-atras-giro-der",
    "name": {
      "es": "Arrastrar atrás y giro sobre la derecha",
      "en": "Drag Back Spin Right"
    },
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
      "es": "Arrastra el balón con la suela y gira sobre el perfil derecho.",
      "en": "Drags the ball back with the sole and spins towards the right."
    }
  },
  {
    "id": "arrastre-talon",
    "name": {
      "es": "Arrastre a talón",
      "en": "Drag to Heel"
    },
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
      "es": "Arrastra el balón lateralmente y lo toca con el talón hacia adelante.",
      "en": "Drags the ball sideways and flicks it forward off the heel."
    }
  },
  {
    "id": "toque-talon-ruede",
    "name": {
      "es": "Toque de talón con ruede de balón",
      "en": "Heel to Ball Roll"
    },
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
      "es": "Toque de talón seguido de un rodado de balón fluido con la suela.",
      "en": "Heel flick followed by a smooth ball roll transition."
    }
  },
  {
    "id": "rodar-balon-cortar",
    "name": {
      "es": "Rodar el balón y cortar",
      "en": "Ball Roll Cut"
    },
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
      "es": "Rueda el balón hacia un lado y corta verticalmente hacia adelante.",
      "en": "Rolls the ball and quickly cuts direction forward."
    }
  },
  {
    "id": "rodar-rapido-balon",
    "name": {
      "es": "Rodar rápido el balón",
      "en": "Quick Ball Roll"
    },
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
      "es": "Ejecución rápida del ruede de balón para engañar en velocidad.",
      "en": "Rapid ball roll execution to beat defenders on the move."
    }
  },
  {
    "id": "cambio-linea-izq",
    "name": {
      "es": "Cambio de línea por la izquierda",
      "en": "Lane Change Left"
    },
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
      "es": "Cambia el balón de pie rápidamente hacia la izquierda (La Croqueta).",
      "en": "Quickly shifts the ball from foot to foot to the left (La Croqueta)."
    }
  },
  {
    "id": "cambio-linea-der",
    "name": {
      "es": "Cambio de línea por la derecha",
      "en": "Lane Change Right"
    },
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
      "es": "Cambia el balón de pie rápidamente hacia la derecha (La Croqueta).",
      "en": "Quickly shifts the ball from foot to foot to the right (La Croqueta)."
    }
  },
  {
    "id": "ruleta-tres-toques-izq",
    "name": {
      "es": "Ruleta de tres toques por la izquierda",
      "en": "Three Touch Roulette Left"
    },
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
      "es": "Giro técnico de tres toques eludiendo al rival hacia la izquierda.",
      "en": "Technical three-touch roulette spinning past the defender to the left."
    }
  },
  {
    "id": "ruleta-tres-toques-der",
    "name": {
      "es": "Ruleta de tres toques por la derecha",
      "en": "Three Touch Roulette Right"
    },
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
      "es": "Giro técnico de tres toques eludiendo al rival hacia la derecha.",
      "en": "Technical three-touch roulette spinning past the defender to the right."
    }
  },
  {
    "id": "toque-elastica-izq",
    "name": {
      "es": "Toque elástica a la izquierda",
      "en": "Elastico Chop Left"
    },
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
      "es": "Elástica cortada bruscamente hacia el lado izquierdo.",
      "en": "Elastico motion chopped sharply toward the left."
    }
  },
  {
    "id": "toque-elastica-der",
    "name": {
      "es": "Toque elástica a la derecha",
      "en": "Elastico Chop Right"
    },
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
      "es": "Elástica cortada bruscamente hacia el lado derecho.",
      "en": "Elastico motion chopped sharply toward the right."
    }
  },
  {
    "id": "toque-giro",
    "name": {
      "es": "Toque con giro",
      "en": "Spin Flick"
    },
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
      "es": "Eleva el balón con un toque acrobático mientras gira sobre su eje.",
      "en": "Flicks the ball up with an acrobatic spin around the defender."
    }
  },
  {
    "id": "toque-arriba",
    "name": {
      "es": "Toque por arriba",
      "en": "Sombrero Flick"
    },
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
      "es": "Eleva el balón sobre el defensor que llega de frente.",
      "en": "Pops the ball up and overhead against an approaching defender."
    }
  },
  {
    "id": "tornado-giro",
    "name": {
      "es": "Tornado con giro",
      "en": "Tornado Spin"
    },
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
      "es": "Giro acrobático elevando el balón para rematar de volea.",
      "en": "Acrobatic spin that pops the ball up for a volley strike."
    }
  },
  {
    "id": "finta-talon",
    "name": {
      "es": "Finta de talón",
      "en": "Heel Fake"
    },
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
      "es": "Amaga con tocar de talón y retiene el balón en posición.",
      "en": "Fakes a heel pass while stationary and keeps the ball close."
    }
  },
  {
    "id": "arcoiris-estilo",
    "name": {
      "es": "Arcoíris con estilo",
      "en": "Flair Rainbow"
    },
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
      "es": "Sombrerito arcoíris ejecutado con estilo de fantasía.",
      "en": "Stylish rainbow flick performed with flair."
    }
  },
  {
    "id": "elastica",
    "name": {
      "es": "Elástica",
      "en": "Elastico"
    },
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
      "es": "Toque exterior-interior a gran velocidad que engaña a cualquier rival.",
      "en": "Lightning-fast outside-to-inside flick that leaves defenders stranded."
    }
  },
  {
    "id": "elastica-inversa",
    "name": {
      "es": "Elástica inversa",
      "en": "Reverse Elastico"
    },
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
      "es": "Toque interior-exterior rápido saliendo por el lado contrario.",
      "en": "Lightning-fast inside-to-outside flick cutting in the opposite direction."
    }
  },
  {
    "id": "sombrerito-avanzado",
    "name": {
      "es": "Sombrerito avanzado",
      "en": "Advanced Rainbow"
    },
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
      "es": "Variante avanzada del arcoíris con mayor elevación y control de salida.",
      "en": "Advanced rainbow flick with higher elevation and smooth ball exit."
    }
  },
  {
    "id": "abracadabra",
    "name": {
      "es": "Abracadabra",
      "en": "Hocus Pocus"
    },
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
      "es": "Movimiento de fantasía: elástica invertida pasando el balón detrás de la pierna de apoyo.",
      "en": "Complex signature skill: reverse elastico behind the standing leg."
    }
  },
  {
    "id": "triple-elastico",
    "name": {
      "es": "Triple elástico",
      "en": "Triple Elastico"
    },
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
      "es": "Tres cambios de dirección consecutivos con el balón pegado al pie.",
      "en": "Three rapid changes of direction keeping the ball glued to your boots."
    }
  },
  {
    "id": "rodar-elevar-izq",
    "name": {
      "es": "Rodar el balón y elevarlo a la izq.",
      "en": "Ball Roll Flick Left"
    },
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
      "es": "Rueda el balón hacia la izquierda y lo eleva con el empeine.",
      "en": "Rolls the ball to the left and flicks it into the air."
    }
  },
  {
    "id": "rodar-elevar-der",
    "name": {
      "es": "Rodar el balón y elevarlo a la der.",
      "en": "Ball Roll Flick Right"
    },
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
      "es": "Rueda el balón hacia la derecha y lo eleva con el empeine.",
      "en": "Rolls the ball to the right and flicks it into the air."
    }
  },
  {
    "id": "toque-sombrero-der",
    "name": {
      "es": "Toque de sombrero a la derecha",
      "en": "Sombrero Flick Right"
    },
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
      "es": "Toque acrobático sobre la marcha elevando el balón hacia la derecha.",
      "en": "Acrobatic flick launching the ball over an opponent to the right."
    }
  },
  {
    "id": "alrededor-mundo",
    "name": {
      "es": "Alrededor del mundo",
      "en": "Around the World"
    },
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
      "es": "Da una vuelta completa con la pierna alrededor del balón en el aire.",
      "en": "Circumnavigates the ball in mid-air with the juggling foot."
    }
  },
  {
    "id": "elastica-aire",
    "name": {
      "es": "Elástica en el aire",
      "en": "In Air Elastico"
    },
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
      "es": "Ejecución de la elástica en el aire mientras se domina el balón.",
      "en": "Performs an elastico motion in mid-air while juggling."
    }
  },
  {
    "id": "elastica-inversa-aerea",
    "name": {
      "es": "Elástica inversa aérea",
      "en": "Reverse In Air Elastico"
    },
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
      "es": "Elástica inversa en el aire durante una serie de dominadas.",
      "en": "Reverse elastico performed in mid-air during ball juggles."
    }
  },
  {
    "id": "elevar-balon-5",
    "name": {
      "es": "Elevar el balón (Dominadas)",
      "en": "Flick Up for Volley"
    },
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
      "es": "Eleva el balón desde el suelo para empalmar una volea imparable.",
      "en": "Flicks the ball up from the deck into volley position."
    }
  },
  {
    "id": "toque-pecho",
    "name": {
      "es": "Toque con el pecho",
      "en": "Chest Flick"
    },
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
      "es": "Amortigua y eleva el balón con el pecho durante los malabares.",
      "en": "Cushions and pops the ball up off the chest while juggling."
    }
  },
  {
    "id": "doble-vuelta-mundo",
    "name": {
      "es": "Doble vuelta al mundo",
      "en": "Double Around the World"
    },
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
      "es": "Dos giros completos consecutivos de la pierna alrededor del balón en el aire.",
      "en": "Two consecutive full rotations around the ball in mid-air."
    }
  },
  {
    "id": "giro-toque-talon",
    "name": {
      "es": "Giro y toque de talón",
      "en": "Turn and Spin"
    },
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
      "es": "Giro rápido con toque de talón para cambiar drásticamente la trayectoria.",
      "en": "Rapid spin and heel flick that sharply alters your direction."
    }
  },
  {
    "id": "toque-sombrero-pie",
    "name": {
      "es": "Toque de sombrero (de pie)",
      "en": "Sombrero Flick (while standing)"
    },
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
      "es": "Eleva el balón de espaldas o de frente sobre el defensor estando detenido.",
      "en": "Flicks the ball overhead from a standing start to bypass a defender."
    }
  },
  {
    "id": "vuelta-giro-izq",
    "name": {
      "es": "Vuelta y giro a la izquierda",
      "en": "McGeady Spin Left"
    },
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
      "es": "El mítico McGeady Spin saliendo por la izquierda con un giro de 90°.",
      "en": "The iconic McGeady Spin exiting left with a sharp 90-degree turn."
    }
  },
  {
    "id": "vuelta-giro-der",
    "name": {
      "es": "Vuelta y giro a la derecha",
      "en": "McGeady Spin Right"
    },
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
      "es": "El mítico McGeady Spin saliendo por la derecha con un giro de 90°.",
      "en": "The iconic McGeady Spin exiting right with a sharp 90-degree turn."
    }
  },
  {
    "id": "finta-rodar-izq-pie",
    "name": {
      "es": "Finta rodar balón izq. (de pie)",
      "en": "Ball Roll Fake Left (while standing)"
    },
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
      "es": "Amaga con rodar el balón a la izquierda y sale hacia la derecha.",
      "en": "Fakes rolling the ball left from a standstill and exits right."
    }
  },
  {
    "id": "finta-rodar-der-pie",
    "name": {
      "es": "Finta rodar balón der. (de pie)",
      "en": "Ball Roll Fake Right (while standing)"
    },
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
      "es": "Amaga con rodar el balón a la derecha y sale hacia la izquierda.",
      "en": "Fakes rolling the ball right from a standstill and exits left."
    }
  },
  {
    "id": "ruede-finta-giro",
    "name": {
      "es": "Ruede de balón con finta de giro",
      "en": "Ball Roll Fake Turn"
    },
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
      "es": "Rueda el balón simulando un giro y continúa la marcha.",
      "en": "Fakes a turn during a ball roll to throw defenders off track."
    }
  },
  {
    "id": "finta-rabona",
    "name": {
      "es": "Finta de rabona (al encarar)",
      "en": "Rabona Fake (while jogging)"
    },
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
      "es": "Finta de rabona en carrera frenando en seco para cambiar de pierna.",
      "en": "Rabona fake executed while jogging, stopping dead to switch foot or cut inside."
    }
  },
  {
    "id": "mcgeady-spin-cancel",
    "name": {
      "es": "McGeady Spin + Cancel",
      "en": "McGeady Spin Cancel"
    },
    "stars": 4,
    "category": "meta",
    "isNew": false,
    "animationType": "spin-360",
    "description": {
      "es": "Gira el RS en semicírculo y cancelá con L2+R2 a mitad del giro. Uno de los regates más efectivos del meta.",
      "en": "Start the McGeady Spin and cancel with L2+R2 mid-spin. One of the most effective dribbles in the meta."
    },
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
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
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
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
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
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
          "type": "stick",
          "value": "RS"
        },
        {
          "type": "direction",
          "value": "left"
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
          "type": "text",
          "value": "luego"
        },
        {
          "type": "text",
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "note": {
        "es": "Corriendo suave. Cancelar a mitad del giro para la salida falsa.",
        "en": "While jogging. Cancel mid-spin for the fake exit."
      }
    }
  },
  {
    "id": "ball-roll-cancel",
    "name": {
      "es": "Rodar el Balón + Cancel",
      "en": "Ball Roll Cancel"
    },
    "stars": 2,
    "category": "meta",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Rueda el balón hacia un lado con el RS y cancelá con L2+R2 para cortar la dirección al instante. Técnica core del meta en espacios reducidos.",
      "en": "Roll the ball with RS and cancel with L2+R2 to cut direction instantly. Core meta technique in tight spaces."
    },
    "inputs": {
      "classic": [
        {
          "type": "text",
          "value": "Mantener"
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
          "type": "text",
          "value": "o"
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
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "alternative": [
        {
          "type": "text",
          "value": "Mantener"
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
          "type": "text",
          "value": "o"
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
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "note": {
        "es": "Cancelar cuando el balón empieza a rodar para el corte más brusco.",
        "en": "Cancel just as the ball starts rolling for the sharpest cut."
      }
    }
  },
  {
    "id": "drag-back-180",
    "name": {
      "es": "Arrastrar Atrás 180°",
      "en": "Drag Back 180°"
    },
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
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "stick",
          "value": "LS"
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
        },
        {
          "type": "text",
          "value": "luego"
        },
        {
          "type": "stick",
          "value": "LS"
        },
        {
          "type": "direction",
          "value": "up"
        }
      ],
      "note": {
        "es": "Soltá L2+R2 después del arrastre para el sprint inmediato.",
        "en": "Release L2+R2 after the drag for immediate sprint."
      }
    }
  },
  {
    "id": "lane-change-cancel",
    "name": {
      "es": "Cambio de Línea + Cancel",
      "en": "Lane Change Cancel"
    },
    "stars": 3,
    "category": "meta",
    "isNew": false,
    "animationType": "lateral-shift",
    "description": {
      "es": "Iniciá el cambio de línea y cancelá con L2+R2 para frenar en seco. Rompe completamente el tracking defensivo rival.",
      "en": "Initiate the lane change and cancel with L2+R2 to stop dead. Completely breaks defensive tracking."
    },
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
          "type": "direction",
          "value": "left"
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
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
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
          "type": "direction",
          "value": "left"
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
          "type": "text",
          "value": "+"
        },
        {
          "type": "text",
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "note": {
        "es": "Corriendo suave. Izquierda o derecha según la salida deseada.",
        "en": "While jogging. Left or right depending on desired exit."
      }
    }
  },
  {
    "id": "heel-flick-cancel",
    "name": {
      "es": "Toque de Talón + Cancel",
      "en": "Heel Flick Cancel"
    },
    "stars": 4,
    "category": "meta",
    "isNew": false,
    "animationType": "forward-flick",
    "description": {
      "es": "Iniciá el toque de talón y cancelá con L2+R2 antes de que el balón se eleve. Genera un amago brutal imposible de leer.",
      "en": "Start the heel flick and cancel with L2+R2 before the ball lifts. Creates an unreadable fake that freezes defenders."
    },
    "inputs": {
      "classic": [
        {
          "type": "stick",
          "value": "RS"
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
          "type": "stick",
          "value": "RS"
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
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "alternative": [
        {
          "type": "stick",
          "value": "RS"
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
          "type": "stick",
          "value": "RS"
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
          "value": "Cancelar"
        },
        {
          "type": "text",
          "value": "con"
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
          "value": "R2"
        }
      ],
      "note": {
        "es": "Corriendo suave. Cancelar justo antes de que el balón se eleve.",
        "en": "While jogging. Cancel just before the ball rises off the ground."
      }
    }
  }
];
