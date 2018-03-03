import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button,ListView, FlatList } from 'react-native';

class KindVoogdPage extends Component {
    voogden(x){
       
      return Object.keys(x).map(key => x[key]);
    }
 

    render() {
        const { params } = this.props.navigation.state;
        const kind = params ? params.kind : null;
      
          return (
            <ScrollView>
                  { this.voogden(kind.voogden).map((voogd) => {
             
          return (
            <TouchableHighlight 
            /*   onPress={() => this.props.navigation.navigate('KindNavigator', { kind })} */
            //HIER ALERT ONPRESS MET INFO VOOGD
            >
              <Text  key={voogd.idvoogd}> {voogd.naam}</Text>
            </TouchableHighlight>
         );
        })}
            {/*   <FlatList
              data={kind.voogden}
              renderItem={(item) => <Text>{item.naam}</Text>}
            /> */}
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindVoogdPage);
