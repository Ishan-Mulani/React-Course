class Friend extends React.Component {
  static defaultProps = {
    name: "Anonymous",
    hobbies: ["Sleeping"],
  };
  render() {
    const { name, hobbies } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}
