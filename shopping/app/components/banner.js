import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel"; // Version can be specified in package.json

// import { scrollInterpolator, animatedStyles } from './utils/animations';

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [
  {
    img: "http://192.168.1.194:5000/uploads/600x894-2.png",
  },
  {
    img:
      "http://192.168.1.194:5000/uploads/Banner-home-2-2605-mobile-1.jpg",
  },
  {
    img: "http://192.168.1.194:5000/uploads/600x894-2.png",
  },
  {
    img:
      "http://192.168.1.194:5000/uploads/Banner-home-2-2605-mobile-1.jpg",
  },
  {
    img: "http://192.168.1.194:5000/uploads/600x894-2.png",
  },
  {
    img:
      "http://192.168.1.194:5000/uploads/Banner-home-2-2605-mobile-1.jpg",
  },
];
for (let i = 0; i; i++) {
  DATA.push(i);
}

class Banner extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    let img = item.img;
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.Image} source={{ uri: img }}></Image>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          layout={"default"}
          //   layoutCardOffset={`18`}
          ref={(c) => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
      </View>
    );
  }
}

export default Banner;

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  itemContainer: {
    width: "100%",
    height: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    // flex: 1,
    // aspectRatio: 1.5,
    // resizeMode: "contain",
    width: "100%",
    height: 450,
  },
});
