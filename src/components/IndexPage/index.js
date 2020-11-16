import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    Layout,
    Row, 
    Col,
    Carousel
} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function IndexPage ( props ) {
    const [ state, staFun ] = useState(0);

    return (
        <>
        <Layout>
        <Header>Header</Header>
        <Content>
        <Row>
            <Col span={24}>
            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            </Col>
        </Row>
        <Row>
            <Col span={24}>col</Col>
        </Row>
        </Content>
        <Footer>Footer</Footer>
        </Layout>
        </>
    );
};