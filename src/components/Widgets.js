import React from 'react'
import './Widgets.css'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__artile">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon className="widgets__icon"/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle('Make your next getaway feel longer', '3d ago • 6, 990 readers')}
            {newsArticle('Salary hikes make a comeback', '5d ago • 25, 032 readers')}
            {newsArticle('IKEA has a new strategy', '3d ago • 8,928 readers')}
            {newsArticle('Out of a job? Write this on CV', '5d ago • 33, 520 readers')}
            {newsArticle('Do you have other job offers?', '9d ago • 25, 708 readers')}
        </div>
    )
}


export default Widgets
