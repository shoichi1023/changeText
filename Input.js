import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Input_style';
import * as actions from './changeTextActions';

class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>『 {this.props.out_text} 』</Text>
        <TextInput style={ styles.txtIn } onChangeText={ (text) => { this.props.editText(text) } } />
        <TouchableOpacity style={styles.tOpa} onPress={ () => { this.props.pressBtn(); } }>
          <Text style={styles.btnTxt}>変更</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => state.ct;
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Input);