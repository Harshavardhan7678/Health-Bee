import "./css/ngos.css";
import ServiceCard from "./serviceCard";
import serviceData from "./servicedata";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="textsection">
          <h1>the services which we provide</h1>
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
