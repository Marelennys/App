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
        </IonItem>
    );
}

export default Empleado;