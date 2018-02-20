
import React, { Component } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';

class APICALL extends Component {
    constructor(props) {
        super(props);
        this.state = {
           info:{}
            

        }
    }


 getInfo() {
    NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                //fetch('https://medicamp-so.appspot.com/mobile/' + this.props.login, {method: 'GET' })
                fetch('https://medicamp-so.appspot.com/mobile/' + this.props.login, {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ info: responseData.info });
                })
                .done();  
            }
        });
    }
}

const mapStateToProps = (state) => {
    return { 
       // currencies: state.allCurrencies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       // selectCurrency: (base) => { dispatch(selectCurrency(base)); }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(APICALL);