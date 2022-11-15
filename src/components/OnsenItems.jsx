import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signals from '../images/signals.png';

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
    <div>
      <h1>{onsenData.title}</h1>
      <img src={onsenData.thumbnailUrl} />
      <img src={Signals} alt="signals" />

      <div class="box-onsens">

        <button onClick={() => {
          setSelectedContent('about')
        }}>About
        </button>

        <button onClick={() => {
          setSelectedContent('pricing')
        }}>Pricing
        </button>

        <button onClick={() => {
          setSelectedContent('policies')
        }}>Policies
        </button>
        {showOnsenContent()}

        <Link to={`CHECK AVAILABILITY`}>CHECK AVAILABILITY</Link>

      </div>

    </div>
  )
}

export default OnsenItems;
