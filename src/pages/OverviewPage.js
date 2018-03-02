import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';

import Tak from '../components/Tak'
/*  */
class OverviewPage extends Component {
   
    render() {
        return (
            <ScrollView>
               
                <Tak navigation={this.props.navigation} />
            {/*     <Trips navigation={this.props.navigation} />
                <Button 
                    title='Add a new trip' 
                    onPress={() => this.props.navigation.navigate('AddTrip')} 
                    navigation={this.props.navigation}
                /> */}
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        takken:state.tak.takken,/* 
        kinderen:state.kind.kinderen,
        user:state.user.users */
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
      /*   onLogout: () => { dispatch(logout()); },
        addKinderen:(kinderen) => { dispatch(addKinderen(kinderen)); },
        addTakken:(takken) => { dispatch(addTakken(takken)); },
        addUser:(user) => { dispatch(addUser(user)); }
 */
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
