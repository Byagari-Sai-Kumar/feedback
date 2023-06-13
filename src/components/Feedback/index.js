// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  render() {
    const {isEmojiClicked} = this.state

    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    const onClickEmoji = () => {
      this.setState({isEmojiClicked: false})
    }

    let feedbackCard

    if (isEmojiClicked) {
      feedbackCard = (
        <div className="bgContainer">
          <div className="cardContainer">
            <h1 className="emojiHeading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojiContainer">
              {emojis.map(eachEmoji => (
                <li className="eachEmojiContainer">
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                    key={eachEmoji.id}
                    onClick={onClickEmoji}
                  />
                  <p className="emojiName">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      feedbackCard = (
        <div className="bgContainer">
          <div className="cardContainer">
            <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
            <h1 className="thankyouHeading">Thank You!</h1>
            <p className="feedback">
              We will use you feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      )
    }

    return feedbackCard
  }
}

export default Feedback
