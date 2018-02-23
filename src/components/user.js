import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

 class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }

  trips() {
      return Object.keys(this.props.trips).map(key => this.props.trips[key]);
    }
  
  render() {
      console.log(this.props);
    
      
    return (
      <View>
       <Text style={styles.titleText} >A list of all the trips: </Text>
        { this.trips().map((trip) => {
          return (
            <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('TripDetails', { trip })}
            >
              <Text key={trip.id}> {trip.text}</Text>
            </TouchableHighlight>
         );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    groepen: state.groepen // id's van groepen ophalen die in user zitten
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBetaling: (amount,user) => { dispatch(addBetaling(amount,user)); }
      }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(User);

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  titleText: {
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});
