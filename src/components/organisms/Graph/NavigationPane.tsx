import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { SlectedNode } from '@/components/molecules/SlectedNode';

const SNavigationPane = Styled.div`
  width: 27%;
  max-width: 345px;
`;

export const NavigationPane = ({ id, show, datasets, attributes}) => {
    return <>
        <SNavigationPane>
            <SlectedNode
                id={id}
                show={show}
                datasets={datasets}
                attributes={attributes}
            />
        </SNavigationPane>
    </>;
};
