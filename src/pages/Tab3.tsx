import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton onClick={()=> Api('llamadasos', 8)} color="danger" expand="block">LLAMADA SOS</IonButton>
      <IonButton onClick={()=> Api('tocandopuerta', 6)} color="success" expand="block">TOCANDO PUERTA</IonButton>
      <IonButton onClick={()=> Api('llamada',0)} color="warning" expand="block">VEN RLX</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
