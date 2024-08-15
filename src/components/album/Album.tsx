import React from "react";

import './Album.css';
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";

export interface PhotoProps {
  name: string;
  datetime: Date;
  address: string;
  url: string;
}

const mockData: PhotoProps[] = [
  {
    name: 'photo1',
    datetime: new Date(),
    address: 'Tokyo',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo2',
    datetime: new Date(),
    address: 'Osaka',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo3',
    datetime: new Date(),
    address: 'Kyoto',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo4',
    datetime: new Date(),
    address: 'Hokkaido',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo5',
    datetime: new Date(),
    address: 'Okinawa',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo6',
    datetime: new Date(),
    address: 'Kagoshima',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo7',
    datetime: new Date(),
    address: 'Fukuoka',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo8',
    datetime: new Date(),
    address: 'Nagasaki',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo9',
    datetime: new Date(),
    address: 'Kumamoto',
    url: 'https://via.placeholder.com/150'
  },
  {
    name: 'photo10',
    datetime: new Date(),
    address: 'Miyazaki',
    url: 'https://via.placeholder.com/150'
  },
];


const Album: React.FC = () => {
  // console.log(type1Class);
  return (
    <IonGrid>
      <IonRow>
        {mockData.map((photo, index) => (
          <IonCol className="photo" size="4" key={index}>
            {/* <IonImg src={photo.url}/> */}
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
}

export default Album;