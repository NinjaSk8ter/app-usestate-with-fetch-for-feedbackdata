import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card.jsx'

const FeedbackItem = ({ item, handleDelete }) => {

    return (
        <Card
            reverse={false}
        >
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem