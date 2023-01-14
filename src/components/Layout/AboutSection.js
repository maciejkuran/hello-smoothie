import classes from './AboutSection.module.css';
import Card from '../UI/Card';
import BottomLine from '../UI/BottomLine';
import farmerImg from '../../assets/img/farmer.png';
import avocadoImg from '../../assets/img/avocado.png';

const AboutSection = () => {
  return (
    <section className={classes.about}>
      <div className={classes['about__internal']}>
        <h2>Our mission</h2>
        <div className={classes['about__grid']}>
          <Card className={classes['about__grid__item']}>
            <h3>We spread healthy lifestyle.</h3>
            <BottomLine />
            <p>
              A healthy lifestyle can help you thrive as you move through your life's journey.
              Making healthy choices isn't always easy but we make it easy for you by preparing and
              delivering fresh & healthy smoothies. Eating enough fruits and vegetables is crucial
              to good health. Smoothies can provide a source of energy and protein.
            </p>
            <img src={avocadoImg}></img>
          </Card>
          <Card className={classes['about__grid__item']}>
            <h3>We support local farmers.</h3>
            <BottomLine />
            <p>
              The food from the grocery stores is often chemically treated due to the long shipping
              from further places. Many local farmers do not rely on other corporations. This way,
              they don't need to grow certain foods on time or in a certain amount, so there is no
              need for pesticides to keep the foods fresh for longer.
            </p>
            <img src={farmerImg}></img>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
