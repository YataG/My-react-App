import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

//firebase imports
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function SongForm() {
  const [newSong, setNewSong] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //adding new documents
    const ref = collection(db, 'songs');

    await addDoc(ref, { title: newSong, uid: user.uid });
    //assigning a title and user id to each song that is added

    setNewSong('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new song title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewSong(e.target.value)}
          value={newSong}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
