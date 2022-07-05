//firebase imports
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
//reference to doc to delete

export default function SongList({ songs }) {
  const handleClick = async (id) => {
    const ref = doc(db, 'songs', id);
    await deleteDoc(ref);
    //deletes the document from the collection when clicked
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => handleClick(song.id)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
