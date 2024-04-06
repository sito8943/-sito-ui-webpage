import { useStyle } from "@sito/ui";

// components
import ChromaticCard from "../../../components/Card/CromaticCard";

function ChromaticCards() {
  const { colors } = useStyle();

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 h-full w-full gap-4 ">
      <ChromaticCard bgColor={colors.primary.default} />
      <ChromaticCard bgColor={colors.secondary.default} />
      <ChromaticCard bgColor="#D7942E" />
      <ChromaticCard bgColor="#00997B" />
      <ChromaticCard
        bgColor="#00997B"
        logoColor={colors.primary.default}
        fontColor={colors.secondary.default}
      />
      <ChromaticCard
        bgColor="#D7942E"
        logoColor={colors.primary.default}
        fontColor={colors.secondary.default}
      />
    </div>
  );
}

export default ChromaticCards;
