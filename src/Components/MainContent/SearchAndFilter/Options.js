import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';
import { GiEarthAsiaOceania, GiWorld } from 'react-icons/gi';
import { ThemeContext } from "../../ThemeContext/themeContext";
import Option from "./Option";

const RegionList = [
    { icon: GiWorld, value: 'All' },
    { icon: FaGlobeAfrica, value: 'Africa' },
    { icon: FaGlobeAmericas, value: 'Americas' },
    { icon: FaGlobeAsia, value: 'Asia' },
    { icon: FaGlobeEurope, value: 'Europe' },
    { icon: GiEarthAsiaOceania, value: 'Oceania' },

]

function Options({ isShowOptions }) {
    const themeContext = useContext(ThemeContext);
    const refOptions = useRef(null);
    useEffect(() => {
        const ShowOptions = () => {
            if (isShowOptions) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`;
            } else {
                refOptions.current.style.maxHeight = `0`;
                refOptions.current.style.transform = `scaleY(0)`;
            }

        }
        ShowOptions();
        document.addEventListener('resize', ShowOptions);
        return () => {
            document.removeEventListener('resize', ShowOptions);
        }
    }, [isShowOptions])
    return (
        <div>
            <OptionsPane className={themeContext.theme} ref={refOptions} >
                {
                    RegionList.map((region, index) => (
                        <Option region={region} key={index} />
                    ))
                }
            </OptionsPane>
        </div>
    );
}

export default Options;

const OptionsPane = styled.div`
    width: 100%;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`;

