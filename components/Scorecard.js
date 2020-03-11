import React, { Component } from 'react'
import { Image, Text, View, FlatList, ImageBackground, StyleSheet } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const img = 'http://q-s-i.org/wp-content/uploads/2014/04/wrinkled_paper_texture__by_christianluannstock-d36jws6.jpg';

class Scorecard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCorrect: 0,
            recentCorrect: 0,
            words: []
        }
    }

    // async componentDidMount() {
    //     await axios.get(ENDPOINT)
    //         .then(r => this.setState({
    //             totalCorrect: r.data[0],
    //             recentCorrect: r.data[1]
    //         }, console.log(r.data)))
    //         // console.log(this.state.totalCorrect);
    // }

    async componentDidMount() {
        const url = `http://localhost:9000/scorecard`;
        const data = {emailUsername: this.props.emailUsername};
        const response = await axios.post(url, data)
        this.setState({
            totalCorrect: response.data[0],
            recentCorrect: response.data[1],
            words: response.data[2].reverse()
        });
        console.log('RESPONSE!!!!!!!!!!!!!!!!!!!!!!');
        console.log(response);
    }

    render() {
        return (
            <ImageBackground source={{uri: img}} style={{flex: 1}}>
                <Text style={styles.header}>
                    {`TEST RESULTS!\n`}
                </Text>
                <View>
                    <Text style={styles.subheader}>
                        {`QUIZ SCORE:  `}
                        <Text style={styles.score}>{this.state.recentCorrect}%</Text>
                    </Text>
                    <Text style={styles.subheader}>
                        {`LIFETIME SCORE:  `}
                        <Text style={styles.score}>{this.state.totalCorrect}%</Text>
                    </Text>
                    {this.state.words.map(word => word.attemptcorrect == true ? <Text style={styles.word}>{word.word}</Text> : <Text style={[styles.word, {color: 'red', textDecorationLine: 'line-through'}]}>{word.word}</Text>)}
                </View>
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
        fontSize: 30,
        fontWeight: 'bold'
    },
    score: {
        fontFamily: 'BradleyHandITCTT-Bold', 
        fontSize: 40, 
        color: 'red'
    },
    word: {
        fontFamily: 'Noteworthy',
        textAlign: 'center',
        fontSize: 45,
        color: 'green'
    }
})

export default Scorecard