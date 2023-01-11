import React from 'react';

class Card extends React.Component {

  componentDidMount() {
    document.querySelector('.card').onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  }

  render() {
    return (
      <div className="card" >
        <div className="card-content">

        </div>
      </div>
    )
  }
}

export default Card;