import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Api = async(action:string,numero:number) => { 
  await fetch('http://192.168.1.131/'+action,{
    headers: {}
  });
}

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='nuevo'>
          <IonTitle color='light'>Alertas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light'>
      <IonButton onClick={()=> Api('llamadasos', 8)} color="dark" expand="block" size='large'>
        <h4>LLAMADA SOS</h4>
      <IonImg src='/assets/images/running-girl-svgrepo-com.png'></IonImg>
      </IonButton>
      <IonButton onClick={()=> Api('tocandopuerta', 6)} color="medium" expand="block" size='large'>
        <h4>TOCANDO PUERTA</h4>
      <IonImg src='/assets/images/door-svgrepo-com.png'></IonImg>
      </IonButton>
      <IonButton onClick={()=> Api('llamada',0)} color="light" expand="block" size='large'>
        <h4>VEN RLX</h4>
        <IonImg src='/assets/images/think-fast-fast-thinking-svgrepo-com.png'></IonImg>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
