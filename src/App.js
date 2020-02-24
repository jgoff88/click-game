import React, {
  Component
} from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedCards: []
  };

  clickedCards = id => {
    let clickedCards = this.state.clickedCards;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed cards
    if (clickedCards.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedCards.push(-1);
      console.log(clickedCards);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score !== 9) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedCards: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedCards: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({
      score: this.state.score + 1
    });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({
      cards: shuffle(cards)
    });
  };

  render() {
    let score = 0;
    return ( <
        Wrapper >
        <
        Title score = {
          this.state.score
        }
        topScore = {
          this.state.topScore
        }
        score = {
          this.state.score
        }
        />  {
        this.state.cards.map(card => ( <
          Card title = {
            card.title
          }
          image = {
            card.image
          }
          clickedCards = {
            this.clickedCards
          }
          />
        ))
      } <
      /Wrapper>
  );
}
}

export default App;