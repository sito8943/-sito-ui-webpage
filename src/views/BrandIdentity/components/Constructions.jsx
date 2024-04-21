// images
import variables from "../../../assets/images/variables.svg";
import constructions from "../../../assets/images/constructions.svg";
import constructions1 from "../../../assets/images/constructions1.svg";
import constructions2 from "../../../assets/images/constructions2.svg";
import constructions3 from "../../../assets/images/constructions3.svg";

function Constructions() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex md:flex-col gap-10">
        <img src={constructions} alt="cell with the vertical logo" />
        <img src={constructions1} alt="only vertical logo with x" />
      </div>
      <div className="flex gap-10 w-full sm:flex-col">
        <div className="flex flex-col gap-5 w-full">
          <img src={constructions2} alt="cell with the horizontal logo" />
          <img src={constructions3} alt="only horizontal logo with y" />
        </div>
        <img src={variables} alt="vars x and y" className="xs:h-80" />
      </div>
    </div>
  );
}

export default Constructions;
