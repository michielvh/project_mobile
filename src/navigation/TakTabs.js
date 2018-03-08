import { TabNavigator } from 'react-navigation';
import TakDetails from '../pages/TakDetails';
import TakTotalen from '../pages/TakTotalen';

const TakTabs = TabNavigator({
    TakDetails: {
        screen: TakDetails
     }, 
    Totalen: {
        screen: TakTotalen
    }, 
  
   
});

export default TakTabs;