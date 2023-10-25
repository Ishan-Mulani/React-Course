class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          from="Carla"
          to="Sonny"
          data={[1, 2, 3, 4, 5]}
          bangs={4}
          img="https://images.unsplash.com/photo-1494919858686-6eae4d8a39cf?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
