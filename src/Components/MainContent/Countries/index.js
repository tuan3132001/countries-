import styled from "styled-components";
import Country from "./Country";

function Countries() {

    return (
        <CountriesContainer>
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </CountriesContainer>
    )
}
export default Countries;

const CountriesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    padding: 4px 1px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
        gap : 10px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
        gap : 8px;
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1,auto);
    }

`;

