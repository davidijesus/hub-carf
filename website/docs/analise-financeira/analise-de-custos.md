---
title: Análise de Custos
sidebar_position: 1
---

# Análise de Custos

&emsp;Esta análise detalha os custos de produção do Hub CARF, evoluindo da Prova de Conceito (PoC) desenvolvida no Hackathon para uma arquitetura escalável e robusta, pronta para o ambiente da administração pública (como GOVCloud ou nuvem híbrida). A arquitetura baseada em Docker Compose, mencionada na viabilidade técnica, oferece flexibilidade de implantação, e os custos aqui refletem uma infraestrutura *cloud-native* gerenciada, que otimiza performance e escalabilidade.

---

## 1. Premissas de Custo e Volume (Ano 1 - Piloto)

As métricas de custo do Hub CARF não se baseiam em "usuários" (como um app B2C), mas sim no **volume de processos analisados** e nos **gestores internos** que consomem os *insights*.

- **Gestores (Usuários Internos):** 50 (piloto inicial em turmas selecionadas)
- **Novos Processos Ingeridos/Mês:** 2.000 (base inicial)
- **Processos Retroalimentados (Retreinamento/Mês):** 10.000
- **Chamadas de API por *Novo* Processo:** 2 (1 consulta Serpro + 1 consulta JusBrasil)
- **Consultas de IA Generativa (Insights)/Mês:** 1.000 (gestores pedindo explicações dos dashboards)
- **E-mails Transacionais/Mês:** 2.000 (1 por novo processo)

---

## 2. Custos Mensais – Infraestrutura Cloud (PaaS/IaaS)

| Serviço | Descrição | Valor Estimado (R$) | Observações |
| :--- | :--- | :--- | :--- |
| **Computação (VPC/VM)** | Instância para orquestração (Docker/Airflow) e backend (FastAPI). (Ex: GCP e2-medium ou AWS t3.medium) | R$ 300,00 | Custo fixo para rodar os contêineres da aplicação e o agendador de *pipelines*. |
| **Banco de Dados (BigQuery)** | Armazenamento dos dados processuais e logs. Custo de *storage* + *queries*. | R$ 200,00 | Otimizado para *analytics*. Custo variável baixo, cresce com o volume de *queries* dos *dashboards*. |
| **ML Endpoint (Vertex/SageMaker)**| Hospedagem do modelo preditivo (XGBoost) para inferência em tempo real. | R$ 150,00 | Custo para manter o modelo disponível para a API, escalando com as requisições. |
| **Frontend Hosting (Vercel/Cloudflare)** | Hospedagem estática do *frontend* React. | R$ 0,00 | O *deploy* do *frontend* estático se enquadra generosamente no *free tier* permanente dessas plataformas. |
| **Serviço de E-mail (SES/SendGrid)**| Envio de e-mails transacionais (status, previsão) aos contribuintes. | R$ 10,00 | Custo marginal. 2.000 e-mails se enquadram em *tiers* gratuitos ou de baixíssimo custo. |
| **Domínio e SSL** | Registro de domínio e certificado SSL. | R$ 10,00 | Custo anual (R$ 120) rateado mensalmente. |
| **Custo Fixo de Infraestrutura** | **Total (aprox.)** | **R$ 670,00** | |

---

## 3. Custos Variáveis – APIs Externas

Este é o principal vetor de custo da solução, diretamente ligado ao volume de processos ingeridos.

| API | Modelo de Custo | Volume (Mês 1) | Custo Estimado (R$) | Observações |
| :--- | :--- | :--- | :--- | :--- |
| **Serpro (Dívida Ativa)** | Por consulta (estimado) | 2.000 | R$ 1.000,00 | (Estimativa de R$ 0,50/consulta). Custo essencial para enriquecimento dos dados. |
| **JusBrasil (Processos)** | Por consulta (estimado) | 2.000 | R$ 1.600,00 | (Estimativa de R$ 0,80/consulta). Fundamental para o contexto processual externo. |
| **Total de APIs** | | | **R$ 2.600,00** | |

---

## 4. Custos Variáveis – IA Generativa (Insights)

| Modelo | Custo por 1M Tokens (US$) | Volume (Mês 1) | Custo Estimado (R$) | Observações |
| :--- | :--- | :--- | :--- | :--- |
| **LLM (Gemini / GPT-4o-mini)**| $0.50 - $1.50 (blend) | ~2M Tokens (1k queries * 2k tokens) | R$ 16,50 | (Cotação US$ 1 = R$ 5,50). Custo operacional muito baixo para o valor gerado. |
| **Total de IA Generativa** | | | **R$ 16,50** | |

---

## 5. Estimativa de Custos Mensais (Ano 1)

O custo total é majoritariamente guiado pelo volume de processos, não pela infraestrutura.

| Mês | Novos Processos/Mês | Custo Infra (Fixo) | Custo APIs (Variável) | Custo IA (Variável) | Custo Total (R$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 2.000 | R$ 670,00 | R$ 2.600,00 | R$ 16,50 | **R$ 3.286,50** |
| 6 | 3.000 | R$ 670,00 | R$ 3.900,00 | R$ 24,75 | **R$ 4.594,75** |
| 12 | 5.000 | R$ 670,00 | R$ 6.500,00 | R$ 41,25 | **R$ 7.211,25** |

---

## 6. Considerações Finais

- A arquitetura *cloud-native* (PaaS + IaaS) mantém os custos fixos de infraestrutura baixos e previsíveis.
- O **principal *driver* de custo é o consumo de APIs externas** (Serpro e JusBrasil), que escala linearmente com o número de processos analisados. Este custo, no entanto, é diretamente atrelado ao valor gerado (enriquecimento de dados).
- O custo da **IA Generativa** para *insights* é **marginal**, representando um altíssimo valor agregado por um custo quase nulo.
- A viabilidade da solução (detalhada na próxima seção) mostra que o retorno sobre este investimento, via redução do tempo médio processual, é exponencialmente maior que o custo operacional.

---

## Referências

<a id="ref1"></a>GOOGLE CLOUD. Preços do BigQuery. 2025. Disponível em: https://cloud.google.com/bigquery/pricing. Acesso em: 18 out. 2025.

<a id="ref2"></a>AWS. Preços do Amazon EC2. 2025. Disponível em: https://aws.amazon.com/ec2/pricing/. Acesso em: 18 out. 2025.

<a id="ref3"></a>SERPRO. Catálogo de Serviços - APIs. 2025. Disponível em: https://www.serpro.gov.br/catalogo-apis. Acesso em: 18 out. 2025.

<a id="ref4"></a>JUSBRASIL. API de Dados Processuais. 2025. Disponível em: https://www.jusbrasil.com.br/api-dados. Acesso em: 18 out. 2025.
