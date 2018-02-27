import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, NetInfo, View, Button } from 'react-native';
import { logout } from '../redux/actions/auth';
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
            info: 'eee'
        };
    }
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
         ///////////////
       
        ////////////
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {`Welcome ${this.props.username}`}
                </Text>
                <View style={{margin: 20}}/>
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
                {/* <UserFillData/> */}
               <Text> {console.log(this.props.username)}</Text>
                 <NewTak login={this.props.username}/> 
            {/*    { this.takken().map((tak) => { return <NewKind idtak={tak.idtak}/>  })} */}

               {/* <Groep/> */}
              {/*  <Tak tak={this.props.takken[0]}/> */}
             {/*  <Text >{console.log(this.props.takken[0].naam)}</Text> */}
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        takken:state.tak.takken
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);