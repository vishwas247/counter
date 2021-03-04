import React from "react";
import {TouchableHighlight, View, Text, Button, Dimensions, FlatList } from "react-native";
import { connect } from "react-redux";

class Home extends React.Component {

 componentDidMount(){
    this.props.increaseCount()
    this.props.decreaseCount()
 }

  render() {
    return (
        <View>
        <TouchableHighlight onPress={() => this.props.increaseCount()}>
          <Text>Increase Count</Text>
        </TouchableHighlight>

        <Text>{this.props.count}</Text>

        <TouchableHighlight onPress={() => {console.log('hellow'),this.props.decreaseCount()}}>
          <Text>Decrease Count</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
      count:state.currentCount
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      increaseCount: () => {dispatch({type:'count/increaseCount'})},
      decreaseCount: () => {dispatch({type:'count/decreaseCount'})}
  
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
