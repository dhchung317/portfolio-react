import React from 'react'
import loadingGif from '../img/gif/loading-arrow.gif'
export default function Loading() {
    return (
        <div className="loading">
            <h4>loading...</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}