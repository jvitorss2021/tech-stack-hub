"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    content: [
      {
        category: "UI Libraries",
        items: [
          { 
            name: "Aceternity UI", 
            url: "https://ui.aceternity.com", 
            description: "Componentes modernos e animados para Next.js",
            icon: "🎨"
          },
          { 
            name: "Magic UI", 
            url: "https://magicui.design", 
            description: "Componentes mágicos e interativos para React",
            icon: "✨"
          },
          { 
            name: "React Bits", 
            url: "https://www.reactbits.dev", 
            description: "Componentes React prontos para uso",
            icon: "⚛️"
          },
          { 
            name: "Uiverse", 
            url: "https://uiverse.io", 
            description: "Biblioteca de elementos UI open-source",
            icon: "🌌"
          },
          { 
            name: "HyperUI", 
            url: "https://www.hyperui.dev", 
            description: "Componentes Tailwind CSS prontos para uso",
            icon: "⚡"
          },
          { 
            name: "Preline UI", 
            url: "https://preline.co", 
            description: "Biblioteca de componentes Tailwind CSS",
            icon: "🎯"
          },
          { 
            name: "NextUI", 
            url: "https://nextui.org", 
            description: "Biblioteca de componentes moderna para Next.js",
            icon: "🔲"
          },
          { 
            name: "Park UI", 
            url: "https://park-ui.com", 
            description: "Componentes acessíveis e customizáveis",
            icon: "🏞️"
          },
          { 
            name: "DaisyUI", 
            url: "https://daisyui.com", 
            description: "Componentes Tailwind CSS mais populares",
            icon: "🌼"
          },
          { 
            name: "DevDojo Pines", 
            url: "https://devdojo.com/pines", 
            description: "Componentes Alpine.js e Tailwind CSS",
            icon: "🌲"
          },
          { 
            name: "Sailboat UI", 
            url: "https://sailboatui.com", 
            description: "Componentes Tailwind CSS modernos",
            icon: "⛵"
          },
          { 
            name: "Tremor UI", 
            url: "https://www.tremor.so", 
            description: "Biblioteca de dashboards React",
            icon: "📊"
          },
          { 
            name: "Shadcn/ui", 
            url: "https://ui.shadcn.com", 
            description: "Componentes reutilizáveis com Radix UI e Tailwind",
            icon: "🎭"
          },
          { 
            name: "Material UI", 
            url: "https://mui.com", 
            description: "Biblioteca de componentes React popular",
            icon: "🎯"
          },
        ]
      },
      {
        category: "Frameworks CSS",
        items: [
          { 
            name: "Tailwind CSS", 
            url: "https://tailwindcss.com", 
            description: "Framework CSS utility-first",
            icon: "🌊"
          },
          { 
            name: "Bootstrap", 
            url: "https://getbootstrap.com", 
            description: "Framework CSS mais popular do mundo",
            icon: "🅱️"
          },
          {
            name: "Sass",
            url: "https://sass-lang.com/",
            description: "Pré-processador CSS com recursos avançados",
            icon: "💅"
          },
          {
            name: "Styled Components",
            url: "https://styled-components.com/",
            description: "CSS-in-JS com suporte a temas e props",
            icon: "💅"
          },
          {
            name: "Emotion",
            url: "https://emotion.sh/",
            description: "Biblioteca CSS-in-JS performática",
            icon: "👩‍🎤"
          },
          {
            name: "Stitches",
            url: "https://stitches.dev/",
            description: "CSS-in-JS com zero runtime",
            icon: "🧵"
          }
        ]
      },
      {
        category: "Gerenciamento de Estado",
        items: [
          {
            name: "Redux Toolkit",
            url: "https://redux-toolkit.js.org/",
            description: "Gerenciamento de estado com Redux simplificado",
            icon: "🔄"
          },
          {
            name: "Zustand",
            url: "https://zustand-demo.pmnd.rs/",
            description: "Gerenciamento de estado minimalista",
            icon: "🐻"
          },
          {
            name: "Jotai",
            url: "https://jotai.org/",
            description: "Estado primitivo e atômico para React",
            icon: "⚛️"
          },
          {
            name: "TanStack Query",
            url: "https://tanstack.com/query/",
            description: "Gerenciamento de estado assíncrono",
            icon: "🔄"
          },
          {
            name: "Recoil",
            url: "https://recoiljs.org/",
            description: "Gerenciamento de estado do Facebook",
            icon: "⚛️"
          }
        ]
      },
      {
        category: "Frameworks Frontend",
        items: [
          {
            name: "Next.js",
            url: "https://nextjs.org/",
            description: "Framework React com SSR e SSG",
            icon: "▲"
          },
          {
            name: "Remix",
            url: "https://remix.run/",
            description: "Framework web fullstack com React",
            icon: "💿"
          },
          {
            name: "Astro",
            url: "https://astro.build/",
            description: "Framework para sites orientados a conteúdo",
            icon: "🚀"
          },
          {
            name: "Gatsby",
            url: "https://www.gatsbyjs.com/",
            description: "Framework para sites estáticos com React",
            icon: "💜"
          }
        ]
      },
      {
        category: "Animação e Interatividade",
        items: [
          {
            name: "Framer Motion",
            url: "https://www.framer.com/motion/",
            description: "Biblioteca de animações para React",
            icon: "🎬"
          },
          {
            name: "GSAP",
            url: "https://greensock.com/gsap/",
            description: "Biblioteca profissional de animações",
            icon: "🎭"
          },
          {
            name: "AutoAnimate",
            url: "https://auto-animate.formkit.com/",
            description: "Animações automáticas para qualquer framework",
            icon: "✨"
          },
          {
            name: "React Spring",
            url: "https://react-spring.dev/",
            description: "Animações baseadas em física para React",
            icon: "🌱"
          }
        ]
      },
      {
        category: "Formulários e Validação",
        items: [
          {
            name: "React Hook Form",
            url: "https://react-hook-form.com/",
            description: "Formulários performáticos com hooks",
            icon: "📝"
          },
          {
            name: "Formik",
            url: "https://formik.org/",
            description: "Solução completa para formulários React",
            icon: "📋"
          },
          {
            name: "React Final Form",
            url: "https://final-form.org/react",
            description: "Formulários de alto desempenho",
            icon: "✍️"
          },
          {
            name: "TanStack Form",
            url: "https://tanstack.com/form/",
            description: "Formulários headless e type-safe",
            icon: "📑"
          }
        ]
      }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    content: [
      {
        category: "Frameworks Node.js",
        items: [
          { 
            name: "Express.js", 
            url: "https://expressjs.com", 
            description: "Framework web rápido e minimalista para Node.js",
            icon: "🚀"
          },
          { 
            name: "NestJS", 
            url: "https://nestjs.com", 
            description: "Framework Node.js progressivo",
            icon: "🐱"
          },
          {
            name: "Fastify",
            url: "https://www.fastify.io/",
            description: "Framework web extremamente rápido para Node.js",
            icon: "⚡"
          },
          {
            name: "Koa",
            url: "https://koajs.com/",
            description: "Framework web minimalista da equipe do Express",
            icon: "🎯"
          }
        ]
      },
      {
        category: "Autenticação e Segurança",
        items: [
          {
            name: "JWT",
            url: "https://jwt.io/",
            description: "JSON Web Tokens para autenticação segura",
            icon: "🔑"
          },
          {
            name: "Bcrypt",
            url: "https://www.npmjs.com/package/bcrypt",
            description: "Biblioteca para hash de senhas",
            icon: "🔒"
          },
          {
            name: "Passport.js",
            url: "https://www.passportjs.org/",
            description: "Middleware de autenticação para Node.js",
            icon: "🛂"
          },
          {
            name: "Auth.js",
            url: "https://authjs.dev/",
            description: "Solução de autenticação completa para Next.js",
            icon: "🔐"
          },
          {
            name: "Clerk",
            url: "https://clerk.com/",
            description: "Autenticação e gerenciamento de usuários completo",
            icon: "👤"
          },
          {
            name: "Argon2",
            url: "https://www.npmjs.com/package/argon2",
            description: "Algoritmo de hash mais seguro",
            icon: "🛡️"
          },
          {
            name: "Helmet",
            url: "https://helmetjs.github.io/",
            description: "Middleware para segurança de cabeçalhos HTTP",
            icon: "⛑️"
          },
          {
            name: "CORS",
            url: "https://www.npmjs.com/package/cors",
            description: "Middleware para configuração de CORS",
            icon: "🌐"
          }
        ]
      },
      {
        category: "ORMs",
        items: [
          { 
            name: "Prisma", 
            url: "https://www.prisma.io", 
            description: "ORM de próxima geração para Node.js e TypeScript",
            icon: "💎"
          },
          { 
            name: "TypeORM", 
            url: "https://typeorm.io", 
            description: "ORM que pode ser executado em várias plataformas",
            icon: "🔧"
          },
          {
            name: "Sequelize",
            url: "https://sequelize.org/",
            description: "ORM Node.js para PostgreSQL, MySQL, SQLite e mais",
            icon: "🗄️"
          },
          {
            name: "Mongoose",
            url: "https://mongoosejs.com/",
            description: "Modelagem de objetos MongoDB elegante",
            icon: "🍃"
          }
        ]
      },
      {
        category: "Validação e Sanitização",
        items: [
          {
            name: "Zod",
            url: "https://zod.dev/",
            description: "Validação de esquemas com TypeScript",
            icon: "✅"
          },
          {
            name: "Joi",
            url: "https://joi.dev/",
            description: "Validação de dados poderosa para JavaScript",
            icon: "📝"
          },
          {
            name: "Yup",
            url: "https://github.com/jquense/yup",
            description: "Construtor de esquemas para validação de valores",
            icon: "🎯"
          },
          {
            name: "Express Validator",
            url: "https://express-validator.github.io/",
            description: "Validação e sanitização para Express.js",
            icon: "🧹"
          }
        ]
      },
      {
        category: "TypeScript Backend",
        items: [
          {
            name: "tRPC",
            url: "https://trpc.io/",
            description: "End-to-end typesafe APIs para TypeScript",
            icon: "🔷"
          },
          {
            name: "TypeGraphQL",
            url: "https://typegraphql.com/",
            description: "Framework GraphQL moderno com TypeScript",
            icon: "📊"
          },
          {
            name: "Ts.ED",
            url: "https://tsed.io/",
            description: "Framework Node.js para TypeScript",
            icon: "🎯"
          },
          {
            name: "NestJS",
            url: "https://nestjs.com/",
            description: "Framework Node.js progressivo com TypeScript",
            icon: "🐈"
          },
          {
            name: "TypeORM",
            url: "https://typeorm.io/",
            description: "ORM para TypeScript e JavaScript",
            icon: "🗃️"
          },
          {
            name: "Prisma",
            url: "https://www.prisma.io/",
            description: "ORM de próxima geração para Node.js/TypeScript",
            icon: "💎"
          },
          {
            name: "Fastify TypeScript",
            url: "https://www.fastify.io/docs/latest/Reference/TypeScript/",
            description: "Framework web rápido com suporte TypeScript",
            icon: "⚡"
          },
          {
            name: "TypeDI",
            url: "https://github.com/typestack/typedi",
            description: "Container de injeção de dependência",
            icon: "💉"
          },
          {
            name: "Routing Controllers",
            url: "https://github.com/typestack/routing-controllers",
            description: "Decorators para roteamento em Express/Koa",
            icon: "🛣️"
          },
          {
            name: "Class Validator",
            url: "https://github.com/typestack/class-validator",
            description: "Validação baseada em decorators",
            icon: "✅"
          },
          {
            name: "Type-GraphQL",
            url: "https://typegraphql.com/",
            description: "GraphQL com decorators TypeScript",
            icon: "🎯"
          },
          {
            name: "TSyringe",
            url: "https://github.com/microsoft/tsyringe",
            description: "Container de injeção de dependência leve",
            icon: "💉"
          }
        ]
      },
      {
        category: "C# e .NET",
        items: [
          {
            name: "ASP.NET Core",
            url: "https://dotnet.microsoft.com/apps/aspnet",
            description: "Framework web multiplataforma da Microsoft",
            icon: "🌐"
          },
          {
            name: "Entity Framework Core",
            url: "https://learn.microsoft.com/ef/core/",
            description: "ORM moderno para .NET",
            icon: "📦"
          },
          {
            name: "Dapper",
            url: "https://github.com/DapperLib/Dapper",
            description: "Micro ORM simples e de alta performance",
            icon: "⚡"
          },
          {
            name: "MediatR",
            url: "https://github.com/jbogard/MediatR",
            description: "Implementação do padrão Mediator",
            icon: "📡"
          },
          {
            name: "AutoMapper",
            url: "https://automapper.org/",
            description: "Mapeamento de objetos para .NET",
            icon: "🗺️"
          },
          {
            name: "FluentValidation",
            url: "https://fluentvalidation.net/",
            description: "Biblioteca de validação para .NET",
            icon: "✅"
          },
          {
            name: "Hangfire",
            url: "https://www.hangfire.io/",
            description: "Agendamento de tarefas em background",
            icon: "⏰"
          },
          {
            name: "SignalR",
            url: "https://dotnet.microsoft.com/apps/aspnet/signalr",
            description: "Biblioteca para comunicação em tempo real",
            icon: "🔌"
          },
          {
            name: "Serilog",
            url: "https://serilog.net/",
            description: "Logging estruturado para .NET",
            icon: "📝"
          },
          {
            name: "Polly",
            url: "https://github.com/App-vNext/Polly",
            description: "Resiliência e tratamento de falhas",
            icon: "🛡️"
          },
          {
            name: "IdentityServer",
            url: "https://duendesoftware.com/products/identityserver",
            description: "Framework de autenticação e autorização",
            icon: "🔐"
          },
          {
            name: "Quartz.NET",
            url: "https://www.quartz-scheduler.net/",
            description: "Agendamento de tarefas robusto",
            icon: "⌚"
          },
          {
            name: "RestSharp",
            url: "https://restsharp.dev/",
            description: "Cliente HTTP simplificado",
            icon: "🌐"
          },
          {
            name: "xUnit",
            url: "https://xunit.net/",
            description: "Framework de testes unitários",
            icon: "🧪"
          },
          {
            name: "Moq",
            url: "https://github.com/moq/moq4",
            description: "Framework de mocking para testes",
            icon: "🎭"
          },
          {
            name: "Bogus",
            url: "https://github.com/bchavez/Bogus",
            description: "Geração de dados fake para testes",
            icon: "🎲"
          }
        ]
      },
      {
        category: "Ferramentas de Desenvolvimento",
        items: [
          {
            name: "Visual Studio",
            url: "https://visualstudio.microsoft.com/",
            description: "IDE completa para .NET e C#",
            icon: "💻"
          },
          {
            name: "Rider",
            url: "https://www.jetbrains.com/rider/",
            description: "IDE multiplataforma para .NET",
            icon: "🏍️"
          },
          {
            name: "ts-node",
            url: "https://typestrong.org/ts-node/",
            description: "Execução de TypeScript no Node.js",
            icon: "🟦"
          },
          {
            name: "NSwag",
            url: "https://github.com/RicoSuter/NSwag",
            description: "Geração de Swagger/OpenAPI para .NET",
            icon: "📚"
          }
        ]
      }
    ]
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Tech Stack Hub
          </h1>
          <p className="text-neutral-400 text-lg">
            Uma coleção curada de frameworks e tecnologias para desenvolvimento web
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-neutral-900/50 p-1 rounded-full backdrop-blur-sm border border-neutral-800/50 mb-16">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-6 py-2 rounded-full text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 mix-blend-plus-lighter">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "space-y-16 transition-opacity duration-500",
                  activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                {tab.content.map((section, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                      <h2 className="text-2xl font-bold text-white/90">
                        {section.category}
                      </h2>
                      <span className="text-neutral-400 text-sm">
                        {section.items.length} {section.items.length === 1 ? 'item' : 'itens'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {section.items.map((item, itemIdx) => (
                        <motion.a
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIdx * 0.05 }}
                          key={itemIdx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
                        >
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">{item.icon}</span>
                              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {item.name}
                              </h3>
                            </div>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                              {item.description}
                            </p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-32 text-center text-neutral-400">
          <a
            href="https://github.com/your-username/tech-stack-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <IconBrandGithub size={20} />
            <span>Ver no GitHub</span>
          </a>
        </footer>
      </main>
    </div>
  );
} 