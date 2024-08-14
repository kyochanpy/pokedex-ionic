import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import PokemonItem, { PokemonItemProps } from '../components/pokemon_list/PokemonItem';
import { fetchPokemonItemData } from '../services/PokemonList';
import { useEffect, useState } from 'react';

const Tab1: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonItemProps[]>([]);
  const [offsetNum, setOffsetNum] = useState<number>(0);
  const [isInf, setIsInf] = useState<boolean>(true);

  const fetchData = async () => {
    const newPokemons = await fetchPokemonItemData(offsetNum);
    if (newPokemons.length > 0) {
      setPokemons([...pokemons, ...newPokemons]);
      setOffsetNum(offsetNum + newPokemons.length);
    } else {
      setIsInf(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const loadMoreData = async (event: CustomEvent<void>) => {
    await fetchData();
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          {pokemons.map((pokemon, index) => (
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
        {isInf &&(
          <IonInfiniteScroll
            onIonInfinite={loadMoreData}
          >
            <IonInfiniteScrollContent></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
