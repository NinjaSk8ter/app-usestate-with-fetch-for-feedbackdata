import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import FeedbackData from './data/FeedbackData.js'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'
import AboutIconLink from './components/AboutIconLink.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Post from './components/Post.jsx'
import './App.css'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        //console.log('App', id)
        if (window.confirm('Are you sure')) {
            //setFeedback(feedback.filter((item) => item.id !== id))
            setFeedback(feedback.filter(
                item => item.id !== id

            ))
        }
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Fragment>
                                <FeedbackForm
                                    handleAdd={addFeedback}
                                />
                                <FeedbackStats
                                    feedback={feedback}
                                />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </Fragment>
                        }
                    ></Route>

                    <Route exact path='/about' element={<AboutPage />} />
                    {/*<Route exact path='/post/:id' element={<Post />} />*/}
                    {/*<Route exact path='/post/:id/:name' element={<Post />} />*/}
                    <Route exact path='/post/*' element={<Post />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router >
    )
}

export default App
