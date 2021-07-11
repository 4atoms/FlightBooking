import React, {useState} from 'react'

import Modal_final from './index'

/*Explain:
Line 11: Use useState to manage show value. The value is false by default. If you’re not familiar with it, please read the docs here.
Line 14: Handle click button to update show value to true which means we show the modal.*/


const App = props =>{
    const[show, setshow] = useState(false)
    return (
        <apps>
            <button onClick = {() => setshow(true)}>Flight details</button>
            <Modal_final onClick = {() => setshow(False)} show={show}/>
            <Modal/>
        </apps>
        
    )
}

export default App
