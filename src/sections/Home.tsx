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
function Home() {
    const[inpval,setInpval] = useState()
    function ChangeInp(event:any){
        setInpval(event.target.value)
        
    }

    const[inpvalSecond,setInpvalSecond] = useState()
    function ChangeInpSecond(event:any){
        setInpvalSecond(event.target.value)
        
    }

  return (
    <div className="home">
        
        <div className='h-back'>
        <div className="h-header">
            <img src={netlfix} alt="" className='h-netflix'/>
            <div className='h-nav-cont'>
                <select className='h-select'>
                    
                    <option className='h-option' value="en-GE">English</option>
                    <option className='h-option' value="ru-GE">Русский</option>
                </select>
                <button className='h-button'>Sing in</button>
            </div>
            </div>
            <div className='h-bigger-cont'>
            <div className='h-cont'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form  className='h-email-cont'>
                 
                    <input onChange={ChangeInp}  minLength={5} type="email" className='h-email' required/> 
                    <label className={!inpval ?'h-label' : 'h-new-label'} htmlFor="">Email Address</label>
                    <button>Get Started &gt;</button>
                </form>
                </div>
                </div>
        </div>
        <div className='h-tv'>
            <div className='h-tv-text'>
                <h1>Enjoy on your TV</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
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
                <h1>Download your shows to watch offline</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
            </div>
          
        </div>


        <div className='h-monitor'>
            <div className='h-monitor-text'>
                <h1>Enjoy on your TV</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
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
                <h1>Enjoy on your TV</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
          
        </div>


    <div className='h-question-cont'>
        <h1 className='h-qestion-text'>Frequently Asked Questions</h1>
        <Infobox headText='What is netflix' 
        Text='<h1>Netflix is a streaming service that offers a wide variety of
         award-winning TV shows,
         movies, anime, documentaries, and more on thousands of internet-connected devices.
        <br>
        <br>
        You can watch as much as you want, whenever you want without a single commercial
         – all for one low monthly price. Theres always something new to discover and new 
         TV shows and movies are added every week! </h1>'
        
         />
         <Infobox headText='How much does Netflix cost?' 
        Text=' <h1 >Watch Netflix on your smartphone, tablet, Smart TV, laptop,
         or streaming device, all for one fixed monthly fee. Plans range from EUR9.39
          to EUR13.99 a month. No extra costs, no contracts. </h1>'
      
         />
          <Infobox headText='Where Can I Watch' 
        Text=' <h1 >Watch anywhere, anytime. Sign in with your Netflix account to
         watch instantly on the web at netflix.com from your personal computer or
          on any internet-connected device that offers the Netflix app, including
           smart TVs, smartphones, tablets, streaming media players and game consoles.
    <br/>
    <br/>
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere. </h1>'
      
         />
          <Infobox headText='How do I cancel?' 
        Text='<h1>Netflix is flexible. There are no pesky contracts
         and no commitments. You can easily cancel your account 
         online in two clicks. There are no cancellation fees
          – start or stop your account anytime.</h1>'
      
         />
             <Infobox headText='What can I watch on Netflix?' 
        Text='<h1>Netflix has an extensive library of feature films,
         documentaries, TV shows, anime, award-winning Netflix originals,
          and more. Watch as much as you want, anytime you want.</h1>'
        
         />
                <Infobox headText='Is Netflix good for kids?' 
        Text='<h1>The Netflix Kids experience is included in your 
        membership to give parents control while kids enjoy family-friendly
         TV shows and movies in their own space.
        <br/>
        <br/>
Kids profiles come with PIN-protected parental controls that let you restrict
 the maturity rating of content kids can watch and block specific titles you 
 don’t want kids to see.</h1>'
        
         />
              <Infobox headText='Why am I seeing this language?' 
        Text='<h1>Your browser preferences determine the language shown here.</h1>'
     
         />
         <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
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
        <select className='h-footer-select'>
                    
                    <option className='h-footer-option' value="en-GE">English</option>
                    <option className='h-footer-option' value="ru-GE">Русский</option>
                </select>
                <h4>Netflix Georgia</h4>
        </div>
    </div>

    </div>
  );
}

export default Home;
