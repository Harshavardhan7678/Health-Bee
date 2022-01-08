import './css/howwework.css';

const Featurescard = (props) => {
  return (
    <div className="featurescard">
      <div className="logo">
        <img src={props.logo} alt="feature logo" />
      </div>
      <div className="cardtext">
        <div className='cardheading'>{props.Heading}</div>
        <div className='cardsubheading'>{props.Subheading}</div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="leftfeatures">
          <div className="featuresheading">App Features</div>
          <div className="featurecards">
            {Featurescarddata.map(function ncards(val) {
              return (
                <Featurescard
                  key={val.id}
                  Heading={val.Heading}
                  Subheading={val.Subheading}
                  logo={val.logo}
                />
              );
            })}
          </div>
        </div>
        <div className="rightfeatures">
          <div className="image">
            <img
              // className={mainImage1}
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641644544/hibernation-hack/undraw_healthy_habit_bh-5-w_oq3vem.svg"
              width={240}
              height={240}
              alt="svg"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641644544/hibernation-hack/undraw_mindfulness_scgo_zskdob.svg"
              width={240}
              height={240}
              className="mainImage2"
              alt="svg"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641644544/hibernation-hack/undraw_activity_tracker_re_2lvv_jbi5ni.svg"
              width={240}
              height={240}
              className="mainImage2"
              alt="svg"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641644544/hibernation-hack/undraw_yoga_-248-n_eacsxh.svg"
              width={240}
              height={240}
              className="mainImage2"
              alt="svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

const Featurescarddata = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle_wzodhy.svg",
    Heading: "Login and signup",
    Subheading:
      "Login to our website",
  },

  {
    id: 2,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle4_sg6n5p.svg",
    Heading: "Learn yoga",
    Subheading:
      "Yoga is life, life is yoga.",
  },

  {
    id: 3,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle3_whxif3.svg",
    Heading: "Get the 21 days tracker",
    Subheading:
      "Get the 21 days tracker for learning a new habit",
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054982/Feature_Icon_with_circle_2_nvhn9u.svg",
    Heading: "Check your health",
    Subheading:
      "Check your health by our calculator. ",
  },
];
