import React from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const ENDPOINT = 'http://localhost:9000/scorecard';

// unsure of how to make this work quite yet but on the right track
// this function doesnt work properly
function getScorecard() {
    axios.get(ENDPOINT)
.then(r => r.data.map(item => <Text>item</Text>))
}

const Scorecard = () => {
    // const goToScorecard = () => {
    //    Actions.scorecard()
    // }
    return (
        <View>
            <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'green', backgroundColor: 'black'}}>This is SCORECARD!</Text>
            {/* <FlatList 
                data={[
                    {key: 'oi'}
            ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
            >

            </FlatList> */}
              {/* <Text>{getScorecard()}</Text> */}
       {/* <TouchableOpacity 
            style = {{ margin: 128 }} 
            onPress = {() => getScorecard()}
        >
            <Text>PRESS FOR SOME SCORESTUFF</Text>
        </TouchableOpacity>
            <View>
                {getScorecard()}
            </View> */}
        </View>
    );
}

export default Scorecard