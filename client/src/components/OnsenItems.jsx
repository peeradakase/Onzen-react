import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signals from '../images/signals.png';
import styles from './OnsenItems.module.css';

function OnsenItems(props) {
  const [selectedContent, setSelectedContent] = useState('about');

  const { onsen } = props;

  const showOnsenContent = () => {
    if (selectedContent === 'about') {
      return <div dangerouslySetInnerHTML={{ __html: onsen.about }} />

    }

    if (selectedContent === 'pricing') {
      return <div dangerouslySetInnerHTML={{ __html: onsen.pricing }} />

    }

    if (selectedContent === 'policies') {
      return <div dangerouslySetInnerHTML={{ __html: onsen.policies }} />

    }
  }

  return (
    <div className='row m-l-30 m-r-30 '>
      <div className='col-6'>
        <div>
          {onsen.images.map(image => {
            return  <img key={image} src={image.url} alt="" />
          })}
        </div>
      </div>

      <div className='col-6'>
        <h1>{onsen.title}</h1>
        <img
          className={styles.signalImage}
          src={Signals} alt="signals" />

        <div class="m-b-60">

          <button
            className="btn btn-outline-secondary m-b-10"
            onClick={() => {
              setSelectedContent('about')
            }}>About
          </button>


          <button
            className="m-l-5 m-b-10 btn btn-outline-secondary"
            onClick={() => {
            setSelectedContent('pricing')
          }}>Pricing
          </button>

          <button
            className="m-l-5 m-b-10 btn btn-outline-secondary"
            onClick={() => {
            setSelectedContent('policies')
          }}>Policies
          </button>
          {showOnsenContent()}

          <Link
            to={`CHECK AVAILABILITY`}>
            <div className="btn btn-dark m-b-150">
              CHECK AVAILABILITY
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default OnsenItems;
