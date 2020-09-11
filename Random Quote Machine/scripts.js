const quotes = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "So many books, so little time.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
];

const authors = [
  "Marilyn Monroe",
  "Oscar Wilde",
  "Albert Einstein",
  "Frank Zappa",
  "Bernard M. Baruch",
];

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      toDoList: [],
      userInput: "",
    };
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
    console.log(this.state.toDoList);
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((item) => {
      return <li>{item}</li>;
    }); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
