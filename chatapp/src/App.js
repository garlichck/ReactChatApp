import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";

function App() {
  return (
    <div className="App">
      <ChatEngine height="100vh" 
      projectID="c90e2720-25f1-4494-ae87-3031781d69c0"
      userName="cheekong"
      userSecret="abc123"
      renderChatFeed= { (chatAppProps) => <ChatFeed  {...chatAppProps}/> }
      onNewMessage ={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play }>
      

      </ChatEngine>
    </div>
  );
}

export default App;
