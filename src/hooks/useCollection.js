import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase/config';

//firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  //set up query
  const q = useRef(_q).current;

  //real-time data updating
  //cycling through objects and inserting the new object in the array
  useEffect(() => {
    let ref = collection(db, c);
    //only getting certain items from the collection
    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      //updating document with new results
      setDocuments(results);
    });
    return () => unsub();
  }, [c]);

  return { documents };
};
