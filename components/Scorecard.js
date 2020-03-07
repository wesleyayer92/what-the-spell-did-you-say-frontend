import React, { Component } from 'react'
import { Image, Text, View, FlatList, ImageBackground, StyleSheet } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const ENDPOINT = 'http://localhost:9000/scorecard';
const img = 'http://q-s-i.org/wp-content/uploads/2014/04/wrinkled_paper_texture__by_christianluannstock-d36jws6.jpg';

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
            <ImageBackground source={{uri: img}} style={{flex: 1}}>
                <Text style={styles.header}>
                    {`TEST RESULTS!\n`}
                </Text>
                <View>
                    {/* {this.state.array.length > 0 && this.state.array.map(item => <Text>{JSON.stringify(item.attemptcorrect)}</Text>)} */}
                    <Text style={styles.subheader}>
                        {`LIFETIME CORRECT:\t`}
                        <Text style={styles.score}>{this.state.totalCorrect}%</Text>
                    </Text>
                </View>


                {/* just looking at different fontfamilies */}
        {/* <Text style={{fontFamily: 'Bradley Hand'}}>Bradley Hand </Text>
        <Text style={{fontFamily: 'BradleyHandITCTT-Bold'}}>BradleyHandITCTT-Bold </Text>
        <Text style={{fontFamily: 'Chalkboard SE'}}>Chalkboard SE </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Bold'}}>ChalkboardSE-Bold </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Light'}}>ChalkboardSE-Light </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Regular'}}>ChalkboardSE-Regular </Text>
        <Text style={{fontFamily: 'Chalkduster'}}>Chalkduster </Text>
        <Text style={{fontFamily: 'Chalkduster'}}>Chalkduster </Text>
        <Text style={{fontFamily: 'Noteworthy'}}>Noteworthy </Text>
        <Text style={{fontFamily: 'Noteworthy-Bold'}}>Noteworthy-Bold </Text>
        <Text style={{fontFamily: 'Noteworthy-Light'}}>Noteworthy-Light </Text> */}
        
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20, 
        fontFamily: 'Noteworthy-Bold',
        textAlign: 'center',
        fontSize: 30, 
        color: 'black', 
        textDecorationLine: 'underline'
    },
    subheader: {
        marginLeft: 10, 
        fontFamily: 'Bradley Hand', 
        fontSize: 25
    },
    score: {
        fontFamily: 'BradleyHandITCTT-Bold', 
        fontSize: 30, 
        color: 'red'
    }
})

export default Scorecard