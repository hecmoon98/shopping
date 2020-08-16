import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,Dimensions } from 'react-native'

import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get("window");
import * as url from "./../url"


const styles = StyleSheet.create({
  wrapper: {
    height:500

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:400
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  Image:{
      width:"100%",
      height:"100%"
  },
  buttonText:{
    backgroundColor:'black'
  },
  
})

const DATA = [
  {
    img: "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sk010-1.jpg",
  },
  {
    img:
      "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sk010-2.jpg",
  },
  {
    img: "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sk010-4.jpg",
  },
  {
    img:
      "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sw001-2-thumb.jpg",
  },
  {
    img: "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sw001-3.jpg",
  },
  {
    img:
      "https://canifa.s3.amazonaws.com/media/catalog/product/6/t/6ts20s012-sw001-4.jpg",
  },
];

export default class SwiperComponent extends Component {

  render() {
    return (
      <Swiper style={styles.wrapper} autoplay activeDotStyle={{backgroundColor:'black'}}>
        {this.props.images.map((item, key) => {
          let img = `${url.url}/${item.path}`
          return (
            <View key={key} style={styles.slide1}>
            <Image style={styles.Image} source={{ uri: img }}></Image>
            </View>
          )
        })}
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)