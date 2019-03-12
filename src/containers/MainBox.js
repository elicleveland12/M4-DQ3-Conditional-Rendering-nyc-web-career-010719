import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    id: 0
  }

   changeState = (id) => {
     console.log(id)
    this.setState({
      id: id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    const handleItemToggle = () => {
      if (this.state.id === 1) {
        return <Profile />
      } else if (this.state.id === 2) {

        return <Photos />
      } else if (this.state.id === 3) {

        return <Cocktails />
      } else if (this.state.id === 4) {

        return <Pokemon />
      } else {
        return <h1>I'm still a div...</h1>
      }


    }

    return (
      <div>
        <MenuBar onClick= {this.changeState} />
        {handleItemToggle()}
      </div>
    )
  }

}

export default MainBox
