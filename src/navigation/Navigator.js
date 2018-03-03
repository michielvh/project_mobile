import { TabNavigator } from 'react-navigation';
import Secured from '../components/Secured';
import OuderStackNavigator from '../navigation/OuderStackNavigator';
import TakStack from './TakNavigator';

const Navigatorr = TabNavigator({
        LoggedIn: {
            screen: Secured
         },
        Leiding: {
            screen: TakStack
        }, 
        Ouder: {
            screen: OuderStackNavigator
        }, 
       
});

export default Navigatorr;
