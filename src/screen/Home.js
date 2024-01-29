import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


export default function Home() {
    return (
        <div>
            <div><NavBar></NavBar></div>
            <div><Carousel></Carousel></div>

            <div className='m-3'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
            <div><Footer></Footer></div>
        </div>
    )
}
