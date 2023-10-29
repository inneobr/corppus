import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Planos from "@/components/Planos";
import Professores from "@/components/Professores";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <main>
      <Hero />
      <Planos />
      <Sobre />
      <Professores />
      <Contato />
      <Footer />
    </main>
  )
}
