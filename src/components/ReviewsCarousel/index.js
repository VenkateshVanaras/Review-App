// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onRightArrowClick = () => {
    const {activeId} = this.state
    if (activeId < 3) {
      const newValue = activeId + 1
      console.log(newValue)
      this.setState({activeId: newValue})
    }
  }

  onLeftArrowClick = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      const newValue = activeId - 1
      console.log(newValue)
      this.setState({activeId: newValue})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state
    const leftImageUrl =
      'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
    const rightImageUrl =
      'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

    const {imgUrl, username, companyName, description} = reviewsList[activeId]

    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <img src={imgUrl} className="candidate-image" alt={username} />
        <div className="arrow-container">
          <button
            data-testid="leftArrow"
            onClick={this.onLeftArrowClick}
            type="button"
          >
            <img src={leftImageUrl} alt="left arrow" className="arrow" />
          </button>
          <p> {username} </p>
          <button
            data-testid="rightArrow"
            onClick={this.onRightArrowClick}
            type="button"
          >
            <img src={rightImageUrl} alt="right arrow" className="arrow" />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
