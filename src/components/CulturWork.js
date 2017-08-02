import React, { Component } from 'react';
import Slider from 'react-slick';
import './CulturWork.css';

export default class CulturWork extends Component {
  render() {
    return (
      <li className="listItem">
        <Slider {...this.props.settings}>
          <div className="item"><img src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi" alt=""/></div>
          <div className="item"><img src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr" /></div>
          <div className="item"><img src="https://www.petfinder.com/wp-content/uploads/2012/11/146067791-how-to-dog-bath-632x475.jpg"/></div>
        </Slider>
        <p>cultur guru</p>
      </li>
    );
  }
}
