import React from 'react';
console.log(React.version);

/*const element = (
  <div>
    <h1>React..!!</h1>
    <button
      onClick={() => {
        this.setState({ liked: true });
      }}
      type="button"
    >
      Click
    </button>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }; // initial state
  }

  render() {
    if (this.state.liked) {
      return 'You Liked this';
    }
    /*return React.createElement(
      'h1',
      null,
      'Click ',
      React.createElement(
        'button',
        { type: 'button', onClick: () => this.setState({ liked: true }) },
        'Like'
      )
    );*/
//return element;
/*return (
      <div>
        <h1 className="box-small">React..!!</h1>
        <button
          onClick={() => {
            this.setState({ liked: true });
          }}
          type="button"
          className="btn-class"
        >
          Click
        </button>
      </div>
    );
  }
}
export default App;
*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ liked: true });
  }

  render() {
    //var text = this.state.liked ? 'like' : 'have not liked !';
    if (this.state.liked) {
      return 'You Liked this';
    }
    // mconsole.log(text);
    return <button onClick={this.handleClick}>click</button>;
  }
}

*/

/*
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header from state...',
      content: 'Content from state...',
    };
  }

  render() {
    return (
      <div>
        <Header headerprops={this.state.header} />
        <Content contentprops={this.state.content} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerprops}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.contentprops}</h2>
      </div>
    );
  }
}
export default App;

*/
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome Back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please SignUp</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}

export default App;

*/

/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isLoggedOn: !prevState.isLoggedOn,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLoggedOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Toggle;
*/

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = { data: 'Initial data...' };
  }

  updateState() {
    this.setState({
      data: 'Data is updated from Child Component..',
    });
  }

  render() {
    return (
      <div>
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        />
      </div>
    );
  }
} //end of parent class

class Content extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateStateProp}>Click</button>
        <h1>{this.props.myDataProp}</h1>
      </div>
    );
  }
}
export default App;

*/

/*****Example Start For Ref Concept*****/
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  } //End of Constructor

  updateState(e) {
    this.setState({
      data: e.target.value,
    });
  }

  clearInput() {
    this.setState({
      data: '',
    });
    ReactDOM.findDOMNode(this.refs.myInut).focus();
  }

  render() {
    return (
      <div>
        <input
          value={this.state.data}
          onChange={this.updateState}
          ref="myInput"
        ></input>
        <button onClick={this.clearInput}> Click </button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default App;
*/
/*****Example End For Ref Concept*****/

/******Project Start******/
/******Project End******/
