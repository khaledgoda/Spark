import "./Children4.css";

export default function Children4(props) {
  return (
    <>
      <div
        className="a-cards col-lg-4 col-sm-12 m-3 py-3 w-25 d-inline-block"
        style={{
          backgroundColor: "white",
          marginBottom: "40px",
          borderRadius: "10px",
        }}
      >
        <div className="m-2">
          <img src={props.img} className="img-icon  d-inline" />
          <h2 className="d-inline h-name heading-font-l">{props.Name}</h2>
        </div>
        <div style={{ display: "block", color: "#7E7EAA" }}>
          <p className="m-2 font-two-l">{props.Discraption}</p>
        </div>
        <img src={props.icon} alt="" className="w-25 m-1"  />
      </div>
    </>
  );
}
