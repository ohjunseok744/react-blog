
import './App.css';
import {useState} from 'react';
function App() {
  let [글제목,set글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState([0,0,0]);
  let [입력값,set입력값] = useState('');
  let [date,setdate] = useState([new Date(),new Date(),new Date()]);
  useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '30px'}}>블로그임</h4>
      </div>
      <button onClick={ function(){
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        set글제목(copy)
      }}>글수정</button>
      <button onClick={ function(){
        let copy = [...글제목];
        copy.sort((a,b) => a<b?-1:1);
        set글제목(copy)
      }}>가나다 순 정리</button>
      { 
        글제목.map(function(a,i){
          return (
            <div className="list">
              <h4  onClick={ function(){
                let copy = [...modal];
                copy[i] = copy[i] + 1;
                setModal(copy)
              }}>{글제목[i]}
              <span onClick={ function(e){e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>👍</span> { 따봉[i] }
              </h4>
              <p>{date[i].toLocaleString()}</p>
              <button onClick={ function(e){e.stopPropagation();
              let copy = [...글제목];
              copy.splice(i,1);
              set글제목(copy)
              }}>삭제</button> 
            </div>
          )
        }) 
      }
      
      <div>
        <input onChange={(e)=>{
          set입력값(e.target.value);
          
          
        }}></input>
        <button onClick={ function(){
          let copyTitle = [...글제목];
          let copyDate = [...date];
        
          if (입력값 !== '') {
            copyTitle.unshift(입력값);
            copyDate.unshift(new Date());
        
            set글제목(copyTitle);
            setdate(copyDate);
          }
        }}>글발행</button>
      </div>
      
      {
        글제목.map(function(a,i){
          return (
            modal[i]%2 == 1 ? <Modal 글제목={글제목[i]} set글제목={set글제목} ></Modal> : null
          )
        }) 
      }
      
    </div>
  );
}
function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목 }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ function(){
        
      }}>글수정</button>
    </div>
  )
}
export default App;
