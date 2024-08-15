import { IonGrid, IonRow, IonCol, IonChip, IonLabel, IonImg, IonText, IonCard, IonCardContent } from '@ionic/react';
import './PokemonItem.css'
import '../types/Types.css'
import {getTypesClass, getTypeNameJa} from '../types/Types';

export interface PokemonItemProps {
  name: string;
  order: number;
  type1: string;
  type2: string | null;
  url: string;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, order, type1, type2, url }) => {
  const paddedOrder = order.toString().padStart(4, '0');
  const type1Class = getTypesClass(type1);
  const type2Class = getTypesClass(type2 || '');
  // console.log(type1Class);
  return (
    <IonCard className='pokemon-item-card'>
      <IonGrid className='pokeomn-item-grid'>
        <IonRow className='pokeomn-item-row'>
          <IonCol size='1' className='pokeomn-item-col'>
            <IonText className='order-text'>{paddedOrder}</IonText>
          </IonCol>
          <IonCol size='3' className='pokeomn-item-col'>
            <IonImg src={url} alt="フシギダネ" />
          </IonCol>
          <IonCol size='8' className='pokeomn-item-col'>
            <IonGrid className='pokeomn-item-grid'>
              <IonRow className='pokeomn-item-row'>
                <IonCol size='12' className='types-col pokeomn-item-col'>
                  <IonChip className={type1Class}>
                    <IonLabel>{getTypeNameJa(type1)}</IonLabel>
                  </IonChip>
                  {type2 && (
                    <IonChip className={type2Class}>
                      <IonLabel>{getTypeNameJa(type2)}</IonLabel>
                    </IonChip>
                  )}
                </IonCol>
                <IonCol size='12' className='name-col pokeomn-item-col'>{name}</IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
}

export default PokemonItem;
