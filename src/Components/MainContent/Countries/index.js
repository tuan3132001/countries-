import styled from "styled-components";
import Country from "./Country";
import { getCountries } from '../../Store/Actions/countriesAction';
import ScrollBar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



function Countries() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.Countries.countries);

    useEffect(() => {
        dispatch(getCountries())
    }, [])
    return (
        <ScrollBar style={{ maxHeight: '70vh', overflow: 'hidden' }}>
            <CountriesContainer>
                {
                    countries.map((country, index) => (
                        <Country country={country} key={index} />
                    ))
                }
            </CountriesContainer>
        </ScrollBar>
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

