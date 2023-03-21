
import Qr from './Qr'
import styles from './fertilisers.module.css'

const Fertilisers = (props) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['text']}>FERTILISERS</h1>
      <div className='adjust'>
      <Qr rootClassName="root-class-name" image={frame1} image_alt="Nitrogenous" city="Nitrogenous"></Qr>  
      <Qr rootClassName="root-class-name1" image={frame2} image_alt="Phosphorous" city="Phosphorous"></Qr>
      <Qr rootClassName="root-class-name2" image={frame3} image_alt="Urea" city="Urea"></Qr>
      <Qr rootClassName="root-class-name3" image={frame4} image_alt="Calcium Fertilizer" city="Calcium Fertilizer"></Qr>
      </div>
    </div>
  )
}

export default Fertilisers