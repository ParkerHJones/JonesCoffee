import { Component } from 'react';
import axios from 'axios'; 

class Cafe extends Component {
    state = { menus: [] }

    componentDidMount () {
        // grabs menus from db //sets to state 
    }

    addMenu = () => {
        //add to the db
        //ad to the state
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
            </>
        )
    }
}

export default Cafe; 