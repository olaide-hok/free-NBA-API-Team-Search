import { SiNba } from "react-icons/si"

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-4 bg-gray-700 
        text-primary-content footer-center">
            <div>
                <SiNba className='inline pr-2 text-4xl' />                
                <p >Copyright &copy; {footerYear} Habeeb Kareem All rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer