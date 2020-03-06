import React, { Component } from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const ENDPOINT = 'http://localhost:9000/scorecard';

class Scorecard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCorrect: 0
        }
    }

    async componentDidMount() {
        await axios.get(ENDPOINT)
            .then(r => this.setState({
                totalCorrect: r.data
            }))
            console.log('line 20');
            console.log(this.state.totalCorrect);
    }
    
    render() {
        // console.log(this.state.array[0].attemptcorrect)
        // console.log(this.state.array[0].attemptcorrect)
        return (
            <View>
                <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'green', backgroundColor: 'black'}}>This is SCORECARD!</Text>
                <View>
                    
                    {/* {this.state.array.length > 0 && this.state.array.map(item => <Text>{JSON.stringify(item.attemptcorrect)}</Text>)} */}
                    <Text>{this.state.totalCorrect}%</Text>
                </View>
            </View>
        );
    }
}

export default Scorecard