
export interface Player {
  id: number;
  nombre: string;
  apellido: string;
  posicion: string;
  edad: number;
  altura: number;
  foto: string;
  video: string;
}
export const PLAYERS = [
  {
    id: 1,
    nombre: 'Alvaro',
    apellido: 'Martin',
    posicion: 'Base',
    edad: 24,
    altura: 1.88,
    foto: 'assets/players/alvaro.jpg',
    video: 'assets/videos/alvaro.mp4',
  },
  {
    id: 2,
    nombre: 'Diego',
    apellido: 'Navarro',
    posicion: 'Escolta',
    edad: 26,
    altura: 1.94,
    foto: 'assets/players/diego.jpg',
    video: 'assets/videos/diego.mp4',
  },
  {
    id: 3,
    nombre: 'Lucas',
    apellido: 'Herrera',
    posicion: 'Alero',
    edad: 23,
    altura: 2.01,
    foto: 'assets/players/lucas.jpg',
    video: 'assets/videos/lucas.mp4',
  },
  {
    id: 4,
    nombre: 'Mateo',
    apellido: 'Ruiz',
    posicion: 'Ala-pivot',
    edad: 28,
    altura: 2.06,
    foto: 'assets/players/mateo.jpg',
    video: 'assets/videos/mateo.mp4',
  },
  {
    id: 5,
    nombre: 'Pablo',
    apellido: 'Torres',
    posicion: 'Pivot',
    edad: 25,
    altura: 2.12,
    foto: 'assets/players/pablo.jpg',
    video: 'assets/videos/pablo.mp4',
  },
];

console.log(PLAYERS);