
import "./Footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {

    let FooterList = {
        No: 9696255752,
        Address: "New Hiader Ganj Lucknow",
        Gmial: "irfankhanofficial140@gmial.com",
        instagram: "https://www.instagram.com/irfan__k.h.a.n?igsh=cTF1b2xuNHdyMmts",
        facebook: "",
        
        
    }
    return (
        <div className='FooterDiv'>
            <div className="FirstFooterDiv">
                <span> {FooterList.No} </span>
                <span> {FooterList.Address} </span>
                <span> {FooterList.Gmial} </span>
      </div>
            <div className="FirstFooterDiv">

            <a href={FooterList.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram">insta</i>
                </a>
            <a href={FooterList.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram">insta</i>
                </a>
            <a href={FooterList.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram">insta</i>
                </a>
               
      </div>
            <div className="FirstFooterDiv">
                <span> {FooterList.No} </span>
                <span> {FooterList.Address} </span>
                <span> {FooterList.Gmial} </span>
      </div>
    </div>
  )
}

export default Footer
