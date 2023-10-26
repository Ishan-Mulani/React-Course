class Slot extends React.Component {
  render() {
    const emoji = ["🦁", "🐺", "😸"];
    return <span>{emoji[this.props.num]}</span>;
  }
}
