import { Component } from 'react';
import ToDoRow from './ToDoRow';
import { IonButton, IonList } from '@ionic/react';
import { groceriesRef } from '../firebase';
import { child, get, onValue,set, ref } from "firebase/database";


interface IItem {
    field: string,
    value: number,
}

interface IProps {
    names: string [],

}
  
interface IState {
    items: IItem [],
}

class ToDoGrid extends Component <IProps, IState> {
    add = () => {
        this.setState(
            {
                items: [...this.state.items, {
                    field: 'A',
                    value: 4,
                }]
            }
            );
    };
    updateData = () => {
          set(groceriesRef, {
            username: 'asd',
            email: '111',
          });
        
    };
    itemChanged(event: any) {
      console.log(event.target.value)
    }
    componentDidMount() {
        onValue(groceriesRef, (snapshot) => {
            const data = snapshot;
            console.log(data.val());
          });
        this.updateData();
    }
    
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [{
                field: "B",
                value: 9,
            }],
        };
    }

    render() {
        return (
            <IonList>
                {
                    this.state.items.map((key) => (<ToDoRow
                        id={ key.field }
                        key={ key.field }
                        quantity = { key.value }
                        handleChange = { this.itemChanged }
                        />)
                    )
                }
                <IonButton onClick = {this.add} />
            </IonList>

        )
    }
}

export default ToDoGrid;