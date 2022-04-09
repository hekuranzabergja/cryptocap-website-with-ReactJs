import React from 'react'
import Button from '../Button/Button'
import './ExploreMore.css'

export const ExploreMore = (props) => {
  return (
    <div className='exploreMore'>
        <div className='contentExplore'>
        <p className='exploreTitle'>New In Cryptocurrency?</p>
        <p className='exploreDescription'>We'll tell you what cryptocurrencies are, how they work and why you should own br one right now. So let's do it.</p>
        </div>
        <div className='exploreButton'>
            <Button>Learn & Explore Now</Button>
        </div>
    </div>
  )
}
