import { StackNavigator } from 'react-navigation';
import OuderKinderPage from '../pages/OuderKinderPage';
import OuderPage from '../pages/OuderPage';
import OuderNavigator from '../navigation/OuderNavigator';


const OuderStackNavigator = StackNavigator({
    OuderKinderPage: {
        screen: OuderKinderPage,
        navigationOptions: {
            title: 'Ouder Overview',
        },
    }, 
    OuderNavigator: {
        screen: OuderNavigator,
        navigationOptions: {
            title: 'Ouder Nav',
        },
     }, 
      OuderPage: {
        screen: OuderPage,
        navigationOptions: {
            title: 'Kind details',
        },
     }, 
   
});

export default OuderStackNavigator;
