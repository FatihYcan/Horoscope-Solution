const Card = ({ data }) => {
  return (
    <div className="main">
      {data.map(({ id, title, date, desc, image }) => (
        <div key={id} className="card">
          <div className="card-over">
            <p className="desc">{desc}</p>
          </div>
          <h1 className="date">{date}</h1>
          <h1 className="title">{title}</h1>
          <img className="photo" src={image} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Card;
