import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
import KindNavigator from '../navigation/KindNavigator';

class KindDetails extends Component {
    
    constructor(props) {
        super(props);
       
    }

    render() {
        console.log(this.props.navigation.state);
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
      const x=this.props.kind;
      console.log(x);
          return (
              <KindNavigator kind={kind} />
              
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindDetails);
