import { PokemonItemProps } from "../components/pokemon_list/PokemonItem";
import { supabase } from "./supabase";

interface PokemonItemData {
  order: number;
  name: string;
  dot_image_key: string;
  types: string[];
}

const fetchDotImageUrl = async (dotImageKey: string): Promise<string> => {
  const {data} = await supabase.storage.from('images').getPublicUrl('dot/' + dotImageKey);
  return data.publicUrl;
}

const toProps = (data: PokemonItemData, publicUrl: string): PokemonItemProps => {
  return {
    order: data.order,
    name: data.name,
    url: publicUrl,
    type1: data.types[0],
    type2: data.types[1] || null,
  };
}


export const fetchPokemonItemData = async (offsetNum: number): Promise<PokemonItemProps[]> => {
  const {data, error} = await supabase.rpc('list_pokemons', {'offset_num': offsetNum});

  if (error) {
    console.error('Error fetching pokemons with types:', error);
    return [];
  }
  const pokemonItemData = data as PokemonItemData[];
  console.log(pokemonItemData);

  const pokemonItemProps = await Promise.all(pokemonItemData.map(async (data) => {
    const publicUrl = await fetchDotImageUrl(data.dot_image_key);
    return toProps(data, publicUrl);
  }));

  return pokemonItemProps;
}


// 上の関数の動作を試したい
// fetchPokemonItemData().then((data) => {
//   console.log(data);
// });
// fetchDotImageUrl('rapidash.png').then((data) => {
//     console.log(data);
//   });
// コマンド教えて
// npx ts-node src/services/PokemonList.ts