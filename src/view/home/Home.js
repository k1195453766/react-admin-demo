import React from 'react';
import { Row, Col, Divider, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}
class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    componentDidMount() {
        console.log('home-componentDidMount');
    }

    onPress = () => {
        this.props.history.push('/user')
    }

    render() {
        const style = { background: '#0092ff', padding: '8px 0' };
        return (
            <>
                <Divider orientation="left">Home</Divider>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>

                <Button onClick={this.onPress} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
                    跳转到User
                </Button>
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);