import { Component } from 'react';
import { IonButton, IonCol, IonInput, IonItem } from '@ionic/react';

interface IProps {
  id: string,
  quantity: number,
  handleChange: (evt: any) => void,
}
  
interface IState {
  text: string,
  quantity: number,
}

class ToDoRow extends Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            text: '',
            quantity: props.quantity || 1,
        }
    } 
    render() {
        return (
             <IonItem key={this.props.id} id={this.props.id}>
            <IonInput
              placeholder="quantity"
              type="number"
              onIonChange={this.props.handleChange} />
            <IonButton>Erase</IonButton>
        </IonItem>
        );
    }
}

export default ToDoRow;