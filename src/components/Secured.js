import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, NetInfo, View, Button } from 'react-native';
import { logout } from '../redux/actions/auth';
import { addKinderen } from '../redux/actions/kind';
import { addTakken } from '../redux/actions/tak';
import { addGroepen } from '../redux/actions/groep';
import { addUser } from '../redux/actions/user';
import RNLocalNotifications from 'react-native-local-notifications';

//import  Groep  from './Groep';
import  Tak  from './Tak';
//import UserFillData from '../addings/user';
//import TakkenFillData from '../addings/takken';
import NewTak from '../addings/NewTak';
import NewKind from '../addings/NewKind';
class Secured extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
            username: '',
            password: '',
            info: 'eee',
            takken: []
        };
    }

    componentDidMount() {
        console.log(this.props.token);
     
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log(this.state.username);
            if (isConnected) {
                console.log(this.state.password);
                fetch('https://medicamp-so.appspot.com/api/'+ this.props.username+'/mobiel_test', {method: 'GET', headers : {
                        'Authorization': this.props.token
                    } })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ takken: responseData
                        
                         });
                }).then(() => {
                    this.initStatee();
                });
               
               
            }
          
        }); 
       
        }

        initStatee(){
            if(this.state.takken.groepen!=null){
                this.props.addGroepen(this.state.takken.groepen);
            }
            this.props.addKinderen(this.state.takken.kinderen);
            this.props.addTakken(this.state.takken.takken);
            this.props.addUser(this.state.takken.user);
        }
        


    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
         ///////////////
       console.log(this.state.takken);
     
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {`Welcome ${this.props.username}`}
                </Text>
                <View style={{margin: 20}}/>
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
                {/* <UserFillData/> */}
               <Text> {console.log(this.props.username)}</Text>
               <Text> {console.log(this.props.kinderen)}</Text>
               <Text> {console.log(this.props.takken)}</Text>
               <Text> {console.log(this.props.user)}</Text>

               
               <Button onPress={() => this.initStatee()} title="Initialize"/>
              
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        token: state.auth.token,
        takken:state.tak.takken,
        kinderen:state.kind.kinderen,
        user:state.user.users
    };
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);