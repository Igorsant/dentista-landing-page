export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Dra. Luciana Plutarco</h1>
        <p className="text-lg mb-6">
          Especialista em Odontologia Estética e Implantes
        </p>
        <a
          href="#contato"
          className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Agende sua consulta
        </a>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Sobre a Dra. Luciana</h2>
        <p>
          Com mais de 30 anos de experiência, a Dra. Luciana é referência em
          odontologia estética em Fortaleza, oferecendo atendimento humanizado e
          resultados de excelência.
        </p>
      </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Serviços</h2>
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
        <h2 className="text-2xl font-semibold mb-6">Contato</h2>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/5599999999999" className="text-teal-600">
            +55 99 99999-9999
          </a>
        </p>
        <p>
          <strong>Endereço:</strong> Av. Principal, 123 - Fortaleza/CE
        </p>
        <p>
          <strong>Email:</strong> contato@draana.com.br
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
