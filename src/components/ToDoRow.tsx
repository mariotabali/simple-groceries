import { Component } from 'react';
import { IonCol, IonInput, IonItem } from '@ionic/react';

interface IProps {
  id: string,
  quantity: number,
}
  
interface IState {
  text: string,
  quantity: number,
}

class ToDoRow extends Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        console.log({props: props});
        this.state = {
            text: '',
            quantity: props.quantity || 1,
        }
    }
    render() {
        return (
         <IonItem key={this.props.id} id={this.props.id}>
            <IonInput placeholder="quantity" type="number" />
        </IonItem>
        );
    }
}

export default ToDoRow;