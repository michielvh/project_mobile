import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, NetInfo, View, Button } from 'react-native';
import { login } from '../redux/actions/auth';
import NewTak from '../addings/NewTak';
import { getLijstTakkenFromAPI } from '../methodes/tak';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            info: [{}],
            takken:[]
        };
    }
 
    
        //////////////////////

         
           
        
          /* async */ /* getData() {
            const response =  fetch("http://10.0.2.2:8080/api/user/lala@hotmail.com", {
                    method: 'GET'/* ,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }   */ 
           /*      }); 
            const jsonn =  response.json();
            console.log(jsonn);     // <-- (5) [Object, Object, Object, Object, Object]
            return jsonn;
          }  */

        ///////////////
        userLogin (e) {
            /////////////
        var fff;
       console.log(this.state.route);
        console.log(this.state.username);
        
        
                        
     
        this.props.onLogin(this.state.username, this.state.password);
       console.log(this.state.takken);
        e.preventDefault();
    
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>{this.state.route}</Text>
                <TextInput 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title={this.state.route} />
                <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
      
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);