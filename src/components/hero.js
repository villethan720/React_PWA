import React from 'react'

const Hero = props => {
    console.log(props)
    return <h1>Big {props.name} aka {props.superhero}</h1>
}

export default Hero