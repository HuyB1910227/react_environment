import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Evironment Configuration</h1>
      <p>Home Path: {process.env.REACT_APP_PATH_HOME}</p>
      <p>API Base URL: {process.env.REACT_APP_API_BASE_URL}</p>
      <p>Log Level: {process.env.REACT_APP_LOG_LEVEL}</p>
      <p>Pagination Limit: {process.env.REACT_APP_PAGINATION_LIMIT}</p>
      <p>Maintenance Mode: {process.env.REACT_APP_MAINTENANCE_MODE}</p>
      <p>Request Timeout: {process.env.REACT_APP_REQUEST_TIMEOUT} ms</p>
    </div>
  )
}
export default App;
