import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {name: 'all', selected: true},
        {name: 'first', selected: false},
        {name: 'second', selected: false},
        {name: 'third', selected: false},
        {name: 'four', selected: false},
        {name: 'five', selected: false},
        {name: 'six', selected: false},
        {name: 'seven', selected: false},
        {name: 'eight', selected: false},
        {name: 'nine', selected: false},
        {name: 'ten', selected: false},
      ],
      subData: {
        innerdata: [
          {name: 'all'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'first', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'second', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'third', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'four', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'five', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'six', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'seven', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'eight', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'nine', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
          {name: 'ten', time: ' 10:50'},
        ],
      },
    }
  }

  getFilteredIndex = keyword => {
    return this.state.subData.innerdata.findIndex(item => item.name === keyword)
  }

  updateIndex = currantIndex => {
    const {data} = this.state
    let tmpArr = data
    tmpArr.forEach((ele, index) => {
      if (index == currantIndex) {
        tmpArr[currantIndex].selected = true
      } else {
        tmpArr[index].selected = false
      }
    })
    this.setState({data: tmpArr})
  }
  onPressMe = (currantIndex, currantItem) => {
    this.updateIndex(currantIndex)
    const {data} = this.state

    data.forEach((ele, index) => {
      if (index == currantIndex) {
        this.flatListRef.scrollToIndex({animated: true, index: currantIndex})
        this.flatListRefSubBody.scrollToIndex({
          animated: true,
          index: this.getFilteredIndex(currantItem),
        })
      }
    })
  }

  render () {
    return this.renderMainView()
  }
  renderMainView = () => {
    return (
      <SafeAreaView>
        {this.headerItems()}
        {this.subBody()}
      </SafeAreaView>
    )
  }
  headerItems = () => {
    return (
      <FlatList
        horizontal
        ref={ref => {
          this.flatListRef = ref
        }}
        showsHorizontalScrollIndicator={false}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          justifyContent: 'space-between',
          backgroundColor: '#FFF',
          paddingVertical: 10,
          flexDirection: 'row',
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => this.onPressMe(index, item.name)}>
              <View
                style={{
                  backgroundColor: item.selected ? '#30A9DE' : 'grey',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  margin: 5,
                }}>
                <Text style={{color: item.selected ? 'white' : 'lightgrey'}}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    )
  }
  onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('Visible items are', viewableItems[0].item.name)
    switch (viewableItems[0].item.name) {
      case 'all':
        this.updateIndex(0)
        break
      case 'first':
        this.updateIndex(1)
        break
      case 'second':
        this.updateIndex(2)
        break
      case 'third':
        this.updateIndex(3)
        break
      case 'four':
        this.updateIndex(4)
        break
      case 'five':
        this.updateIndex(5)
        break
      case 'six':
        this.updateIndex(6)
        break
      case 'seven':
        this.updateIndex(7)
        break
      case 'eight':
        this.updateIndex(8)
        break
      case 'nine':
        this.updateIndex(9)
        break
      case 'ten':
        this.updateIndex(10)
        break

      default:
        break
    }
  }
  subBody = () => {
    return (
      <FlatList
        ref={ref => {
          this.flatListRefSubBody = ref
        }}
        onViewableItemsChanged={this.onViewableItemsChanged}
        data={this.state.subData.innerdata}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor: item.name === 'all' ? null : 'pink',
                marginVertical: 5,
                borderRadius: 8,
                marginHorizontal: 10,
              }}>
              {item.name === 'all' ? null : <Text>{item.name}</Text>}
              <Text>{item.time}</Text>
            </View>
          )
        }}
      />
    )
  }
}
