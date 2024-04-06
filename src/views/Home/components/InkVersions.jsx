import { useStyle } from "@sito/ui";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

function InkVersions() {
  const { colors } = useStyle();

  return (
    <div className="content viewport grid grid-cols-2 md:grid-cols-1 gap-5">
      <div className="flex flex-wrap gap-2">
        <FullVerticalLogo color={colors.secondary.default} />
        <FullVerticalLogo color={colors.primary.default} />
        <FullVerticalLogo color="#D7942E" />
        <FullVerticalLogo color="#00997B" />
      </div>
      <div className="flex flex-wrap gap-2">
        <FullHorizontalLogo color={colors.secondary.default} />
        <FullHorizontalLogo color={colors.primary.default} />
        <FullHorizontalLogo color="#D7942E" />
        <FullHorizontalLogo color="#00997B" />
      </div>
    </div>
  );
}

export default InkVersions;
