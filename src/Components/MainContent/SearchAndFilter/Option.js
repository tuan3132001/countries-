import React from "react";
import styled from "styled-components";


function Option(props) {
    const { region } = props;
    return (
        <div>
            <OptionItem >
                <region.icon />
                <span>{region.value}</span>
            </OptionItem>
        </div>
    );
}

export default Option;

const OptionItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 8px;
    &:hover {
        font-weight: bold;
        background: var(--SelectOptionBackground);
    }

    span {
        margin-left: 4px;
    }
`;