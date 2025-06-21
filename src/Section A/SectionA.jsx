import React, { useState } from 'react'
import './SectionA.css'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
import Rules from '../assets/images/image-rules.svg'


function SectionA({score,setScore}) {
  const [rule,setRule] = useState(false)

  const ShowRules = ()=>{
    setRule(!rule)
  }

  const Gameimages = [rock,paper,scissors]

  const gameItems = ["rock", "paper", "sciccors"]
  
  const GameRules = {
    rock : 'paper',
    paper : 'sciccors',
    sciccors : 'rock'
  }

  const [result, setResult] = useState("")
  const [game,setGame] = useState(false)
  const [playerOption ,setPlayerOption] = useState()
  const [bot,setBot] = useState()

  const GameStart = (playerschoice) => {
  const botIndex = Math.floor(Math.random() * gameItems.length);
  const botChoice = botIndex; // store index for image rendering
  const player = gameItems[playerschoice];
  const botItem = gameItems[botChoice];

  setBot(botChoice);
  setPlayerOption(playerschoice);
  setGame(true);

  if (player === botItem) {
    setResult("Draw");
  } else if (GameRules[player] === botItem) {
    setResult("YOU LOSE");
    setScore(prev =>(prev > 0 ? prev-1: 0))
  } else {
    setResult("YOU WIN");
    
    setScore(prev => prev +1)
  }
};

  return (
    <>
    <section className='Section d-flex flex-column align-items-center justify-content-between'>

        { 
          game ? 
          <>
        <div className="game_session d-flex  justify-content-around align-items-center">

              <div className='game_result'>
                  <div>
                      <img src={Gameimages[playerOption]} alt="" />
                  </div>
                <span className='mt-3 mb-1 text-light'>YOU PICKED</span>
              </div>

              <div className='game_result'>
                    <div>
                          <img src={Gameimages[bot]} alt="" />
                    </div>
                <span className='mt-3 mb-1 text-light'>THE BOT PICKED</span>
              </div>
        </div> 
                <div className='play_again d-flex flex-column align-items-center justify-content-center'>
                      <span className='text-light'>{result}</span>
                      <button className='btn mt-3 border border-light' onClick={()=>setGame(false)}>PLAY AGAIN</button>
                </div>
      
          </>

        :
        <div className="game_section d-flex flex-column align-items-center justify-content-between">
            <div className="scissorPaper d-flex align-items-center justify-content-between">
              
              <div onClick={()=>GameStart(0)}>
                <img src={rock} alt="" />
              </div>

              <div onClick={()=>GameStart(1)}>
                <img src={paper} alt="" />
              </div>

            </div>

            <div className="rock border" onClick={()=>GameStart(2)}>
                <img src={scissors} alt="" />
            </div>

        </div>
        }
        <button className='btn border border-light' onClick={ShowRules} >RULES</button>
        
    </section>
      <div className={` ${rule ? 'showRules': ''} rules d-flex flex-column align-items-center justify-content-start` }>
            <h1 className='mb-5 mt-5'>RULES</h1> 
            <img src={Rules} className='mb-5' alt="Rules" />
            <button className='closeBtn mt-5' onClick={ShowRules}>x</button>
      </div>
      </>
  )
}

export default SectionA
