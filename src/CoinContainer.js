import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
import "./CoinContainer.css";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      //   let newState = {
      //     ...st,
      //     currCoin: newCoin,
      //     nFlips: st.nFlips + 1
      //   };

      //   if (newCoin.side === "heads") {
      //     newState.nHeads += 1;
      //   } else {
      //     newState.nTails += 1;
      //   }
      //   return newState;
      // });
      // ==========SHORT WAY==============
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip a Coin!!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <div className="btn-roll" onClick={this.handleClick}>
          Flip Me!
        </div>
        <div className="info left-side">
          <img src="https://tinyurl.com/react-coin-heads-jpg" />
          <h1>{this.state.nHeads}</h1>
        </div>
        <div className="info right-side">
          <img src="http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" />
          <h1>{this.state.nTails}</h1>
        </div>
      </div>
    );
  }
}

export default CoinContainer;
