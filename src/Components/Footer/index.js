import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/themeContext";

function Footer(props) {
    const themeContext = useContext(ThemeContext);
    return (
        <FooterContainer className={themeContext.theme}>
            <h4>Copyright &copy; Le Tuan</h4>
            <p>leanhtuan3103@gmail.com</p>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`;