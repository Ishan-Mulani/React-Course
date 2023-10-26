function getNum() {
  return Math.floor(Math.random() * 3);
}

class Machine extends React.Component {
  render() {
    const s1 = getNum();
    const s2 = getNum();
    const s3 = getNum();
    let msg = "";
    if (s1 == s2 && s2 == s3) {
      msg = <h1>You Win !!</h1>;
    } else {
      msg = <h1>You Loose !!</h1>;
    }
    return (
      <div>
        <Slot num={s1} />
        <Slot num={s2} />
        <Slot num={s3} />
        {msg}
      </div>
    );
  }
}
