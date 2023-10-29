import ProfessoresCard from "./ProfessoresCard"

const Professores = (props) => { 
  return (
    <section className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5" id="professores">
      <h1 className="text-4xl font-semibold text-center mt-10">Equipe de apoio</h1>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 mt-8">
        <ProfessoresCard title="Geovana" img="gi.png"/>
        <ProfessoresCard title="Josi" img="josi.png"/>
        <ProfessoresCard title="Dionathan" img="dionatan.png"/>
      </div>
    </section>
  )
}
export default Professores   