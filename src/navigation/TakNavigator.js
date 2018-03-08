import { StackNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import TakDetails from '../pages/TakDetails';
import KindDetails from '../pages/KindDetails';
import KindNavigator from '../navigation/KindNavigator';
import TakTabs from '../navigation/TakTabs';

const TakNavigator = StackNavigator({
    Overview: {
        screen: OverviewPage,
        navigationOptions: {
            title: 'Overview',
        },
    }, 
     TakTabs: {
        screen: TakTabs,
        navigationOptions: {
            title: 'Tak details',
        },
     },
     KindNavigator: {
        screen: KindNavigator,
        navigationOptions: {
            title: 'Kind details',
        },
     },/*
    AddTrip: {
        screen: AddTrip
    },
    NewExpense: {
        screen: BillForm
    } */
});

export default TakNavigator;
