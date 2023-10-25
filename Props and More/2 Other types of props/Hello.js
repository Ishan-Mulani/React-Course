class Hello extends React.Component {
  render() {
    console.log(this.props);
    const props = this.props;
    // props cannot be change they are immutable
    // we cannot add update props
    return (
      <h1>
        Hello from {props.from} to {props.to}
      </h1>
    );
  }
}
