import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const fadeImages = [
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_01.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_02.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_03.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_04.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_05.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_06.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_07.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_08.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_09.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_10.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_11.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_13.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_14.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_16.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_17.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_18.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_19.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_20.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_21.jpg',
    caption: ''
  },


  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_22.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_22.jpg',
    caption: ''
  },

 

  

  
 

];

const WebtoonSlider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
           <img style={{ width: '100%' }} src={fadeImage.url} alt="Slider"/>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default WebtoonSlider