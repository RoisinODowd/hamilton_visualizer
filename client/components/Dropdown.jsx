

import React from 'react'; 
import Dropdown from 'react-dropdown'



export default class Dropdown extends React.Component {

    render(){
    const options = [

        "Alexander Hamilton",
        "Aaron Burr, Sir",
        "My Shot",
        "The Story Of Tonight",
        "The Schuyler Sisters",
        "Farmer Refuted",
        "You'll Be Back",
        "Right Hand Man",
        "A Winter's Ball",
        "Helpless",
        "Satisfied",
        "The Story Of Tonight (Reprise)",
        "Wait For It",
        "Stay Alive",
        "Ten Duel Commandments",
        "Meet Me Inside",
        "That Would Be Enough",
        "Guns And Ships",
        "History Has Its Eyes On You",
        "Yorktown (The World Turned Upside Down)",
        "What Comes Next?",
        "Dear Theodosia",
        "Non-Stop",
        "What'd I Miss?", 
        "Cabinet Battle #1", 
        "Take A Break", 
        "Say No To This", 
        "The Room Where It Happens", 
        "Schuyler Defeated", 
        "Cabinet Battle #2", 
        "Washington On Your Side", 
        "One Last Time", 
        "I Know Him", 
        "The Adams Administration", 
        "We Know", 
        "Hurricane", 
        "The Reynolds Pamphlet", 
        "Burn", 
        "Blow Us All Away", 
        "Stay Alive (Reprise)", 
        "It's Quiet Uptown", 
        "The Election Of 1800", 
        "Your Obedient Servant", 
        "Best Of Wives And Best Of Women",
        "The World Was Wide Enough", 
        "Who Lives, Who Dies, Who Tells Your Story"


    ]; 

        const defaultOption = options[0]
        return <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />aultOption}

    }


}
