import PropTypes from "prop-types";

// function UserGreeting(props){
//     if(props.isLoggedIn) {
//         return <h2>Welcome {props.userName}</h2>
//     }
//     else {
//         return <h2>Please log in to continue!!!</h2>
//     }
// }

// function UserGreeting(props) {
//   return props.isLoggedIn ? (
//     <h2 className="welcome-message">Welcome {props.userName}</h2>
//   ) : (
//     <h2  className="login-prompt">Please Log in to continue!!!</h2>
//   );
// }

function UserGreeting(props) {
    const {isLoggedIn = false, userName = "Guest"} = props;
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {userName}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please Log in to continue!!!</h2>
  );

  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

export default UserGreeting;
