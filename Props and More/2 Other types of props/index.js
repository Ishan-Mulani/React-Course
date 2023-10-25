class App extends React.Component {
  render() {
    return (
      <div>
        <Hello from="Carla" to="Sonny" />
        <Hello from="Gwen" to="Kevin" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
