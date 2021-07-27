import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
  <rect width="32" height="32" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0" transform="scale(0.03125)"/>
</pattern>
<image id="image0" width="32" height="32" xlinkHref="data:image/png;base64,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"/>
</defs>
    </Svg>
  );
};

export default Icon;
