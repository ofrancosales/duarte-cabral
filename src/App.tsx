/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, ChevronUp, MapPin, Phone, Clock,
  Instagram, CheckCircle, Briefcase, Building2, Landmark,
  TrendingUp, ShieldCheck, Scale, MessageCircle, ArrowRight
} from 'lucide-react';

const WA_LINK = "https://wa.me/5585988804306";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scale size={32} className={isScrolled ? 'text-blue-900' : 'text-white'} />
          <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Duarte & Cabral
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${isScrolled ? 'text-gray-900 hover:text-blue-900' : 'text-white hover:text-yellow-400'} transition-colors`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 font-medium hover:text-blue-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
        <img
          src="https://placehold.co/1920x1080/1E3A8A/ffffff?text=Foto+do+escritório+ou+ambiente+corporativo"
          alt="Ambiente corporativo Duarte & Cabral"
          width="1920"
          height="1080"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>
    </div>
    <div className="container mx-auto px-4 md:px-8 relative z-10 text-white w-full md:w-3/4 lg:w-2/3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Advocacia Tributária em Fortaleza
      </h1>
      <p className="text-lg md:text-xl mb-4 text-gray-200 font-medium">
        A Duarte & Cabral Advocacia Tributária ajuda empresas em Fortaleza a reduzir impostos legalmente, recuperar tributos pagos indevidamente e se defender de cobranças fiscais.
      </p>
      <p className="text-base md:text-lg mb-8 text-gray-300">
        Atendemos empresas de diversos setores no Ceará com estratégias jurídicas focadas em segurança tributária e resultados financeiros.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-colors flex items-center justify-center text-center"
        >
          <MessageCircle className="mr-2" size={20} />
          Falar no WhatsApp
        </a>
        <a
          href="#servicos"
          className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-blue-900 transition-colors text-center"
        >
          Conhecer nossos serviços
        </a>
      </div>
      <p className="text-sm text-yellow-400 font-medium flex items-center">
        <MapPin size={16} className="mr-1" /> Atendimento empresarial em Fortaleza e em todo o Brasil.
      </p>
    </div>
  </section>
);

const Credibility = () => (
  <section id="credibilidade" className="py-12 bg-white border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="sr-only">Resultados da Duarte & Cabral Advocacia Tributária</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Building2 size={40} className="text-blue-900 mb-4" />
          <p className="text-2xl font-bold text-gray-900 mb-2">+500</p>
          <p className="text-gray-600 font-medium">empresas atendidas</p>
        </div>
        <div className="flex flex-col items-center">
          <TrendingUp size={40} className="text-blue-900 mb-4" />
          <p className="text-2xl font-bold text-gray-900 mb-2">Mais de R$100 milhões</p>
          <p className="text-gray-600 font-medium">recuperados para clientes</p>
        </div>
        <div className="flex flex-col items-center">
          <Scale size={40} className="text-blue-900 mb-4" />
          <p className="text-xl font-bold text-gray-900 mb-2">Equipe especializada</p>
          <p className="text-gray-600 font-medium">em direito tributário</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin size={40} className="text-blue-900 mb-4" />
          <p className="text-xl font-bold text-gray-900 mb-2">Atendimento empresarial</p>
          <p className="text-gray-600 font-medium">em Fortaleza e todo o Ceará</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Escritório especializado em direito tributário em Fortaleza
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              A Duarte & Cabral Advocacia Tributária é um escritório focado em soluções jurídicas para empresas que precisam lidar com desafios fiscais e tributários. Atuamos em Fortaleza oferecendo planejamento tributário, recuperação de créditos tributários e defesa em execuções fiscais.
            </p>
            <p>
              Nosso trabalho é ajudar empresas a pagar apenas os impostos realmente devidos, identificar valores pagos indevidamente e estruturar estratégias tributárias seguras dentro da legislação.
            </p>
            <p>
              Atendemos empresas de diferentes setores, incluindo indústrias, supermercados, atacarejos e agronegócios, sempre com um atendimento personalizado e foco em resultados financeiros reais para o negócio.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-300 aspect-video flex items-center justify-center text-gray-500">
            <img
              src="https://placehold.co/800x600/e2e8f0/475569?text=Foto+da+equipe+ou+fachada"
              alt="Equipe Duarte & Cabral"
              width="800"
              height="600"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Planejamento Tributário em Fortaleza",
      desc: "O planejamento tributário analisa a estrutura fiscal da empresa para identificar oportunidades legais de redução de impostos. Com estratégias jurídicas adequadas, sua empresa pode pagar menos tributos e manter total segurança jurídica.",
      icon: <Landmark size={32} />
    },
    {
      title: "Recuperação de Créditos Tributários",
      desc: "Muitas empresas pagam tributos indevidamente sem perceber. A recuperação de créditos tributários identifica esses valores e permite que a empresa recupere impostos pagos a mais. Essa estratégia pode gerar uma importante recuperação financeira para o negócio.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Defesa em Execuções Fiscais",
      desc: "Quando a empresa recebe uma cobrança fiscal ou entra em execução fiscal, é essencial ter uma defesa jurídica estratégica. Atuamos na defesa de empresas contra cobranças tributárias, analisando o processo e buscando as melhores alternativas legais.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços de advocacia tributária para empresas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="text-blue-900 mb-6 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{srv.title}</h3>
              <p className="text-gray-700 mb-8 flex-grow">{srv.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-900 font-bold hover:text-blue-700 transition-colors"
              >
                Falar no WhatsApp <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-xl p-8 md:p-12 text-center text-white">
          <p className="text-xl md:text-2xl font-medium mb-8">
            Se sua empresa precisa de apoio jurídico na área tributária, fale com nossa equipe e entenda qual estratégia faz mais sentido para o seu caso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-colors justify-center"
          >
            <MessageCircle className="mr-2" size={20} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefitsList = [
    { title: "Redução legal da carga tributária", desc: "Estratégias tributárias bem estruturadas permitem que empresas paguem apenas os impostos necessários dentro da legislação." },
    { title: "Recuperação de valores pagos indevidamente", desc: "A análise fiscal pode identificar tributos pagos a mais e permitir que a empresa recupere valores que impactam diretamente no caixa." },
    { title: "Segurança jurídica para decisões fiscais", desc: "Todas as estratégias são desenvolvidas com base na legislação tributária, reduzindo riscos fiscais para a empresa." },
    { title: "Atendimento personalizado para empresas", desc: "Cada empresa possui uma realidade tributária diferente. Por isso, realizamos análises específicas para cada cliente." },
    { title: "Estratégia focada em resultado financeiro", desc: "Nosso objetivo é gerar impacto financeiro positivo para a empresa por meio de planejamento e recuperação tributária." }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Benefícios do planejamento tributário estratégico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((ben, idx) => (
            <div key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="text-blue-900 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{ben.title}</h3>
                <p className="text-gray-700 text-sm">{ben.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "1", title: "Primeiro contato", desc: "A empresa entra em contato com nossa equipe para apresentar sua situação tributária ou a necessidade jurídica." },
    { num: "2", title: "Análise tributária inicial", desc: "Realizamos uma análise da estrutura fiscal da empresa para identificar oportunidades ou riscos tributários." },
    { num: "3", title: "Diagnóstico jurídico", desc: "Apresentamos um diagnóstico claro com as estratégias possíveis, seja planejamento tributário, recuperação de créditos ou defesa fiscal." },
    { num: "4", title: "Implementação da estratégia", desc: "Iniciamos o trabalho jurídico necessário para reduzir impostos, recuperar tributos ou defender a empresa em processos fiscais." },
    { num: "5", title: "Acompanhamento jurídico", desc: "Nossa equipe acompanha o caso garantindo segurança jurídica durante todo o processo." }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Como funciona nosso atendimento tributário
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex mb-8 relative">
              {idx !== steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-blue-200"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-sm">
                {step.num}
              </div>
              <div className="ml-6 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="depoimentos" className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empresas que confiaram na Duarte & Cabral
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Ao longo da nossa atuação em advocacia tributária, já ajudamos centenas de empresas em Fortaleza e no Ceará a organizar sua estrutura fiscal e recuperar valores pagos indevidamente.
          </p>
          <p className="font-bold text-yellow-400 text-xl mb-4">
            Nosso foco é oferecer estratégias jurídicas que tragam impacto financeiro real para o negócio.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b pb-4">Empresas atendidas incluem:</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span className="font-medium text-lg">Indústrias</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span className="font-medium text-lg">Empresas do agronegócio</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span className="font-medium text-lg">Supermercados e atacarejos</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span className="font-medium text-lg">Empresas com grande volume de faturamento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Area = () => (
  <section id="area-de-atuacao" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Advocacia tributária em Fortaleza e todo o Ceará
          </h2>
          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              A Duarte & Cabral Advocacia Tributária atua com atendimento empresarial em Fortaleza, oferecendo soluções jurídicas em planejamento tributário, recuperação de créditos tributários e defesa em execução fiscal.
            </p>
            <p>
              Atendemos empresas localizadas em diversos bairros da cidade, incluindo Aldeota, Meireles, Cocó, Guararapes e Dionísio Torres, além de prestar atendimento empresarial em todo o estado do Ceará.
            </p>
            <p>
              Nosso escritório está localizado na Avenida Santos Dumont, na Aldeota, uma das regiões empresariais mais importantes de Fortaleza, facilitando o acesso de empresas da região.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Informações de contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-900 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-900">Endereço:</strong>
                  <span className="text-gray-700">Avenida Santos Dumont, 10000<br />Aldeota – Fortaleza – CE</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-blue-900 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-900">Horário de atendimento:</strong>
                  <span className="text-gray-700">Segunda a Sexta das 08:00 às 18:00</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-blue-900 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-gray-900">Telefone / WhatsApp:</strong>
                  <span className="text-gray-700">(85) 98880-4306</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[400px] lg:h-auto min-h-[400px]">
          <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center text-gray-500 shadow-md">
            {/* Placeholder for Google Maps iframe */}
            <div className="text-center p-4">
              <MapPin size={48} className="mx-auto mb-2 opacity-50" />
              <p>Inserir mapa do Google Maps aqui.</p>
              <p className="text-sm mt-2">Avenida Santos Dumont, 10000 - Aldeota, Fortaleza - CE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "O que faz um advogado tributário em Fortaleza?", a: "O advogado tributário atua ajudando empresas a lidar com questões fiscais, como planejamento tributário, recuperação de créditos tributários e defesa em execuções fiscais." },
    { q: "Como funciona a recuperação de créditos tributários para empresas?", a: "É realizada uma análise fiscal para identificar tributos pagos indevidamente. Caso sejam encontrados valores, é possível iniciar o processo para recuperação desses créditos." },
    { q: "Minha empresa pode recuperar impostos pagos indevidamente?", a: "Sim, muitas empresas possuem tributos pagos a mais sem perceber. A análise tributária identifica se existe possibilidade de recuperação." },
    { q: "Quanto uma empresa pode economizar com planejamento tributário?", a: "Cada empresa possui uma estrutura tributária diferente. O planejamento pode gerar uma redução significativa na carga tributária dependendo do caso." },
    { q: "Como se defender de uma execução fiscal?", a: "A defesa em execução fiscal envolve a análise do processo e a construção de estratégias jurídicas para contestar ou negociar a cobrança tributária." },
    { q: "Quanto tempo leva para recuperar créditos tributários?", a: "O prazo depende do tipo de tributo e do procedimento necessário para recuperação. Após a análise inicial, é possível estimar o tempo do processo." },
    { q: "Toda empresa pode fazer planejamento tributário?", a: "Sim. Empresas de diferentes portes podem se beneficiar do planejamento tributário para organizar sua estrutura fiscal." },
    { q: "Quando contratar um advogado tributário para a empresa?", a: "Sempre que a empresa quiser reduzir impostos legalmente, recuperar tributos pagos indevidamente ou receber uma cobrança fiscal." },
    { q: "Onde fica o escritório Duarte & Cabral?", a: "O escritório está localizado na Avenida Santos Dumont, na Aldeota, em Fortaleza." },
    { q: "Como falar com um advogado tributário?", a: "Basta clicar no botão de WhatsApp no site e falar diretamente com nossa equipe." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Dúvidas frequentes sobre advocacia tributária em Fortaleza
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(idx)}
              >
                <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="text-blue-900 shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-900 shrink-0" size={20} />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contato" className="py-24 bg-gray-50 border-t border-gray-200">
    <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Fale com um advogado tributário em Fortaleza
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Se sua empresa precisa reduzir impostos legalmente, recuperar tributos pagos indevidamente ou se defender de cobranças fiscais, fale com nossa equipe.
      </p>
      <p className="text-lg text-gray-700 mb-10 font-medium">
        Nossa atuação é focada em empresas que buscam segurança jurídica e estratégias tributárias eficientes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <MessageCircle className="mr-2" size={20} />
          Falar no WhatsApp
        </a>
        <a
          href="tel:+5585988804306"
          className="bg-blue-900 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-colors flex items-center justify-center"
        >
          <Phone className="mr-2" size={20} />
          Ligar agora
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div>
          <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base"><Phone size={16} className="mr-2 text-blue-900" /> Telefone / WhatsApp:</h3>
          <p className="text-gray-700">(85) 98880-4306</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base"><MapPin size={16} className="mr-2 text-blue-900" /> Endereço:</h3>
          <p className="text-gray-700">Avenida Santos Dumont, 10000<br />Aldeota – Fortaleza – CE</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base"><Clock size={16} className="mr-2 text-blue-900" /> Horário:</h3>
          <p className="text-gray-700">Segunda a Sexta<br />08:00 às 18:00</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Coluna 1 */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Scale size={32} className="text-white" />
            <span className="text-2xl font-bold text-white">Duarte & Cabral</span>
          </div>
          <p className="text-sm mb-6 text-gray-400">
            A Duarte & Cabral Advocacia Tributária atua em Fortaleza oferecendo soluções jurídicas em planejamento tributário, recuperação de créditos tributários e defesa em execuções fiscais para empresas.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/advduartecabral" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Links Rápidos</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Contato</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
              <span>Avenida Santos Dumont, 10000<br />Aldeota – Fortaleza – CE</span>
            </li>
            <li className="flex items-start space-x-3">
              <MessageCircle size={18} className="text-green-500 shrink-0 mt-1" />
              <span>WhatsApp: (85) 98880-4306</span>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-blue-500 shrink-0 mt-1" />
              <span>Segunda a Sexta<br />08:00 às 18:00</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Instagram</h3>
          <p className="text-sm mb-6 text-gray-400">
            Veja conteúdos sobre direito tributário e atualizações jurídicas para empresas.
          </p>
          <a
            href="https://instagram.com/advduartecabral"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
          >
            <Instagram className="mr-2" size={20} />
            @advduartecabral
          </a>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 Duarte & Cabral Advocacia Tributária. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Services />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Area />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
