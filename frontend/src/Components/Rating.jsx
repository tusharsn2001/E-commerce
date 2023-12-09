import React from 'react'
import { StarHalf, Star } from 'lucide-react'
import PropTypes from 'prop-types'



const Rating = ({ value, text }) => {
    return (
        <div className='rating'>
            <span style={{ color: 'yellow' }}>
                {value >= 1 ? <Star /> : value >= 0.5 ? <StarHalf /> : ''}
            </span>
            <span style={{ color: 'yellow' }}>
                {value >= 2 ? <Star /> : value >= 1.5 ? <StarHalf /> : ''}
            </span>
            <span style={{ color: 'yellow' }}>
                {value >= 3 ? <Star /> : value >= 2.5 ? <StarHalf /> : ''}
            </span>
            <span style={{ color: 'yellow' }}>
                {value >= 4 ? <Star /> : value >= 3.5 ? <StarHalf /> : ''}
            </span>
            <span style={{ color: 'yellow' }}>
                {value >= 5 ? <Star /> : value >= 4.5 ? <StarHalf /> : ''}
            </span>
            <span> {text && text}</span>
        </div>
    )
}

Rating.PropTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default Rating
