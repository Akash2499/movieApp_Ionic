import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import useApi from '../hooks/useApi';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  const { searchData } = useApi()

  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('Search: ' + searchTerm);
  }, [searchTerm]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar value={searchTerm} 
        onIonChange={(e) => setSearchTerm(e.detail.value!)}>          
        </IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Home;
