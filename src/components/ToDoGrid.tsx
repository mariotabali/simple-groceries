import { Component } from 'react';
import ToDoRow from './ToDoRow';
import { IonButton, IonList } from '@ionic/react';

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
    constructor(props: IProps) {
        super(props);
        console.log("len" + props.names.length);
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
                    this.state.items.map((key) => (<ToDoRow id={key.field} key={key.field} quantity = {key.value}/>))
                }
                <IonButton onClick = {this.add} />
            </IonList>

        )
    }
}

export default ToDoGrid;