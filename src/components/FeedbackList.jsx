import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
    console.log(feedback)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

    return (
        // <div className='feedback-list'>
        //{feedback.map(item => (
        //    <FeedbackItem
        //        key={item.id}
        //        item={item}
        //        //handleDelete{(id) => console.log(id)}
        //        handleDelete={handleDelete}
        //   />
        //))}
        //</div>

        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        intial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList