import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

//Menu principal
const menuData = [
  {nome: 'home', path: 'home'},
  {nome: 'planos', path: 'planos'},
  {nome: 'sobre', path: 'sobre'},
  {nome: 'equipe', path: 'professores'},
  {nome: 'contato', path: 'contato'},
]

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1310px)',
  });

  return (  
    <nav className="flex items-center p-2 gap-5">
       {
          menuData.map((link) => {
            return (
              <Link to={link.path} spy={true} smooth={!isDesktop ? 'true' : 'false'} duration={500}
                className="hover:text-black transition-all cursor-pointer capitalize font-semibold">
                  {link.nome}
              </Link>
            )
          })
        }
    </nav>
  )
}
export default Navbar 