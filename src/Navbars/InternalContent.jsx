import React, {useState} from 'react';
import {Anchor, Col, Flex, Row, Splitter, Typography} from 'antd';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import './InternalContent.css'

export default function InternalContent (props) {
    let menuItems = props.format.sections.map((content) => {
        return (
            {
                "key": content.id,
                "href": "#" + content.id,
                "title": content.title,
            }
        )
    })
    menuItems.unshift({"key": "Title", "href": "#Title", "title":"(top)"});
    const [items, setItems] = useState(menuItems);
    let internals = props.format.sections.map((content) => {return (
        <div id={content.id}>
            <Fieldset legend={content.title}>{content.content}</Fieldset>
        </div>
    )})
    return (
        <div>
            <Row>
                <Col style={{width: '70%'}}>
                    <div id="Title">
                        <h1 id="titleh1" className="text-6xl">{props.format.title}</h1>
                        <p>{props.format.description}</p>
                    </div>
                    {internals}
                </Col>
                <Col>
                    <Anchor
                        items={items}
                    />
                </Col>
            </Row>
        </div>
    );
};