import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import PokemonItem from '../components/pokemon_list/PokemonItem';

const pokemonData = [
  { name: "フシギダネ", order: 1, type1: "grass", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { name: "フシギソウ", order: 2, type1: "grass", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
  { name: "フシギバナ", order: 3, type1: "grass", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
  { name: "ヒトカゲ", order: 4, type1: "fire", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { name: "リザード", order: 5, type1: "fire", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
  { name: "リザードン", order: 6, type1: "fire", type2: "flying", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
  { name: "ゼニガメ", order: 7, type1: "water", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { name: "カメール", order: 8, type1: "water", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
  { name: "カメックス", order: 9, type1: "water", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
  { name: "キャタピー", order: 10, type1: "bug", type2: null, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
  { name: "トランセル", order: 11, type1: "bug", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" },
  { name: "バタフリー", order: 12, type1: "bug", type2: "flying", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
  { name: "ビードル", order: 13, type1: "bug", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" },
  { name: "コクーン", order: 14, type1: "bug", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" },
  { name: "スピアー", order: 15, type1: "bug", type2: "poison", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" },
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          {pokemonData.map((pokemon, index) => (
            <PokemonItem
              key={index}
              name={pokemon.name}
              order={pokemon.order}
              type1={pokemon.type1}
              type2={pokemon.type2}
              url={pokemon.url}
            />
          ))}
        </IonList>
        {/* // <PokemonItem name="フシギダネ" order={1} type1="grass" type2="poison" url="https://pokeapi.co/api/v2/pokemon/1/" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
