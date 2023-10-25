function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg = "";
    if (num == 7) {
      msg = (
        <div>
          <h2>Congrats You Win!</h2>
          <img src="https://media.tenor.com/sZAFBih2R54AAAAC/minions.gif" />
        </div>
      );
    } else {
      msg = <p>Ops !</p>;
    }

    return (
      <div>
        <h1>Your number is {num}</h1>
        {msg}
      </div>
    );
  }
}
