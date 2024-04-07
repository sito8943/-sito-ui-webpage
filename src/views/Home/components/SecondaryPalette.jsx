// components
import ColorOpacity from "./ColorOpacity";

function SecondaryPalette() {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="md:hidden h-[76px]" />
      <ColorOpacity
        colorHex="#00997B"
        description={
          <>
            PANTONE PMS 18-1662 TCX <br />
            #00997B <br />
            RGB: 205, 33, 42 <br />
            CMYK: 0, 84, 80, 20 <br />
          </>
        }
      />
      <ColorOpacity
        colorHex="#D7942E"
        description={
          <>
            PANTONE PMS 15-1051 TCX <br />
            #D7942E <br />
            RGB: 215, 148, 46 <br />
            CMYK: 0, 31, 79, 16 <br />
          </>
        }
      />
      <ColorOpacity
        colorHex="#1b1b1b"
        description={
          <>
            PANTONE PMS BLACK 7 <br />
            #1B1B1B <br />
            RGB: 27, 27, 27 <br />
            CMYK: 0, 0, 0, 89 <br />
          </>
        }
      />
    </div>
  );
}

export default SecondaryPalette;
