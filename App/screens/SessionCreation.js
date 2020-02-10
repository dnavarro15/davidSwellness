import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from "native-base";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  color: {
    backgroundColor: "blue"
  }
});

export default class Start extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          {/* <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left> */}
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ActiveSession")}
          >
            <Text style={styles.button}>Start Session</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SideBar")}
          >
            <Text style={styles.button}>Side Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SessionHistory")}
          >
            <Text style={styles.button}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Activities")}
          >
            <Text style={styles.button}>Activities</Text>
          </TouchableOpacity>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#c2c5cc" }}>
            <Button
              onPress={() => this.props.navigation.navigate("SessionHistory")}
            >
              <Icon name="calendar" style={{ color: "#000" }} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("ActiveSession")}
            >
              <Icon active name="stopwatch" style={{ color: "#000" }} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("Activities")}
            >
              <Icon name="heart" style={{ color: "#000" }} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
