class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Ben" hobbies={["Reading", "Swiming", "Philately"]} />
        <Friend name="James" hobbies={["Cycling", "Cooking", "Caligraphy"]} />
        <Friend />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
