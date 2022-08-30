import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonImg } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='nuevo'>
          <IonTitle color='light'>OkumareApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light'>
        <img src='/assets/images/Recurso5.png'></img>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
