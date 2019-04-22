import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import Logout from './Logout';
import { logoutUser } from '../actions/authActions';
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Dimmer,
  Loader
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  loginRender() {
    if (this.props.Authenticated === true) {
      return <Logout />;
    } else {
      return (
        // Pass down button name depending on modal is used
        <LoginModal buttonOne="Log In" buttonTwo="Sign up" />
      );
    }
  }

  myPalettesRender() {
    if (this.props.Authenticated === true) {
      return(<Menu.Item as={Link} to='/MyPallettes'>My Palettes</Menu.Item>);
    }
  }

  renderLoader() {
    if(this.props.isLoading === true) {
      return(
        <Dimmer active inverted>
          <Loader size='small' inverted />
        </Dimmer>
      );
    }
  }

  render() {
    const { children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 80, padding: '1em 0em' }}
            vertical
          >
            <Menu size='large'>
              <Menu.Item as={Link} to='/'>Color Pic</Menu.Item>
              <Menu.Item as={Link} to='/Generate'>Generate</Menu.Item>
              {this.myPalettesRender()}
              <Menu.Item position='right'>
                {this.loginRender()}
                {this.renderLoader()}
              </Menu.Item>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

const mapStateToProps = state => {
  return {
    Authenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  };
};

export default connect(mapStateToProps, { logoutUser })(DesktopContainer);
