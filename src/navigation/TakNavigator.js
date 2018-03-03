import { StackNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import TakDetails from '../pages/TakDetails';
import KindDetails from '../pages/KindDetails';
import KindNavigator from '../navigation/KindNavigator';

const TakNavigator = StackNavigator({
    Overview: {
        screen: OverviewPage,
        navigationOptions: {
            title: 'Overview',
        },
    }, 
     TakDetails: {
        screen: TakDetails,
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
