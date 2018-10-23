import { StyleSheet, Text, View, Button, Image, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../components/Profile/Profile';



FocusRenderProfile = (focused) => {
    if (focused) {
        return (<View style={{
            paddingTop: 5,
            width: 60,
            height: 60,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        }}>
            <Image source={require("../assets/Profile.png")}
                style={{
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 18,
                    height: 20,
                }} />
            <View style={{ height: 30, position: 'relative' }}>
                <Text style={{
                    position: 'absolute',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 10,
                    width: 60,
                    color: '#0079b4'
                }}>Profile
              </Text>
            </View>

            <View style={{
                width: 40,
                borderBottomWidth: 3,
                borderColor: '#0079b4',
                position: 'absolute',
                bottom: 0,
                marginLeft: 10,
            }}>
            </View>
        </View>);
    }
    else {
        return (<View style={{
            width: 60,
            height: 60,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Image source={require("../assets/ProfileGrey.png")}
                style={{
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 18,
                    height: 20,
                }} />
            <View style={{ height: 30, position: 'relative' }}>
                <Text style={{
                    position: 'absolute',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 10,
                    width: 60,
                    color: '#5c6979'
                }}>Profile
              </Text>
            </View>


        </View>);
    }
}

ProfileTabNav = {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
        const { routeName, routes } = navigation.state;
        return {
            tabBarIcon: ({ focused, tintColor }) => {
                // You can return any component that you like here! 
                // We usually create an icon component rendering some svg        
                return (FocusRenderProfile(focused))
            }
        }
    }
}

export default ProfileTabNav;