import { TabNavigator } from 'react-navigation';
import Secured from '../components/Secured';

import TakStack from './TakNavigator';

const Navigatorr = TabNavigator({
        LoggedIn: {
            screen: Secured
         },
        Overview: {
            screen: TakStack
        }, 
       
});

export default Navigatorr;
