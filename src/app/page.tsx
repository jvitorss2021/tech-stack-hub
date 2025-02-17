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