class App extends React.Component {
  render() {
    return <h1>Hello React </h1>;
  }
}

// functional component equivalent
// function App() {
//   return (
//     <div>
//       <h1>Hello React </h1>
//       <h1>Hello React </h1>
//       <h1>Hello React </h1>
//       <h1>Hello React </h1>
//     </div>
//   );
// }

// Note we can return only one HTML component through class or function
ReactDOM.render(<App />, document.getElementById("root"));
