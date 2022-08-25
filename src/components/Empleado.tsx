import React from "react";
import { IonItem, IonAvatar, IonLabel} from '@ionic/react';
import { Person } from "../models/person.model";

import './Empleado.css';

const Empleado: React.FC<{person: Person}> = ({person}) => {
    return (
        <IonItem class="border-item">
            <IonAvatar slot="start">
                <img src={person.url} />
            </IonAvatar>
            <IonLabel>
                <h2>{person.first_name} {person.last_name}</h2>
                <p>{person.gender}</p>
            </IonLabel>
        </IonItem>
    );
}

export default Empleado;