import { ConstructionOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';


const SSlectedNode = Styled.div`
  max-height: 600px;
  padding: 15px;
  overflow: auto;
  box-sizing: border-box;
`;

const SSelectedFrame = Styled.div`
    padding: 15px 20px;
    border-radius: 5px;
    overflow-wrap: break-word;
    border: 1px solid ${props => props.theme.colors.$green05};
    .node-name {
        font-family: 'Oswald', sans-serif;
        font-size: 24px;
        color: ${props => props.theme.colors.$gray06};
        margin: 0 0 13px;
    }
    
    .list {
        font-family: 'Oswald', sans-serif;
        color: ${props => props.theme.colors.$gray01};
        &__item {
            display: flex;
            &__heading {
                width: 80px;
                font-size: 18px;
            }
            
            &__content {
                width: calc(100% - 80px);
                font-size: 14px;
                margin: 0;
            }
        }
    }
`;


export const SlectedNode = ({ id, show, datasets, attributes }) => {
    interface jsonArr {
        [key: string]: any
    }
    const [json, setJson] = useState<jsonArr>([])
    const [isDataset, setIsDataset] = useState(false)



    useEffect(() => {
        if (id in datasets) {
            setJson(datasets[id])
            setIsDataset(true)
        } else if (id in attributes) {
            setJson(attributes[id])
            setIsDataset(false)
        } else {
            show = false
        }
    }, [id]);

    if (!json) return null

    return <SSlectedNode>
            <SSelectedFrame>
            <h3 className="node-name">Selected Node’s label</h3>
            {
                (show && isDataset) && (
                    <dl className="list">
                        <div className="list__item">
                            <dt className="list__item__heading">label</dt>
                            <dd className="list__item__content">{json.label}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">template</dt>
                            <dd className="list__item__content">{json.template}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">target</dt>
                            <dd className="list__item__content">{json.target}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">examples</dt>
                            <dd className="list__item__content">{json.examples}</dd>
                        </div>
                    </dl>
                )
            }
            {
                (show && !isDataset) && (
                    <dl className="list">
                        <div className="list__item">
                            <dt className="list__item__heading">datamodel</dt>
                            <dd className="list__item__content">{json.datamodel}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">dataset</dt>
                            <dd className="list__item__content">{json.dataset}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">description</dt>
                            <dd className="list__item__content">{json.description}</dd>
                        </div>
                        <div className="list__item">
                            <dt className="list__item__heading">label</dt>
                            <dd className="list__item__content">{json.label}</dd>
                        </div>
                    </dl>
                )
            }
            </SSelectedFrame>
        </SSlectedNode>;
};
