
const Footer = () => { 
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:mx-32 mx-5" id="sobre">
      <div className="flex flex-col px-5 py-5">&copy;inneo.org | 2017 - { currentYear }  | all rights reserved</div>
    </section>
  )
}
export default Footer 