import { Component } from 'react';
import axios from 'axios'; 
import MenuForm from './MenuForm';

class Cafe extends Component {
    state = { menus: [] }

    componentDidMount () {
        // grabs menus from db //sets to state 
        axios.get('/api/menus')
         .then ( res => {
             this.setState({ menus: res.data })
         })
         .catch( err => {
             console.log(err);
         })
    }

    addMenu = () => {
        //add to the db
        axios.get('/api/menus',  { menu }) // needs to pass menu to know what to create
        //ad to the state
        .then(res => {
            const { menus } = this.state;
            this.setState({ menus: [...menus, res.data]}) 
        })
        .catch( err => {
            console.log(err);
        })
    }

    updateMenu = (id, menu) => {
        // update to the db
    }

    deleteMenu = (id) => {
        // delete in the db
        // delete in the state
    }

    render() {
        return (
            <>
            <h1> The Cafe </h1>
            <MenuForm addMenu={this.addMenu} />
            </>
        )
    }
}

export default Cafe; 