
import "./Footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    let FooterList = {
        No: 9696255752,
        Address: "New Hiader Ganj Lucknow",
        Gmial: "irfankhanofficial140@gmial.com",
        instagram: "https://www.instagram.com/irfan__k.h.a.n?igsh=cTF1b2xuNHdyMmts",
        facebook: "https://www.facebook.com/share/1E79nqdT1U/",
        Github:"https://github.com/DevIrfankhan"
        
        
    }
    return (
        <div className='FooterDiv'>
            <div className="FirstFooterDiv">
                <span> {FooterList.No} </span>
                <span> {FooterList.Address} </span>
                <span> {FooterList.Gmial} </span>
      </div>
            <div className="FirstFooterDivsocial">

            <a href={FooterList.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram">insta</i>
                </a>
            <a href={FooterList.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook">facebook</i>
                </a>
            <a href={FooterList.Github} target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github">github</i>
                </a>
               
      </div>
            <div className="FirstFooterDiv">
                <i className="fa-solid fa-arrow-up" onClick={scrollTop}></i>
               {/* <snap onClick={scrollTop}>scrool</snap> */}
      </div>
    </div>
  )
}

export default Footer
