import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ToDoRow from '../components/ToDoRow';
import { useState } from 'react';
import { IonCol, IonGrid, IonRow, IonInput, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [filas, setFilas] = useState(['0']);
  const addRow = () => {
    const newElement = filas.length.toString();
    setFilas(oldList => [...oldList, newElement]);
  };
  const submit = () => {
    const dato1 = document.getElementById('r1');
    console.log(dato1);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
