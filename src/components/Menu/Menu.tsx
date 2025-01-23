import React from 'react';
import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={styles.links}>
          <a
            className={styles.lestaArrow}
            href="https://lesta.ru/?utm_content=lesta-icon&utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal"
          >
            <img src='https://cm.lesta.ru/media/public/img/jd8cbssiSMiOtPU4trQr1A.svg' alt='lesta'/>
          </a>
          <a
            className={styles.arrow}
          >
            Игры
          </a>
          <a
            className={styles.arrow}
          >
            Сервисы
          </a>
          <a
            style={{color: '#ffbe4c'}}
            href='https://lesta.ru/shop/wows/?utm_content=cm-top&utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Премиум магазин
          </a>
          <a
            style={{color: '#77eeee'}}
            href='https://armory.korabli.su/?utm_content=cm-top&utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Адмиралтейство
          </a>
          <a
            href='https://lesta.ru/support/?utm_content=cm-top&utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Центр поддержки
          </a>
          <a
            style={{color: '#ffbe4c'}}
            href='https://card.lesta.ru/ordercard/mk?utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Карточка Леста
          </a>
          <a
            style={{color: '#5aff8b'}}
            href='https://spasibosberbank.ru/certificates/razvlecheniya/sertifikat-na-pokupki-v-igre-mir-korabley?utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Дублоны за «Спасибо»
          </a>
          <a
            style={{color: '#8dabff'}}
            href='https://gg.rt.ru/lestagames?utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Тариф «Игровой»
          </a>
          <a
            href='https://interzet.dom.ru/landing-promo/gaming-bonus/?utm_source=global-nav&utm_medium=link&utm_campaign=wows-portal'
          >
            Бонусы от Дом.ру
          </a>
          <a
            href=''
          >
            Вакансии
          </a>
        </div>
        <div className={styles.userMenu}>
          <span className={styles.notifications}></span>
          <div className={styles.user}>
            <a
              className={styles.arrow}
            >
              nickname
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <a
            href='https://korabli.su/'
            className={styles.logo}
          >
            <img src={logo} alt='logo' />
          </a>
          <a
            href='https://korabli.su/ru/news/'
          >
            Новости
          </a>
          <a 
            href='' 
            className={styles.witharrow}
          >
            Игра
          </a>
          <a 
            href='' 
            className={styles.witharrow}
          >
            Сообщество
          </a>
          <a
            href='https://friends.korabli.su/?utm_source=mk-portal&utm_medium=top-menu'
          >
            Пригласить друга
          </a>
          <a
            href='https://korabli.su/ru/news/sales-and-events/super-start-2025/'
            className={styles.gifts}
            style={{color: '#fc6'}}
          >
            Подарки новичкам
          </a>
        </div>
        <div className={styles.right}>
          <a className={styles.dowload}>
            Скачать игру
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;