import React from 'react'
import './CategorySlider.css'
import { ThemeContext } from "../../App";
import Style from 'style-it';



export default function CategorySlider(){
    const theme= React.useContext(ThemeContext)

    return(<Style>
       {`.slider::before, .slider::after, .slider2::before, .slider2::after {
    background: linear-gradient(to right,${theme.background}  0%, rgba(255, 255, 255, 0) 100%); 
    content: "";
    height: 200px;
    position: absolute;
    width: 200px;
    z-index: 2;
    transition: ${theme.transition};
`}

    <div className="slider" >
  <div className="slide-track">
      
      
   <a href="https://teachizi.hu/tanfolyam-keresese/kereses/nemet/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-allemand-1-300x300.png"/>
      <span style={{color: theme.color}}>Német</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/spanyol/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-espagnol-1.png"/>
      <span style={{color: theme.color}}>Spanyol</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/olasz/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-italien-1.png"/>
      <span style={{color: theme.color}}>Olasz</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/angol/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-anglais-1.png"/>
      <span style={{color: theme.color}}>Angol</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/norveg/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-norvege-150x150.png"/>
      <span style={{color: theme.color}}>Norvég</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/francia/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-francais-1.png"/>
      <span style={{color: theme.color}}>Francia</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/matematika/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-maths.png"/>
      <span style={{color: theme.color}}>Matematika</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/foldrajz/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-geographie.png"/>
      <span style={{color: theme.color}}>Földrajz</span>
  </div>  </a>
  
  
    <a href="https://teachizi.hu/tanfolyam-keresese/kereses/informatika/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-informatique.png"/>
      <span style={{color: theme.color}}>Informatika</span>
  </div>  </a>
  
  
    <a href="https://teachizi.hu/tanfolyam-keresese/kereses/japan/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-japonais.png"/>
      <span style={{color: theme.color}}>Japán</span>
  </div>  
    </a>
    
    
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/fizika/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-physique.png"/>
      <span style={{color: theme.color}}>Fizika</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/biologia/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-biologie.png"/>
      <span style={{color: theme.color}}>Biológia</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/elemzes/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-maths.png"/>
      <span style={{color: theme.color}}>elemzés</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/drama-es-tanc/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-theatre-150x150.png"/>
      <span style={{color: theme.color}}>Dráma és tánc</span>
  </div>  </a>
  
  
 <a href="https://teachizi.hu/tanfolyam-keresese/kereses/filozofia/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-philosophie-150x150.png"/>
      <span style={{color: theme.color}}>Filozófia</span>
  </div>  
 </a>
 
    <a href="https://teachizi.hu/tanfolyam-keresese/kereses/nemet/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-allemand-1-300x300.png"/>
      <span style={{color: theme.color}}>Német</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/spanyol/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-espagnol-1.png"/>
      <span style={{color: theme.color}}>Spanyol</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/olasz/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-italien-1.png"/>
      <span style={{color: theme.color}}>Olasz</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/angol/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-anglais-1.png"/>
      <span style={{color: theme.color}}>Angol</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/norveg/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-norvege-150x150.png"/>
      <span style={{color: theme.color}}>Norvég</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/francia/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-francais-1.png"/>
      <span style={{color: theme.color}}>Francia</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/matematika/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-maths.png"/>
      <span style={{color: theme.color}}>Matematika</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/foldrajz/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-geographie.png"/>
      <span style={{color: theme.color}}>Földrajz</span>
  </div>  </a>
  
  
    <a href="https://teachizi.hu/tanfolyam-keresese/kereses/informatika/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-informatique.png"/>
      <span style={{color: theme.color}}>Informatika</span>
  </div>  </a>
  
  
    <a href="https://teachizi.hu/tanfolyam-keresese/kereses/japan/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-japonais.png"/>
      <span style={{color: theme.color}}>Japán</span>
  </div>  
    </a>
    
    
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/fizika/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-physique.png"/>
      <span style={{color: theme.color}}>Fizika</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/biologia/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-biologie.png"/>
      <span style={{color: theme.color}}>Biológia</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/elemzes/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/01/icone-teachizi-maths.png"/>
      <span style={{color: theme.color}}>elemzés</span>
  </div>  </a>
  
  
  <a href="https://teachizi.hu/tanfolyam-keresese/kereses/drama-es-tanc/"><div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-theatre-150x150.png"/>
      <span style={{color: theme.color}}>Dráma és tánc</span>
  </div>  </a>
  
  
 <a href="https://teachizi.hu/tanfolyam-keresese/kereses/filozofia/"> <div className='boxcontent' id="boxcontent1">
      <img src="https://teachizi.hu/wp-content/uploads/2022/08/icones-teachizi-philosophie-150x150.png"/>
      <span style={{color: theme.color}}>Filozófia</span>
  </div>  
 </a>
 
 
  </div>
</div>
</Style>
)
}