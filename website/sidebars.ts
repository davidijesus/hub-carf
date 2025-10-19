import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'sumario-executivo',
    {
      type: 'category',
      label: 'Análise do Problema',
      items: [
        'analise-do-problema/mapeamento-do-problema',
      ],
    },
    {
      type: 'category',
      label: 'Análise Financeira',
      items: [
        'analise-financeira/analise-de-custos',
        'analise-financeira/viabilidade-financeira',
      ],
    },
    {
      type: 'category',
      label: 'Impacto da Solução',
      items: [
        'impacto-da-solucao/impacto-da-solucao',
      ],
    },
    {
      type: 'category',
      label: 'Solução',
      items: [
        'solucao/esquema-da-solucao',
      ],
    },
    'equipe',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
