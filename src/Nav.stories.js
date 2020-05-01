import React from 'react'
import { storiesof, storiesOf } from '@storybook/react'
import './Nav.css'

import Nav from './Nav'

storiesOf('Nav', module)
    .add('Nav', () => <Nav >
    </Nav>)

// const Nav = () => (<nav>
//     <header className="nav-header">
//         <Link to="/Home" className="nav-home">
//             Home
//             </Link>
//     </header>

// </nav>
// )

// export default Nav