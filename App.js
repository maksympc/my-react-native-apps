import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, Image} from 'react-native';
import {Button, ButtonGroup, Icon, Header} from 'react-native-elements';


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        switch (selectedIndex) {
            case 0:
                this.actionText = "Вы подарили цветы!";
                break;
            case 1:
                this.actionText = "Вы подарили шоколадку!";
                break;
            case 2:
                this.actionText = "Вы подарили кольцо! Опасно...";
        }
        this.setState({selectedIndex})
    }

    actionText = "";
    buttons = ['Цветы!', 'Шоколадку!', 'Кольцо!']

    render() {
        let pic = {
            uri: 'https://pp.userapi.com/c834101/v834101597/43274/GgGlF3MYJ6I.jpg'
        };

        const {selectedIndex} = this.state
        return (
            <View style={styles.container}>
                <Icon
                    raised
                    name='heart'
                    type='font-awesome'
                    color='#f50'/>
                <Text style={styles.item}>Что желаете подарить ...?</Text>
                <Image source={pic} style={{width: 350, height: 450}}/>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={this.buttons}
                    containerStyle={{height: 50, borderRadius: 10, width: 350, backgroundColor: '#e6e6e6'}}
                />
                <Text style={styles.item}>{this.actionText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffcc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    item: {
        height: 40,
        padding: 10,
        fontSize: 14
    },
});
