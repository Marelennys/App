import React, { useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab2.css';

import { Person} from '../models/person.model';
import Empleado, {} from '../components/Empleado'

const Tab2: React.FC = () => {

const [people, setPeople] = useState<Person[]>([]);

useIonViewDidEnter(async () => {
  const result = await fetch('https://tinyfac.es/api/data?limit=25&quality=0',{
    headers: {}
  });
const data = await result.json();
setPeople(data);

})

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {people.map((person, idx) => <Empleado key={idx} person={person} />)}
        </IonList>
       </IonContent>
    </IonPage>
  );
};

export default Tab2;
