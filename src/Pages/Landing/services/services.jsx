import "./css/service.css";
import ServiceCard from "./serviceCard";
import serviceData from "./servicedata";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="textsection">
          <h1>Our Services</h1>
        </div>
        <div className="underline"></div>
        <div className="cardssection">
          <div className="cards">
            {serviceData.map(function ncards(val) {
              return (
                <ServiceCard
                  image={val.image}
                  name={val.name}
                  location={val.location}
                  link={val.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
