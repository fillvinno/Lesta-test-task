import Header from "./components/Menu/Menu.tsx";
import Ships from "./components/Ships/Ships.tsx";
import styles from './ShipsPage.module.scss'
import Footer from "./components/Footer/Footer.tsx";

const ShipsPage = () => {
  return (
    <div className={styles.wrap}>
      <Header/>
      <Ships/>
      <Footer/>
    </div>
  );
};

export default ShipsPage;