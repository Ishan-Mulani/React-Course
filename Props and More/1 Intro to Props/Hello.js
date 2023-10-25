class Hello extends React.Component {
  render() {
    console.log(this.props);
    const props = this.props;
    const bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          Hello from {props.from} to {props.to}
          {bangs}
        </h1>
        <img src={props.img} />
      </div>
    );
  }
}
