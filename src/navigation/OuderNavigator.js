import { TabNavigator } from 'react-navigation';
import KindDetails from '../pages/KindDetails';
import TakPage from '../pages/TakPage';
import KindNavigator from './KindNavigator';



const OuderNavigator = TabNavigator({
        Tak: {
            screen: TakPage
         }, 
        KindInfo: {
            screen: KindNavigator
        }, 
      /*   KindInfo: {
            screen: KindDetails
        },  */
       
});

export default OuderNavigator;
