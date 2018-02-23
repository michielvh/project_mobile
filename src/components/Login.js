import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, NetInfo, View, Button } from 'react-native';
import { login } from '../redux/actions/auth';
 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            info: [{}]
        };
    }
 
    
        //////////////////////

       /*  componentDidMount() {
            let data = this.getData();
            console.log(data);    // <-- Promise {_40: 0, _65: 0, _55: null, _72: null}
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(data),
            })  
          } */
        
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
      /*   NetInfo.isConnected.fetch().then(isConnected => {
            console.log(this.state.username);
            if (isConnected) {
                console.log(this.state.password);
                //fetch('https://medicamp-so.appspot.com/mobile/' + this.props.login, {method: 'GET' })
            fff=  fetch('http://10.0.2.2:8080/api/user/lala@hotmail.com')  
             .then(response => {
              //  setTimeout(() => null, 0);  // workaround for issue-6679
              //fff= response.json();
                return  response.json();
              })
               
            }
            console.log(this.state.info);
           console.log(fff);
        }); */
       
        ////////////
        let xx = [];
        /* const rrr= */ fetch("http://api.openweathermap.org/data/2.5/weather?zip=3000,be&APPID=2dc2cbd20785c5b0f3f4369eff39e16b", {method: 'GET' }
            /* const rrr= */// fetch("http://35.195.195.51:80/api/user/", {method: 'GET' }
       
    ).then(response => {
            return response.json();
             })
            .then( (data) => {
                this.setState({
                    info:data,
                  })
                  xx.push(data);
                  console.log(data);
            });
            console.log(this.state.info);
            console.log(xx);
        this.props.onLogin(this.state.username, this.state.password);
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
                <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
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