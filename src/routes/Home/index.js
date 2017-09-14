/**
 * Created by yangyang on 2017/9/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Layout,
  Breadcrumb,
  Menu,
  Dropdown,
  Icon,
} from 'antd'
import {Link, Route, withRouter, Switch} from 'react-router-dom'
import ContentRouter from './ContentRouter'
import {fakeAuth} from '../../utils/auth'
import ComposeMenu from '../../components/Menu'
import './style.scss'

const {Header, Footer, Sider, Content} = Layout

class Home extends Component {
  constructor(props) {
    super(props)
  }

  userMenuOnClick = ({key}) => {
    let history = this.props.history
    if (key == 'logout') {
      console.log('user logout')
      fakeAuth.signout(() => history.push('/login'))
    }
  }

  renderUserLoginMenu() {
    return (
      <Menu onClick={this.userMenuOnClick}>
        <Menu.Item key="profile">
          个人信息
        </Menu.Item>
        <Menu.Item key="logout">
          注销
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    let {match} = this.props
    return (
      <Layout style={{height: "100%"}}>
        <Sider width={224} className="sider-menu">
          <div className="logo">
            <img src={require('../../asset/image/logo.jpg')} />
            <span>绿蚁网络</span>
          </div>
          <ComposeMenu />
        </Sider>
        <Layout className="main">
          <Header className="header">
            <div className="headerTitle">后台管理系统Demo</div>
            <div>
              <Dropdown overlay={this.renderUserLoginMenu()}>
                <a className="ant-dropdown-link" href="#">
                  <Icon type="user" /> username <Icon type="caret-down" />
                </a>
              </Dropdown>
            </div>
          </Header>
          <Content>
            <Breadcrumb className="bread">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="content">
              <ContentRouter match={match}/>
            </div>
          </Content>
          <Footer className="footer">版权所有 © 长沙绿蚁网络科技有限公司 2017</Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
