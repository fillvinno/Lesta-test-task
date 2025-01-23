import React from 'react';
import styles from './Footer.module.scss'
import footerLogo from '../../assets/footer-logo.svg'

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.logoSection}>
        <img src={footerLogo} alt='footer-logo'/>
        <div className={styles.about}>
          © Леста Игры, 2022–2025. Игра «Мир кораблей» основана на интеллектуальной собственности третьих лиц.
          Все права на объекты прав третьих лиц принадлежат их законным правообладателям.
        </div>
      </div>
      <div className={styles.leftMediaLinks}>
        <h4>Подписывайтесь и общайтесь</h4>
        <ul className={styles.links}>
          <li>
            <a href='https://vk.com/korabli_vk'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/vk.png' alt=''/>
            </a>
            ВКонтакте
          </li>
          <li>
            <a href='https://t.me/korabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/telegram_nKUIUMm.png' alt=''/>
            </a>
            Telegram
          </li>
          <li>
            <a href='https://ok.ru/korabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/ok.png' alt=''/>
            </a>
            Одноклассники
          </li>
          <li>
            <a href='https://dzen.ru/korabli_dz'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/zen.png' alt=''/>
            </a>
            Дзен
          </li>
          <li>
            <a href='https://forum.korabli.su/?utm_source=mk-portal&utm_medium=social-block'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/forum.png' alt=''/>
            </a>
            Форум
          </li>
        </ul>
      </div>
      <div className={styles.rightMediaLinks}>
        <h4>Смотрите видео и стримы</h4>
        <ul className={styles.links}>
          <li>
            <a href='https://www.youtube.com/@korabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/youtube.png' alt=''/>
              YouTube
            </a>
          </li>
          <li>
            <a href='https://www.twitch.tv/lestakorabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/twitch.png' alt=''/>
              Twitch
            </a>
          </li>
          <li>
            <a href='https://trovo.live/s/LestaKorabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/trovo.png' alt=''/>
              Trovo
            </a>
          </li>
          <li>
            <a href='https://live.vkplay.ru/lestakorabli'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/favicon.png' alt=''/>
              VK Видео Live
            </a>
          </li>
          <li>
            <a href='https://vk.com/video/@korabli_vk'>
              <img src='https://cdn-media.korabli.su/dcont/sharingservices_icons/vk-video.png' alt=''/>
              VK Видео
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;