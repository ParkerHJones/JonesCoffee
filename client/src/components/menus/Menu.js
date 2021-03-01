import axios from 'axios';
import { Component } from 'react';
import Items from '../items/Items';
import axios from 'axios';

class Menu extends Component  {
 state = { id: 0, title: '', created_at: '', updated_at: '' }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/menus/${id}`)
        .then( res => {
            this.setState({ ...res.data })
        })
        .catch( err =>  {
            console.log(err);

        })
    }

    render () {
        const { id, title, updated_at } = this.state
        return(
            // <Items menuId={this.props.id} />
            <>
            <h1>{title}</h1>
            <h5>{updated_at}</h5>
            </>
        )
    }
}

export default Menu;