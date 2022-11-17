import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signals from '../images/signals.png';
import styles from './OnsenItems.module.css';

function OnsenItems(props) {
  const [selectedContent, setSelectedContent] = useState('about');

  const { onsenData } = props;

  const showOnsenContent = () => {
    if (selectedContent === 'about') {
      return <div dangerouslySetInnerHTML={{ __html: onsenData.about }} />

    }

    if (selectedContent === 'pricing') {
      return <div dangerouslySetInnerHTML={{ __html: onsenData.pricing }} />

    }

    if (selectedContent === 'policies') {
      return <div dangerouslySetInnerHTML={{ __html: onsenData.policies }} />

    }
  }

  return (
    <div className='row m-l-30 m-r-30 '>
      <div className='col-6'>
        <img
          className={styles.onsenImage}
          src={onsenData.thumbnailUrl} />
      </div>

      <div className='col-6'>
        <h1>{onsenData.title}</h1>
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
            <div className="btn btn-dark">
              CHECK AVAILABILITY
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default OnsenItems;
