import React from 'react';

const instanceLocator = 'v1:us1:a0642fad-e59e-4270-abce-c31ab110c379';
const testToken = 'https://us1.pusherplatform.io/services/' +
  'chatkit_token_provider/v1/a0642fad-e59e-4270-abce-c31ab110c379/token';
const username = 'marci';
const roomId = 10269886;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const chatManager = new window.Chatkit.ChatManager({
      instanceLocator,
      userId: username,
      tokenProvider: new window.Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          }
        });
      });
  }

  sendMessage = (message) => {
    console.log(roomId);
    this.currentUser.sendMessage({
      text: message,
      roomId
    });
  };

  render () {
    return (
      <div className='app'>
        <Title />
        <MessageList
          messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

class MessageList extends React.Component {
  render () {
    return (
      <ul className='message-list'>
        {this.props.messages.map(message => {
          return (
            <li key={message.id}>
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

class SendMessageForm extends React.Component {
  constructor({sendMessage}) {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    });
  };

  render() {
    return (
      <form
        className='send-message-form'
        onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder='Type your message'
          type='text' />
      </form>
    );
  }
}

const Title = () => (<p className='title' >My awersome chat app</p>);

export default App;
