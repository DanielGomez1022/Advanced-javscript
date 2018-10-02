import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Elephant extends Component {
  render() {
    const {count} = this.props

    const elephantJsx = [];
    for (let i = 0; i < count ; i++){
        elephantJsx.push(<span>🐘</span>)
    }
    return (
      <div className = "elephant">
        {elephantJsx}
      </div>
    )
  }
}

Elephant.propTypes = {
    count: PropTypes.number.isRequired
}

export default Elephant