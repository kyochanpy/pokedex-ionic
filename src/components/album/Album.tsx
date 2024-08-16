import React, { useRef, useState } from "react";

import './Album.css';
import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonRow, IonText } from "@ionic/react";

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
    url: 'https://via.placeholder.com/200'
  },
  {
    name: 'フシギダネ',
    datetime: new Date(),
    address: 'Miyazaki',
    url: 'https://cdn.pixabay.com/photo/2023/11/01/11/15/cable-car-8357178_640.jpg'
  },
  {
    name: 'ヒトカゲ',
    datetime: new Date(),
    address: 'Miyazaki',
    url: 'https://cdn.pixabay.com/photo/2024/08/05/21/19/lion-8947711_1280.jpg'
  },
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
    url: 'https://via.placeholder.com/200'
  },
  {
    name: 'photo10',
    datetime: new Date(),
    address: 'Miyazaki',
    url: 'https://cdn.pixabay.com/photo/2023/11/01/11/15/cable-car-8357178_640.jpg'
  },
  {
    name: 'photo10',
    datetime: new Date(),
    address: 'Miyazaki',
    url: 'https://cdn.pixabay.com/photo/2024/08/05/21/19/lion-8947711_1280.jpg'
  },
];


const Album: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoProps | null>(null);
  const startYRef = useRef(0);

  const modal = useRef<HTMLIonModalElement>(null);

  const openModal = (photo: PhotoProps) => {
    setSelectedPhoto(photo);
    modal.current?.present();
  }

  const dismiss = () => {
    modal.current?.dismiss();
    setSelectedPhoto(null);
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    if (startYRef.current && currentY - startYRef.current > 50) {
      dismiss();
    }
  };

  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          {mockData.map((photo, index) => (
            <IonCol className="photo-col" size="4" key={index}>
              <IonImg src={photo.url} className="photo" onClick={() => {openModal(photo)}}/>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      <IonModal className="photo-modal" ref={modal} onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
        <IonContent className="photo-modal-content"
        >
          {selectedPhoto && (
            <IonGrid  className="photo-modal-grid">
              <IonRow  className="photo-modal-row">
                <IonCol className="photo-modal-top-pad"></IonCol>
                <IonCol className="photo-modal-name">{selectedPhoto?.name}</IonCol>
                <IonCol className="photo-modal-datetime">{selectedPhoto?.datetime.getFullYear() + "-" + selectedPhoto?.datetime.getMonth() + "-" + selectedPhoto?.datetime.getDate()}</IonCol>
                <IonCol className="photo-modal-address">{selectedPhoto?.address}</IonCol>
                <IonCol className="photo-modal-photoframe">
                  <IonImg className="photo-modal-photo" src={selectedPhoto?.url} />
                </IonCol>
                <IonCol className="photo-modal-bottom-pad"></IonCol>
              </IonRow>
            </IonGrid>
          )}
        </IonContent>
      </IonModal>
    </IonContent>
  );
}

export default Album;