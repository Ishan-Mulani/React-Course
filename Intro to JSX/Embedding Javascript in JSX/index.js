function getMood() {
  const moodArr = ["Happy", "Angry", "Sily", "Paranoid", "Excitment", "Guilt"];
  return moodArr[Math.floor(Math.random() * 5)];
}

class App extends React.Component {
  render() {
    return <h1>My current Mood is : {getMood()}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
