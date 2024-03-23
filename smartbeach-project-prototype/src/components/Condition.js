import { Component } from "react";

class Conditions extends Component {
  // lets add a constructor to our component:
  constructor(props) {
    super(props); //This will call the constructors parent class (I.e. we can now call Conditions component, using this.state)
    this.state = {
      conditions: [],
    };
  }

  componentDidMount() {
    //This will render our data once
    fetch("/conditions") //Fetch will handle the http request, request this link from our proxy, and return our data
      .then((res) => res.json())
      .then((conditions) => {
        this.setState({ conditions: conditions }); //We are displaying our data as json, and setting the state of our conditions as our array of conditions
      });
  }

  render() {
    // Map over our array
    return (
      <div>
        <h1>Weather Component</h1>
        <ul>
          {this.state.conditions.map((condition, index) => (
            <li>
              <h2>Condition: {condition.condition}</h2>
              <h3>Safety level: {condition.safety}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
}

export default Conditions;
