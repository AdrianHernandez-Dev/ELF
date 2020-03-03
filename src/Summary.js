import React from 'react';
import './App.css'

function Summary(props) {
  return (
      <div className="summary__option" key={props.index}>
          <div className="summary__option__label">{props.title} </div>
          <div className="summary__option__value">{props.name} </div>
          <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.cost) }
          </div>
      </div>
  )
}

export default Summary;