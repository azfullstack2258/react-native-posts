import React, {Component} from 'react';
import { Text, View, ScrollView ,TouchableNativeFeedback, Modal,Image} from 'react-native';

const data = [
  { name: 'Gort', year: 1951,img:'https://upload.wikimedia.org/wikipedia/en/0/03/Gort_Firing.jpg' },
  { name: 'Ash', year: 1979,img: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Ash_%28Alien%29.jpg'},
  {name: 'T-800',year: 1984,img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Terminator-2-judgement-day.jpg'},
  {name: 'Bishop', year: 1986,img:'https://upload.wikimedia.org/wikipedia/en/4/49/Bishop_%28Alien%29.png'},
  {name: 'Johnny 5',year: 1986,img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Johnny5_03.jpg/433px-Johnny5_03.jpg'},
  { name: 'Data', year: 1987,img:'https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg' },
  { namee: 'Bender', year: 1999 , img: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'},
  { name: 'Marvin', year: 2005 ,img: 'hhttps://upload.wikimedia.org/wikipedia/en/c/cb/Marvin_%28HHGG%29.jpg'},
  { name: 'Astro Boy', year: 2009, img: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AstroBoy%28CGI%29.jpg' },
  { name: 'TARS', year: 2014, img: 'https://compote.slate.com/images/17c75261-6622-4399-a0ae-6316eeff6319.jpg' },
  { name: 'CHAPPiE', year: 2015, img: 'https://upload.wikimedia.org/wikipedia/en/7/71/Chappie_poster.jpg' },
  { name: 'Poe', year: 2018, img: 'https://vignette.wikia.nocookie.net/altered-carbon/images/7/71/Poe.jpg/revision/latest/scale-to-width-down/325?cb=20180205161632' }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robot: null
    };
  }

  clickRobot = (robot) => {
    this.setState({robot});
  };

  viewRobo = (robot) => {
    robots.find(theRobot => robot.name == theRobot.name)
  }

  render() {
    let years = [];
    let robots = [];
    let theRobot = this.state.robot;

    data.forEach((robot, index) => {
      robots[index] = <View style={{ flexDirection: 'column', padding: 20, borderBottomWidth:1, borderBottomColor: '#ddd'}}>
        <TouchableNativeFeedback onPress={() => {this.clickRobot(robot);}}><Text style={{fontSize: 18, paddingBottom: 5}}>{robot.name}</Text></TouchableNativeFeedback>
        <Text>{robot.year}</Text>
      </View>
    })


    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={theRobot != null}
          onRequestClose={() => {this.setState({robot: null})
        }}
      >
        {theRobot &&<View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'stretch', justifyContent: 'flex-start', padding: 40}}>
          <Text style={{fontSize: 36, paddingBottom: 5}}>{theRobot.name}</Text>
          <Image source={{uri: theRobot.img, with: 640, height: 480}} />
      </View>}</Modal>
      <View style={{ flexDirection: 'column'}}>
        <View style={{ flexGrow: 0, flexShrink: 0, height: 24, backgroundColor: '#a85'}}></View>
      <ScrollView style={{flexGrow: 1}}>
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'stretch', justifyContent: 'flex-start'}}>
        {robots}
      </View>
      </ScrollView>
      </View>
      </View>
    );


    return
  }
}
