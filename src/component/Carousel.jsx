import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Card from './shared/Card';
function Carousel() {
  return (<>
    <div className="carousel__content">
    <h2 className="carousel__header">Mới cập nhật</h2>
    <OwlCarousel items={6}
    className='owl-theme'
    loop
    nav
    margin={20}>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
        <Card chap='50' time='5 GIỜ'></Card>
    </OwlCarousel>
    </div>
    </>
  )
}

export default Carousel