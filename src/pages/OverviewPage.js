import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, NetInfo, View, Button } from 'react-native';
import { logout } from '../redux/actions/auth';
import { addKinderen } from '../redux/actions/kind';
import { addTakken } from '../redux/actions/tak';
import { addGroepen } from '../redux/actions/groep';
import { addUser } from '../redux/actions/user';
import RNLocalNotifications from 'react-native-local-notifications';
import Tak from '../components/Tak'
import Groep from '../components/Groep'
//import  Groep  from './Groep';
//import UserFillData from '../addings/user';
//import TakkenFillData from '../addings/takken';
import NewTak from '../addings/NewTak';
import NewKind from '../addings/NewKind';
class OverviewPage extends Component {
   

   
        


        render() {
            {if(this.props.user.login.role!=1){
            return (
    
                <ScrollView>
                                       <Tak navigation={this.props.navigation} /> 
    
                  
                 </ScrollView>
            ); }else{
                return (
    
                    <ScrollView>
                       
                       <Groep navigation={this.props.navigation}/>
    
                  
                  
                     </ScrollView>
                );
            }
        }
    }
   
}
 
 
const mapStateToProps = (state) => {

    
        return {
            username: state.auth.username,
            token: state.auth.token,
            takken:state.tak.takken,
            kinderen:state.kind.kinderen,
            user:state.user.users,
         //   role:state.user.users.login.role
           



    }
   /*  return {
        username: state.auth.username,
        token: state.auth.token,
        takken:state.tak.takken,
        kinderen:state.kind.kinderen,
        user:state.user.users
    }; */
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
        addKinderen:(kinderen) => { dispatch(addKinderen(kinderen)); },
        addGroepen:(groepen) => { dispatch(addGroepen(groepen)); },
        addTakken:(takken) => { dispatch(addTakken(takken)); },
        addUser:(user) => { dispatch(addUser(user)); }

    }
}
 


export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);



/* import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';




class OverviewPage extends Component {
   
    render() {
        {if(this.props.role!=1){
        return (

            <ScrollView>
                                   <Tak navigation={this.props.navigation} /> 

              
             </ScrollView>
        ); }else{
            return (

                <ScrollView>
                   
                   <Groep navigation={this.props.navigation}/>

              
              
                 </ScrollView>
            );
        }
    }
}
}
const mapStateToProps = (state) => {
    if(state.user.users.login.role!=1){
        return {
            username: state.auth.username,
            takken:state.tak.takken[0].takken,
            role:state.user.users.login.role
            }}else{
    return {
        username: state.auth.username,
        takken:state.tak.takken[0].takken,
       groepen:state.groep.groepen[0].groepen,
       role:state.user.users.login.role}
        /* 
        kinderen:state.kind.kinderen,
        user:state.user.users 
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
      /*   onLogout: () => { dispatch(logout()); },
        addKinderen:(kinderen) => { dispatch(addKinderen(kinderen)); },
        addTakken:(takken) => { dispatch(addTakken(takken)); },
        addUser:(user) => { dispatch(addUser(user)); }
 
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage); */
