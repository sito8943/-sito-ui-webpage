// images
import restrict from "../../../assets/images/restrict.svg";
import restrict1 from "../../../assets/images/restrict1.svg";
import restrict2 from "../../../assets/images/restrict2.svg";
import restrict3 from "../../../assets/images/restrict3.svg";

function Restricts() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:items-center gap-10 w-full mt-1">
        <img src={restrict} alt="vertical logo with cells" className="" />
        <img src={restrict1} alt="vertical logo preview" className="" />
      </div>
      <div className="flex flex-col gap-10 w-3/4 items-center">
        <img src={restrict2} alt="horizontal logo with cells" />
        <img src={restrict3} alt="horizontal logo preview" />
      </div>
    </div>
  );
}

export default Restricts;
