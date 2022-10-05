import { API, broadcast } from "./util";


export default class FollowToggle {
  constructor(toggleButton) {

      this.handleClick = this.handleClick.bind(this)
      this.toggleButton = toggleButton;
      this.toggleButton.addEventListener("click",this.handleClick)

  }

  async handleClick(event) {
      event.preventDefault()
      if(this.followState === 'followed'){
        this.followState = 'unFollowed'
        this.toggleButton.innerHtml = "follow"
      }else{
        this.followState = 'followed'
        this.toggleButton.innerHtml = "unfollow"
      }
      console.log(this.followState)
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}