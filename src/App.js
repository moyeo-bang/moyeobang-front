/* eslint-disable */

import './App.css';
import Map from './components/Map';
import Chat from './components/Chat'

function App() {

  let post = '이리로 모여방';


  return (
    <div className="App">
      <div id="header">
        <h1>Moyeobang</h1>
        <div className='logoIcon'>
          <img className='logo' src='/Logo03.png' alt='logo' />
        </div>
        <div className="userInfo">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="39" viewBox="0 0 35 39" fill="none">
              <path d="M2.0741 37.3889V35.1771C2.0741 26.6262 9.00592 19.6944 17.5567 19.6944C26.1076 19.6944 33.0394 26.6262 33.0394 35.1771V37.3889" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5567 19.6945C22.4428 19.6945 26.4039 15.7333 26.4039 10.8472C26.4039 5.96104 22.4428 2 17.5567 2C12.6705 2 8.70947 5.96104 8.70947 10.8472C8.70947 15.7333 12.6705 19.6945 17.5567 19.6945Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <p>로그인 / 회원가입</p>
        </div>
      </div>

      <div id='nav'>
        <div className='searchBar'>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 31 31" fill="none">
            <path d="M22.25 22.25L29 29" stroke="#CF9FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13.5714C2 19.9621 7.1807 25.1429 13.5714 25.1429C16.7723 25.1429 19.6698 23.8432 21.7646 21.7428C23.8523 19.6497 25.1429 16.7613 25.1429 13.5714C25.1429 7.1807 19.9621 2 13.5714 2C7.1807 2 2 7.1807 2 13.5714Z" stroke="#CF9FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input placeholder='검색할 동을 입력하세요.'/>
        </div>
      </div>

      <div id="contents">
        <Map />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
