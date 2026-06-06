
function Card(props) {
  return (
    <div style={{
      border: "2px solid red",
      margin: "20px auto",
      textAlign: "center",
      padding: "10px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "pink",
      color: "black",
      borderRadius: "10px",
    }}>
      <img src={props.image} alt="img" height={100} width={100} />
      <h2>{props.title}</h2>
      <h3>${props.price}</h3>

    </div>
  )
}

export default Card