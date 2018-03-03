import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button,View } from 'react-native';
import Ziekte from '../components/Ziekte'
class KindZiektePage extends Component {
    
    constructor(props) {
        super(props);
       
    }

    ziektes(x){
       
        return Object.keys(x).map(key => x[key]);
      }
  
  
      render() {
          const { params } = this.props.navigation.state;
          const kind = params ? params.kind : null;
        
            return (
              <ScrollView>
                    { this.ziektes(kind.ziektes).map((ziekte) => {
               
            return (
                <View>

           
               <Ziekte ziekte={ziekte} />
               </View>
           );
          })}
            </ScrollView>
         );
        }
}

const mapStateToProps = (state) => {
    return {
     
    };
};
 
export default connect(mapStateToProps)(KindZiektePage);
