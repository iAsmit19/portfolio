import "@/app/styles/section_0.scss";
import Sec0_Cta from "./Sec0_Cta";
// import skeletonImg from "@/app/assets/skeleton.svg";
import Sec0Background from "./Sec0Background";

const Section_0 = () => {
  return (
    <>
      <div className="section_0">
        <div className="section_0__bg">
          <Sec0Background />
          </div>
        <div className="section_0__cont">
          {/* <div className="section_0__cont__skeleton">
            <Image src={skeletonImg} alt="" height={130} width={100} />
          </div> */}
          <div className="section_0__cont__elements">
            <div className="section_0__cont__elements__name_plate">
              <h1>ASMIT SINGH</h1>
            </div>
            <div className="section_0__cont__elements__designation_plate">
              <p>
                A self-taught Frontend Designer{" "}
                <span className="designation_plate__eye_on">&</span> Developer
              </p>
            </div>
            <Sec0_Cta />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_0;
