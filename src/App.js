import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "Event 1 => Name: Opening Ceremonies, Event Type: Ceremony, Permission: Public, Start Time: 9:00 PM EST, End Time: 11:00 PM EST, Description: Lazardis Hall, Speaker Names: Sponsors and Organizing Team, Public URL: https , Private URL: https , Related Events: Closing Ceremonies",
        date: "22/02/2023",
      },
      {
        id: nanoid(),
        text: "Event 2 => Name: API Walkthrough, Event Type: Workshop, Permission: Private, Start Time: 1:30 AM EST, End Time: 2:00 AM EST, Description: Room 4C , Speaker Names: CockroachDB, Public URL: https , Private URL: https , Related Events: Workshops",
        date: "23/02/2023",
      },
      {
        id: nanoid(),
        text: "Event 3 => Name: Silent Disco, Event Type: Social, Permission: Public, Start Time: 10:30 PM EST, End Time: 1:00 AM EST, Description: Design Bay, Speaker Names: N/A, Public URL: https , Private URL: https , Related Events: Fire Noodles",
        date: "24/02/2023",
      },
      {
        id: nanoid(),
        text: "Event 4 => Name: Hackathon Organizers Meetup, Event Type: Networking, Permission: Private, Start Time: 11:00 PM EST, End Time: 12:00 AM EST, Description: Empowerment Lounge, Speaker Names: N/A, Public URL: https: , Private URL: https: , Related Events: Other Meetup Events",
        date: "25/02/2023",
      },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  
      if (savedNotes){
          setNotes(savedNotes);
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text, 
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
  }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList 
                    notes={notes.filter((note) => 
                        note.text.toLowerCase().includes(searchText)
                    )} 
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                /> 
            </div>
        </div>

    );
};

export default App;