import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, NetInfo, View, Button } from 'react-native';
import { login } from '../redux/actions/auth';
import { fixTokenAction } from '../redux/actions/auth';

import NewTak from '../addings/NewTak';
import { getLijstTakkenFromAPI } from '../methodes/tak';
import axios from 'axios';
import NotificationsAndroid from 'react-native-notifications';
import  PushNotification  from 'react-native-push-notification';
import RNLocalNotifications from 'react-native-local-notifications';


 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            info: [{}],
            takken:[],
            token: ''
        };
     /*  var  details = NotificationsAndroid.localNotification({
          message: 'hello',
          //  fireDate: "2018-03-06 01:20:00",
           // date: new Date(Date.now()+(100 * 1000))
            date: new Date('2018-03-06T04:25:00')
        });
        console.log(details); */

        //RNLocalNotifications.createNotification(id, text, datetime, sound);
//RNLocalNotifications.createNotification(1, 'Some text', '2018-03-06 03:54', 'default');
       // var PushNotification = require('react-native-push-notification');

     /*    PushNotification.localNotificationSchedule({  message: 'hello',
        //  fireDate: "2018-03-06 01:20:00",
          date: new Date(Date.now()+(5 * 1000))});
 */
    }
    /*  showDelayedNotification () {
        
        var xx = new Date(Date.UTC(2018, 2, 6, 11, 19, 40)); //-1 maand (januari 1970)
       // var myVarr = xx.valueOf();
        PushNotification.localNotificationSchedule({
          message: 'Hello World!',
          date: new Date( xx),
          soundName: 'pillen.mp3'
        });
        var xxx = new Date(Date.UTC(2018, 2, 6, 11, 19, 10)); //-1 maand (januari 1970)

        PushNotification.localNotificationSchedule({
            message: 'Hello World!!!!!',
            date: new Date( xxx),
            soundName: 'pillen.mp3'
          });

        var birthday = new Date(xx);
        var dag = birthday.getDate();
        var maand = birthday.getMonth();
        var jaar = birthday.getFullYear();
        var hours = birthday.getHours();
        var minutes = birthday.getMinutes();
        var seconds = birthday.getSeconds();
       // console.log(date1);
        console.log(Date.now());
        console.log(xx.valueOf());
        console.log(new Date(xx)); */
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
        //CHECK VOOR CONVERSION EN DAN DATE.UTC(JAAR,MAAND-1,DAG,...)
     // }
    
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
     /*      fixToken(){
            var x='';
            axios.post('https://medicamp-so.appspot.com/api/auth/login', {
                login: this.state.username,
                password: this.state.password
            }).then((response)=>{
              // x= response.headers.authorization;
               this.setState({token: response.headers.authorization})
            });
          } */
        

        userLogin (e) {
            NetInfo.isConnected.fetch().then(isConnected => {
                console.log(this.state.username);
                if (isConnected) {
            axios.post('https://medicamp-so.appspot.com/api/auth/login', {
            login: this.state.username,
            password: this.state.password
        })
        .then((response) => {
           this.setState({token: response.headers.authorization})
           
        })
        .then((response) => {
            axios.get('https://medicamp-so.appspot.com/api/'+this.state.username+'/mobiel_test', {
                headers: {
                    Authorization: this.state.token
                }
            });
         
        }).then((response) => {
            this.props.onLogin(this.state.username, this.state.password,this.state.token);
        });
    }});
            /////////////
        var fff;
     //   this.props.onGetToken(this.state.username, this.state.password);
       console.log(this.state.route);
        console.log(this.state.username);
        
    
                        
        console.log(this.state.token);
        //console.log(x);
       //this.props.onLogin(this.state.username, this.state.password,this.state.token); //// HIER this.STATE.token
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
        /* var x = new Date(Date.UTC(118, 3, 6, 5, 46, 0));
        var myVar = x.valueOf(); 
        PushNotification.localNotificationSchedule({  message: 'hello',
        //  fireDate: "2018-03-06 01:20:00",
          date: new Date(Date.now()-Date.now()+myVar)});
 */
         // RNLocalNotifications.createNotification(1, 'Some text', '2018-03-06 03:55', 'default');

/* 
        var PushNotification = require('react-native-push-notification');
        PushNotification.localNotificationSchedule(details); */

      /*   PushNotification.configure({
        
         
            
        
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
        
                // process the notification
            
            },
        
         
          
        
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
        
        });

        PushNotification.localNotification({
          
            id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
            ticker: "My Notification Ticker", // (optional)
            autoCancel: true, // (optional) default: true
            largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
            smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
            bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
            subText: "This is a subText", // (optional) default: none
            color: "red", // (optional) default: system default
            vibrate: true, // (optional) default: true
            vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            tag: 'some_tag', // (optional) add tag to message
            group: "group", // (optional) add group to message
            ongoing: false, // (optional) set whether this is an "ongoing" notification
        
           
        
           
            title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
            message: "My Notification Message", // (required)
            playSound: false, // (optional) default: true
            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
            number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
            repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
            actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
        }); */
       /*  PushNotification.localNotificationSchedule({
            message: "My Notification Message", // (required)
            date: new Date("2018-03-06T1:40:00") // in 60 secs
          });
 */



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
              
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        token:state.auth.token
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, token) => { dispatch(login(username, password, token)); },
        onGetToken: (username, password) => { dispatch(fixTokenAction(username, password)); },
      
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);