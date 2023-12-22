import React from 'react';

const Chat = () => {
   return (
      <div style={{position:'relative', width:'50%', fontSize:'20px', textAlign:'left'}}>
         <ul style={{display:'flex', flexDirection:'column'}}>
            <h4 style={{height:'50px', background:'#CF9FFF',paddingLeft:'20px', paddingTop:'10px'}}>OO구 OO동 방 목록</h4>
            
            {[1,2,3,4,5].map(function(a, i){
               ++i;

               return(
                  <li key={i} style={{listStyle:'none',paddingLeft:'20px', height:'50px', lineHeight:'50px'}}><a>OO동 방 제목0{i}(00/100)</a></li>
               )
               })
            }

         </ul>
      </div>
   );
}

export default Chat;