import React, { useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonImg, IonButton } from '@ionic/react';
import './Tab2.css';

const Api = async(action:string,numero:number) => { 
  await fetch('http://192.168.1.142/?cmd=e',{
    headers: {}
  });
}

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='nuevo'>
          <IonTitle color='light'>Gatitos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light'>
      <IonButton onClick={()=> Api('llamadasos', 8)} color="dark" expand="block" size='large'>
        <h4>Abrir Puerta</h4>
      <IonImg src='/assets/images/bell.png'></IonImg>
      </IonButton>
       </IonContent>
    </IonPage>
  );
};

export default Tab2;
