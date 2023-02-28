import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className='header'>
            <h1>Events Dashboard!</h1>
            <button 
                onClick ={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
            > 
                Background Toggle
            </button>
        </div>
    );
};

export default Header;