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
        this.unfollow();
      }else{
        this.follow();
      }
      console.log(this.followState)
  }

  async follow() {
    // Your code here
    // debugger
    this.followState = 'followed';
    let res = await API.followUser(this.toggleButton.dataset.userId)
    this.render();
    // let resjson = await res.json()
    // console.log(resjson)
  }

  async unfollow() {
    // Your code here
    // debugger
    this.followState = 'unfollowed';
    let res = await API.unfollowUser(this.toggleButton.dataset.userId)
    this.render();

  }

  render() {
    switch (this.followState) {
      // Your code here
      case this.followState === 'followed':
        this.toggleButton.disable = false;
        this.toggleButton.innerHTML = 'Unfollow';
        break
      case this.followState === 'unfollowed':
        this.toggleButton.disable = false;
        this.toggleButton.innerHTML = 'Follow';
        break
      case this.followState === 'following':
        this.toggleButton.disable = true;
        this.toggleButton.innerHTML = 'Following...';
        break
      case this.followState === 'unfollowing':
        this.toggleButton.disable = true;
        this.toggleButton.innerHTML = 'Unfollow...';
        break
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