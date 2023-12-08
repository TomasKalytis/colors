export default function List({ colors }) {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Colors</h5>
        <ul className="list-group">
          {colors === null && <li className="list-group-item">Loading...</li>}
          {colors !== null && !colors.length && <li className="list-group-item">No Colors yet</li>}
          {colors !== null && colors.length !== 0 && colors.map(color => (
              <li key={color.id} className="list-group-item">
                <div className="colorBall" style={
                  {
                    backgroundColor: color.color,
                    width: color.size + "px",
                    height: color.size + "px"
                  }
                }>
                </div>
              </li>
            ))
            }
        </ul>
      </div>
    </div>
  );
}
