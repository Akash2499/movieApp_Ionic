import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonModal, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import useApi, { DetailsResult } from '../hooks/useApi';
import { starHalfOutline } from 'ionicons/icons';

interface DetailsPageProps extends RouteComponentProps<{
    id: string;
}> {}

const Details: React.FC<DetailsPageProps> = ({match}) => { // Added async here

    const {getDetails} = useApi()
    const [information, setInformation] = useState<DetailsResult | null>(null);

    useIonViewWillEnter(() => {
        const fetchData = async () => {
            const id = match.params.id;
            const data = await getDetails(id);
            setInformation(data); // this will set the movie details in the state.
            console.log(data); // this will log the movie details in the console.
        };
        fetchData();
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot = "start">
                        <IonBackButton defaultHref='/movies'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {information && (
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{information.Title}</IonCardTitle>
                            <IonCardSubtitle>{information.Year}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonImg src={information.Poster}/>
                            <IonItem lines='none'>
                                <IonIcon icon = {starHalfOutline} slot='start' color='warning'/>
                                <IonLabel>{information.imdbRating}</IonLabel>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                )}

                <IonModal trigger='open-modal' initialBreakpoint={.25} breakpoints={[0,.25,.5,.75]}>
                    <IonContent className='ion-padding'>
                        Hello Modal
                    </IonContent>
                </IonModal>
            </IonContent>
            <IonFooter>
                <IonButton expand='full' id='open-modal'>Show More</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Details;
