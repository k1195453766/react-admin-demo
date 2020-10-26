import React, { useState } from 'react';
import { Row, Col, Divider, Button } from 'antd'
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

class User extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log('User-componentDidMount');
    }

    onPress = () => {
        this.props.history.push('/about')
    }

    render() {
        return (
            <>
                <Divider orientation="left">User</Divider>
                <Row>
                    <Col span={24}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>

                <Button onClick={this.onPress} type="primary" shape="round" size={'large'}>
                    跳转到About
                </Button>
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);