import SongList from '../components/SongList';
import SongForm from '../components/SongForm';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {
  const { user } = useAuthContext();
  const { documents: songs } = useCollection(
    'songs',
    //query for documents by the currently logged in user
    ['uid', '==', user.uid]
  );

  return (
    <div className="App">
      {songs && <SongList songs={songs} />}
      <SongForm />
    </div>
  );
}
