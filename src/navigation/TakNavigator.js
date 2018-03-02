import { StackNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import TakDetails from '../pages/TakDetails';
import KindDetails from '../pages/KindDetails';

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
     KindDetails: {
        screen: KindDetails,
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
