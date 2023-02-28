import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 1000; 

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => { //event handler function
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className='note new'>
            <textarea 
                rows='8' 
                cols='10' 
                placeholder='Please add the following information when adding a new event: Name: , Event Type: , Permission: , Start Time: , End Time: , Description: , Speaker Names: , Public URL: , Private URL: , Related Events:'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} characters remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;