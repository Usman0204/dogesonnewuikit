import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
color: #fff;
padding: 0 8px;
border-radius: 8px;
${({ theme }) => theme.mediaQueries.lg} {
  position: absolute;
  left: 180px;
  margin-top: 35px;
}
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
