import styles from './LandingPage.module.css'; // Import css modules stylesheet as styles

const LandingPage = () => {


  return (
    <div className="text-center banner-sec-text onsen-1">
      <h1 className={styles.bannerSecTextH1}>INDULGE</h1>
      <h3 className={styles.bannerSecTextH3}>IN THE TRANQUILITY</h3>
      <div className={`${styles.btn} ${styles.btnBlack} `}>Book</div>

    </div>

  );
}

export default LandingPage;
