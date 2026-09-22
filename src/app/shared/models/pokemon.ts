export interface Pokemon {
  // 5 properties
  id: number;
  name: string;
  // type 1 and 2 are both union types and type 2 is optional
  type1: | 'normal' | 'fire' | 'water' | 'grass' | 'electric' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying'
    | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';
  type2?: | 'normal' | 'fire' | 'water' | 'grass' | 'electric' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying'
    | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';
  baseExperience: number;
}
