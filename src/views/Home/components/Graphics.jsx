import Angular from "../../../components/Svg/Angular";
import Fragment from "../../../components/Svg/Fragment";

function Graphics() {
  console.log(new Array(96));

  return (
    <div className="flex flex-col items-start justify-end w-full h-full">
      <div>
        {new Array(96).map((_, i) => (
          <Angular key={i} />
        ))}
      </div>
      <div>
        <Fragment />
      </div>
    </div>
  );
}

export default Graphics;
