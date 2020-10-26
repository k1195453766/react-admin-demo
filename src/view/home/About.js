import React, { useState } from 'react';
import { Row, Col, Divider, Button } from 'antd'
import './about.css'

import { connect } from 'react-redux'
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}
const OnClickNum = () => {
    const [num, increaceNum] = useState(11);
    return (
        <Button onClick={() => increaceNum(num + 2)}>首页数据+1---{num}</Button>

    )
}



class About extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('About-componentDidMount');
    }

    onPress = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <OnClickNum></OnClickNum>
                <Divider orientation="left">About</Divider>
                <Row gutter={[16, 16]} justify={'center'}>
                    <Col span={8}>
                        <div>第一列</div>
                    </Col>
                    <Col span={8}>
                        <div>第二列</div>
                    </Col>
                    <Col span={8}>
                        <div>第三列</div>
                    </Col>
                </Row>
                <Button onClick={this.onPress} type="primary" shape="round" size={'large'}>
                    跳转到Login
                </Button>
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);