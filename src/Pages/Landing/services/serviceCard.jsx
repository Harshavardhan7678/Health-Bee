import "./css/ngos.css";

const ServiceCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="imagesectioncard">
          <div className="box">
            <img src={props.image} alt=" " className="imageofngo" />
          </div>
        </div>
        <div className="textsectioncard">
          <div className="name">{props.name}</div>
          <div className='location'>{props.location}</div>
        </div>
        <div className="button">
          Visit
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
