const { Component } = require("react")

import React, { Component } from 'react';

const data = {
    type : '',
    corner : '',
    color : '',
    percent : '',
};

// corner : 边角类型 ： 直角、圆角、椭圆。
// color ： 滚动条颜色 ： 基础蓝、基础橙色 ，自定义颜色。
// percent : 当前进度值 。
// max ： 最大值默认 100 ，可以自定义变为不定长进度。

export default class HyDiyProgress extends Component {
    constructor ( props ) {
        super ( props );
        this.data = props.data;
        this.state = {
            max : data.max || 100,
            value : data.percent || 0,
            color : 1
        };
    }

    rouder () {
        <div className = "root">
            <div>
            <div className = "background"></div>
            <div className = ""></div>
            </div>
            <div></div>
        </div>
    };
};