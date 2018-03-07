import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';

import Tak from '../components/Tak'
import Groep from '../components/Groep'

/*  */
class OverviewPage extends Component {
   
    render() {
        {if(this.props.groepen!=null){
        return (

            <ScrollView>
               
               <Groep navigation={this.props.navigation}/>
              
             </ScrollView>
        ); }else{
            return (

                <ScrollView>
                   
                  
                    <Tak navigation={this.props.navigation} /> 
              
              
                 </ScrollView>
            );
        }
    }
}
}
const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        takken:state.tak.takken[0].takken,
        groepen:state.groep.groepen[0].groepen/* 
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
