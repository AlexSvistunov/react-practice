
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Button({someText}){
    let [toggleState, toggleSetState] = useState(1);
    console.log(toggleState)
    const toggleTab = (index) => {
       toggleSetState(index)
    }
    return(
        <button className="work__btn" onClick={() => toggleTab(1)}>{someText}</button>
    )
}

Button.propTypes = {
    someText: PropTypes.string.isRequired,
};