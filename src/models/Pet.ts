import { TSpecie } from '../types/TSpecie';

interface IPets {
  specie: TSpecie;
  image: string;
  name: string;
  color: string;
  sex: 'Masculino' | 'Feminino';
}

const pets: IPets[] = [
  {
    specie: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'Masculino',
  },
  {
    specie: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    sex: 'Masculino',
  },
  {
    specie: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    sex: 'Feminino',
  },
  {
    specie: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    sex: 'Masculino',
  },
  {
    specie: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    sex: 'Masculino',
  },
  {
    specie: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    sex: 'Feminino',
  },
  {
    specie: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    sex: 'Masculino',
  },
  {
    specie: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    sex: 'Masculino',
  },
  {
    specie: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    sex: 'Masculino',
  },
  {
    specie: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    sex: 'Feminino',
  },
  {
    specie: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    sex: 'Masculino',
  },
  {
    specie: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    sex: 'Masculino',
  },
  {
    specie: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    sex: 'Masculino',
  },
  {
    specie: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    sex: 'Masculino',
  },
  {
    specie: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    sex: 'Masculino',
  },
  {
    specie: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    sex: 'Masculino',
  },
  {
    specie: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    sex: 'Masculino',
  },
];

export const Pet = {
  getAll(): IPets[] {
    return pets;
  },
  getBySpecie(specie: TSpecie) {
    return pets.filter((pet) => pet.specie === specie);
  },
  getByName(text: string) {
    return pets.filter((pet) =>
      pet.name.toLowerCase().includes(text.toLowerCase())
    );
  },
};
