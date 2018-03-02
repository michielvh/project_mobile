import { TabNavigator } from 'react-navigation';
import KindAlgemeenPage from '../pages/KindAlgemeenPage';
import KindVoogdPage from '../pages/KindVoogdPage';
import KindZiektePage from '../pages/KindZiektePage';
import KindDieetPage from '../pages/KindDieetPage';
import KindMedicatiePage from '../pages/KindMedicatiePage';


const KindNavigator = TabNavigator({
        Algemeen: {
            screen: KindAlgemeenPage
         }, 
        Voogden: {
            screen: KindVoogdPage
        }, 
        Ziektes: {
            screen: KindZiektePage
         },
        Dieeten: {
            screen: KindDieetPage
        }, 
        Medicaties: {
            screen: KindMedicatiePage
        }, 
       
});

export default KindNavigator;
