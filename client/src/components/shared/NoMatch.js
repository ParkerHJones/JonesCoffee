// This is used solely for if user goes to a page that has no route 

import { Link } from 'react-router-dom';

const NoMatch = () => (
    <>
    <h2>Error: 404 page not found</h2>
    <Link to='/'>
        return home
    </Link>
    </>
)

export default NoMatch;