import "../styles/globals.scss";

type UniProps = {
  head: string;
  subText: string;
};

const UniversalHeading: React.FC<UniProps> = ({ head, subText }) => {
  return (
    <>
      <div className="universal_heading">
        <div className="universal_heading__cont">
          <div className="universal_heading__cont__backdrop_heading">
            <h2>{head}</h2>
          </div>
          <div className="universal_heading__cont__sub_text">
            <p>{subText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversalHeading;
