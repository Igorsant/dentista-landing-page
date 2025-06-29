import Logo from "/logo-luciana.png"
import Perfil from "/perfil.png"

export default function App() {
  return (
    <div className="font-sans text-amber-900">
      {/* Hero section */}
        <section className="overflow-hidden">
          <div className="mx-auto max-w-7xl pt-10 px-6 lg:flex lg:px-8 lg:items-end">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0">
              <img
                alt="Luciana Plutarco logo"
                src={Logo}
                className="max-w-20 rounded-full"
              />
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-amber-950 sm:text-7xl">
                Dra. Luciana Plutarco
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-amber-900 sm:text-xl/8">
                Com mais de 30 anos de experiência, a Dra. Luciana Plutarco é uma referência em odontologia estética e saúde. Sua clínica oferece tratamentos personalizados para atender às necessidades de cada paciente, sempre com foco na segurança e bem-estar.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://wa.me/message/5ZDAZSCW6IOMC1"
                  className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Agende sua consulta
                </a>
              </div>
            </div>
            <div className="">        
                <img
                  alt="App screenshot"
                  src={Perfil}
                  className="w-70 mx-auto"
                />
            </div>
          </div>
        </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8 text-amber-950">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Limpeza e prevenção",
            "Clareamento dental",
            "Facetas de porcelana",
            "Implantes dentários",
            "Prótese dentária",
            "Cirurgias e extrações",
          ].map((servico) => (
            <div
              key={servico}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center"
            >
              <h3 className="font-semibold text-lg">{servico}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-amber-950">Contato</h2>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/5599999999999" className="text-teal-600">
            +55 85 98576-7080
          </a>
        </p>
        <p>
          <strong>Endereço:</strong> Rua Carolina Sucupira, 345 - Sala 16 - Fortaleza/CE
        </p>
        <p>
          <strong>Email:</strong> lpnmlb@hotmail.com
        </p>
      </section>

      {/* Rodapé */}
      <footer className="bg-teal-600 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Dra. Luciana Plutarco. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
