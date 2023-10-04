import React,{useEffect, useState} from 'react';
import '../styles/home.css';
import netlfix from "../assets/netlfix.png"
import tv from "../assets/tv.png"
import phone from "../assets/phone.jpg"
import stranger from "../assets/stranger.png"
import monitor from "../assets/monitor.png"
import kids from "../assets/kids.png"
import Infobox from '../components/Infobox';
import web from "../assets/web.png"
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
function Home() {
    const[inpval,setInpval] = useState()
    const [language,setLanguage] = useState("en")
    function ChangeInp(event:any){
        setInpval(event.target.value)
        
    }

    const[inpvalSecond,setInpvalSecond] = useState()
    function ChangeInpSecond(event:any){
        setInpvalSecond(event.target.value)
        
    }
    const { t } = useTranslation();
    const handleLanguageChange = (event:any)=>{
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage)
        setLanguage(event.target.value)
    }
  return (
    <div className="home">
        
        <div className='h-back'>
        <div className="h-header">
            <img src={netlfix} alt="" className='h-netflix'/>
            <div className='h-nav-cont'>
                <select className='h-select' value={language} onChange={handleLanguageChange}>
                    
                    <option className='h-option'  value="en">English</option>
                    <option className='h-option' value="ru">Русский</option>
                </select>
                <button className='h-button'>Sing in</button>
            </div>
            </div>
            <div className='h-bigger-cont'>
            <div className='h-cont'>
                <h1>{t('home.header.title')}</h1>
                <h3>{t('home.header.subtitle')}</h3>
                <h3>{t('home.header.cta')}</h3>
                <form  className='h-email-cont'>
                 
                    <input onChange={ChangeInp}  minLength={5} type="email" className='h-email' required/> 
                    <label className={!inpval ?'h-label' : 'h-new-label'} htmlFor="">Email Address</label>
                    <button>{t('home.button.started')} &gt;</button>
                </form>
                </div>
                </div>
        </div>
        <div className='h-tv'>
            <div className='h-tv-text'>
                <h1>{t('home.main.tv')}TV</h1>
                <h2>{t('home.main.tvsubtitle')}</h2>
            </div>
            <div className='h-tv-image'><img src={tv} alt="" />
            <video autoPlay muted playsInline loop><source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'></source></video>
            </div>
        </div>




        <div className='h-download'>
        <div className='h-download-image'><img src={phone} alt="" />
        <div className='h-d-cont'>
    <img src={stranger}/>
    <div className='h-d-t-cont'>
        <h4>Stranger Things</h4>
        <h5>Downloading...</h5>
    </div>
      <img className='h-dowloand-image-phone'  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt=""   />
        </div>
            {/* <video autoPlay muted playsInline loop><source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'></source></video> */}
            </div>
            <div className='h-download-text'>
                <h1>{t('home.main.phone')}</h1>
                <h2>{t('home.main.phonesubtitle')}</h2>
            </div>
          
        </div>


        <div className='h-monitor'>
            <div className='h-monitor-text'>
                <h1>{t('home.main.lowertv')}</h1>
                <h2>{t('home.main.lowertvsubtitles')}</h2>
            </div>
            <div className='h-monitor-image'><img src={monitor} alt="" />
            <video autoPlay muted playsInline loop><source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'></source></video>
            </div>
        </div>





        <div className='h-kids'>
        <div className='h-kids-image'>
            <img src={kids} alt="" className="src" />
            </div>
            <div className='h-kids-text'>
                <h1>{t('home.main.kids')}</h1>
                <h2>{t('home.main.kidssubtitle')}</h2>
            </div>
          
        </div>


    <div className='h-question-cont'>
        <h1 className='h-qestion-text'>{t('home.footer.question')}</h1>
        <Infobox headText={t('question1')}
        Text={t('answer1')}
        
         />
         <Infobox headText={t('question2')} 
        Text={t('answer2')}
      
         />
          <Infobox headText={t('question3')}
        Text={t('answer3')}
         />
          <Infobox headText={t('question4')}
        Text={t('answer4')}
      
         />
             <Infobox headText={t('question5')} 
        Text={t('answer5')}
        
         />
                <Infobox headText={t('question6')} 
        Text={t('answer6')}
        
         />
              <Infobox headText={t('question7')} 
        Text={t('answer7')}
     
         />
         <h2>{t('ready')}</h2>
         <div className='h-email-cont-bottom'>
                 
                 <input onChange={ChangeInpSecond} type='email' className='h-email' required/> 
                 <label className={!inpvalSecond ? 'h-label' : "h-label-second-bottom"} htmlFor="">Email Address</label>
                 <button>Get Started &gt;</button>
             </div>
    </div>

    <div className="h-footer">
        <div className='h-footer-head'>
            <a href='#'>Questions? Contact us.</a>
        </div>
        <div className='h-list'>
            <ul>
                <li><a href='#'>FAQ</a></li>
                <li><a href='#'>Investor Relationtship</a></li>
                <li><a href='#'>Privacy</a></li>
                <li><a href='#'>Speed Test</a></li>
                <li><a href='#'>Help Center</a></li>
                <li><a href='#'>Jobs </a></li>
                <li><a href='#'>Coockie Preferences</a></li>
                <li><a href='#'>Legal Notives</a></li>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>Ways to Watch</a></li>
                <li><a href='#'>Corporate Information</a></li>
                <li><a href='#'>Only on Netlfix</a></li>
                <li><a href='#'>Media Center</a></li>
                <li><a href='#'>Terms of Use</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
        <div className='h-footer-bottom'>
        <select className='h-footer-select'value={language} onChange={handleLanguageChange}>
                    
                    <option className='h-footer-option' value="en">English</option>
                    <option className='h-footer-option' value="ru">Русский</option>
                </select>
                <h4>Netflix Georgia</h4>
        </div>
    </div>

    </div>
  );
}

export default Home;
