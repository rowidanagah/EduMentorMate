import React from 'react'

export default function Modal({open,onClose}) {
    if(!open){
        return null;
    }
  return (
    <div className='overlay'>
        <div className='modalContainer'>

            <div className='modalRight'>
                <p onClick={onClose} className='closeBtn'>x</p>
                <div className='content'>
                    <p>asdasdasdasdasdadad</p>
                    <input/>
                </div>
                <div className="btnContainer">
                    <button onClick={onClose}>
                        close
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}
