import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Termos de Serviço | PEM — Protocolo de Escala Médica",
  description: "Leia os Termos de Serviço do PEM: condições de uso, responsabilidades, planos e cancelamento.",
}

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao criar uma conta, acessar ou utilizar a plataforma PEM (Protocolo de Escala Médica), você ("Cliente" ou "Usuário") concorda integralmente com estes Termos de Serviço ("Termos"), com nossa Política de Privacidade e com quaisquer políticas adicionais incorporadas por referência.

Se você está aceitando estes Termos em nome de uma empresa ou outra entidade jurídica, você declara ter poderes para vincular essa entidade a estes Termos.

Se você não concorda com algum dos termos aqui descritos, não utilize os nossos serviços.`,
  },
  {
    title: "2. Descrição dos Serviços",
    content: `O PEM é uma plataforma SaaS (Software as a Service) de gestão clínica que oferece os seguintes módulos:

• Agenda inteligente: agendamento online, confirmações automáticas via WhatsApp e lembretes de consulta;
• Prontuário eletrônico: registro de evoluções, anamnese, diagnósticos, exames e documentos clínicos;
• Receituário digital: emissão de prescrições com assinatura digital ICP-Brasil A1;
• Financeiro clínico: controle de receitas, despesas, inadimplência e relatórios;
• CRM clínico: gestão de leads, pipeline de captação, follow-up automatizado e scoring;
• Inbox unificado: centralização de mensagens do Instagram, Facebook e WhatsApp;
• Integrações: Google Calendar, WhatsApp Business, Instagram Direct, Facebook Messenger.

Os serviços são prestados "no estado em que se encontram" (as-is), mediante assinatura mensal ou anual conforme o plano contratado. A Protocolo de Escala Médica Ltda. reserva-se o direito de alterar, aprimorar ou descontinuar funcionalidades, com aviso prévio aos usuários ativos.`,
  },
  {
    title: "3. Elegibilidade e Cadastro",
    content: `3.1 Elegibilidade
Para utilizar o PEM você deve:
• Ter no mínimo 18 anos de idade;
• Ser profissional de saúde legalmente habilitado ou administrador de estabelecimento de saúde no Brasil;
• Fornecer informações verdadeiras, precisas e atualizadas no cadastro;
• Não ter sido previamente suspenso ou banido da plataforma.

3.2 Responsabilidade pelo cadastro
Você é responsável por:
• Manter a confidencialidade das suas credenciais de acesso (login e senha);
• Todas as atividades que ocorram sob sua conta;
• Notificar imediatamente o PEM em caso de acesso não autorizado à sua conta pelo e-mail suporte@usepem.com.br;
• Manter seus dados cadastrais atualizados.

3.3 Contas da equipe
O titular da conta (médico ou administrador principal) é responsável pelas ações de todos os usuários adicionados à sua clínica na plataforma.`,
  },
  {
    title: "4. Planos, Preços e Pagamentos",
    content: `4.1 Planos disponíveis
O PEM oferece os seguintes planos de assinatura:

• Solo (R$ 297/mês): 1 médico, agendamentos ilimitados, inbox unificado, CRM, prontuário, receituário ICP-Brasil A1, financeiro básico e integração Google Calendar;
• Clínica (R$ 497/mês): até 5 médicos, todos os recursos do Solo mais lembretes automatizados, CRM avançado, financeiro completo com importação OFX, controle de estoque e onboarding assistido;
• Rede+ (R$ 997/mês): médicos e unidades ilimitados, todos os recursos do Clínica mais CRM multi-unidade, suporte com SLA dedicado, onboarding white-glove, 50 GB de armazenamento e acesso à API.

Os valores são em Reais (BRL) e podem ser atualizados com aviso prévio de 30 dias.

4.2 Período de teste gratuito
Todos os planos incluem 14 dias de teste gratuito, sem necessidade de cartão de crédito. Ao final do período de teste, a assinatura é ativada automaticamente mediante inclusão dos dados de pagamento, ou a conta é suspensa.

4.3 Cobrança
• As cobranças são realizadas mensalmente, na data de aniversário da assinatura;
• O processamento de pagamentos é realizado pela Stripe (PCI DSS Nível 1);
• Aceitamos cartões de crédito e débito das principais bandeiras;
• Em caso de falha no pagamento, tentaremos a cobrança novamente por até 3 vezes em dias consecutivos antes de suspender o acesso.

4.4 Impostos
Os valores indicados não incluem impostos aplicáveis. O PEM emite nota fiscal de serviço automaticamente após cada cobrança.`,
  },
  {
    title: "5. Período de Teste, Cancelamento e Reembolso",
    content: `5.1 Cancelamento
Você pode cancelar sua assinatura a qualquer momento diretamente no painel da plataforma em Configurações > Assinatura > Cancelar plano. Não há multa contratual nem fidelidade mínima.

O cancelamento é efetivo ao término do período de faturamento em curso. Após o cancelamento, seu acesso permanece ativo até o último dia do período pago.

5.2 Política de reembolso
• Período de teste gratuito: nenhuma cobrança é realizada, portanto não há reembolso.
• Primeiros 7 dias após a primeira cobrança: reembolso integral mediante solicitação por e-mail para financeiro@usepem.com.br;
• Após 7 dias: não realizamos reembolsos proporcionais pelo período não utilizado, exceto nos casos previstos no Código de Defesa do Consumidor.

5.3 Suspensão por inadimplência
Em caso de inadimplência superior a 5 dias, a conta será suspensa temporariamente. Os dados permanecem armazenados por 30 dias após a suspensão, após o qual a conta poderá ser encerrada definitivamente com exclusão dos dados.`,
  },
  {
    title: "6. Uso Permitido e Proibições",
    content: `6.1 Uso permitido
Você está autorizado a utilizar o PEM exclusivamente para a gestão legítima de sua clínica ou consultório médico, respeitando a legislação aplicável, os princípios éticos da medicina e os presentes Termos.

6.2 Usos proibidos
É expressamente vedado:
• Utilizar o PEM para fins ilegais, fraudulentos ou que violem direitos de terceiros;
• Compartilhar credenciais de acesso com pessoas não autorizadas fora da equipe da clínica;
• Tentar acessar sistemas ou dados de outras clínicas na plataforma;
• Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte da plataforma;
• Utilizar robôs, scripts ou qualquer meio automatizado para acessar a plataforma de forma abusiva;
• Inserir dados falsos, enganosos ou de terceiros sem autorização;
• Utilizar a plataforma para enviar spam ou comunicações não solicitadas;
• Violar o sigilo médico ou qualquer norma do Conselho Federal de Medicina (CFM);
• Sublocar, revender ou sub-licenciar o acesso à plataforma sem autorização expressa por escrito.

O descumprimento dessas proibições pode resultar na suspensão ou encerramento imediato da conta, sem reembolso, além das medidas legais cabíveis.`,
  },
  {
    title: "7. Dados e Propriedade Intelectual",
    content: `7.1 Seus dados
Você retém plena propriedade de todos os dados inseridos na plataforma (dados de pacientes, informações clínicas, dados financeiros). O PEM não reivindica propriedade sobre esses dados.

Ao inserir dados na plataforma, você concede ao PEM uma licença limitada, não exclusiva e não transferível para processar esses dados exclusivamente para a prestação dos serviços contratados.

7.2 Exportação de dados
Você pode exportar seus dados a qualquer momento no painel da plataforma. Ao encerrar o contrato, disponibilizaremos seus dados para exportação por até 30 dias após o cancelamento.

7.3 Propriedade intelectual do PEM
A plataforma PEM, incluindo seu código-fonte, design, marca, logotipos, interfaces, documentação e funcionalidades, são de propriedade exclusiva da Protocolo de Escala Médica Ltda. e estão protegidos pelas leis de propriedade intelectual do Brasil e tratados internacionais.

Você não adquire nenhum direito de propriedade intelectual sobre a plataforma ao utilizar o serviço.`,
  },
  {
    title: "8. Integrações com Terceiros",
    content: `O PEM integra-se com serviços de terceiros (WhatsApp Business, Instagram, Facebook, Google Calendar, Stripe). Essas integrações estão sujeitas aos termos de serviço e políticas de privacidade das respectivas plataformas, que são independentes destes Termos.

Ao autorizar uma integração, você concorda com as políticas da plataforma parceira e é responsável pelo cumprimento dessas políticas. O PEM não se responsabiliza por falhas, indisponibilidades ou alterações nas APIs de terceiros que possam afetar o funcionamento das integrações.

A disponibilidade das integrações pode ser alterada a qualquer momento por decisão das plataformas parceiras, sem responsabilidade do PEM.`,
  },
  {
    title: "9. Disponibilidade e Nível de Serviço (SLA)",
    content: `O PEM compromete-se a oferecer disponibilidade da plataforma de acordo com o plano contratado:

• Planos Solo e Clínica: disponibilidade-alvo de 99,5% ao mês (≈ 3,6h de indisponibilidade tolerada);
• Plano Rede+: disponibilidade-alvo de 99,9% ao mês (≈ 43 minutos de indisponibilidade tolerada) com SLA dedicado e suporte prioritário.

Não são computadas como indisponibilidade:
• Janelas de manutenção programada (comunicadas com 48h de antecedência);
• Indisponibilidades causadas por terceiros (provedores de internet, APIs parceiras);
• Incidentes fora do controle razoável do PEM (força maior, ataques DDoS de grande escala).

Em caso de indisponibilidade superior ao SLA contratado, o Cliente poderá solicitar crédito proporcional na próxima fatura.`,
  },
  {
    title: "10. Responsabilidades e Limitações de Responsabilidade",
    content: `10.1 Responsabilidades do Cliente
• Cumprir com todas as obrigações legais e éticas aplicáveis ao exercício da medicina;
• Garantir que o uso da plataforma esteja em conformidade com as normas do CFM e demais conselhos profissionais;
• Obter os consentimentos necessários dos pacientes para o tratamento de seus dados;
• Zelar pela confidencialidade das credenciais de acesso;
• Verificar a precisão das informações inseridas na plataforma antes de utilizá-las clinicamente.

10.2 Limitações de responsabilidade do PEM
O PEM não se responsabiliza por:
• Decisões médicas ou clínicas tomadas com base em informações gerenciadas na plataforma;
• Danos decorrentes de uso inadequado, negligente ou em desacordo com estes Termos;
• Perdas indiretas, lucros cessantes ou danos emergentes, salvo dolo ou culpa grave;
• Indisponibilidades temporárias decorrentes de manutenção ou fatores fora do nosso controle;
• Acesso não autorizado à conta do usuário causado por descuido com as credenciais.

A responsabilidade total do PEM por quaisquer danos diretos fica limitada ao valor pago pelo Cliente nos últimos 3 meses de serviço.`,
  },
  {
    title: "11. Confidencialidade",
    content: `Ambas as partes comprometem-se a manter em sigilo as informações confidenciais recebidas uma da outra no âmbito da prestação dos serviços, incluindo dados de pacientes, informações comerciais e técnicas da plataforma.

O PEM adota medidas técnicas e organizacionais para proteger a confidencialidade dos dados conforme descrito em nossa Política de Privacidade.

As obrigações de confidencialidade sobrevivem ao encerramento destes Termos por um período de 5 anos, exceto para dados de saúde, cujo sigilo é perpétuo nos termos da legislação médica.`,
  },
  {
    title: "12. Suporte ao Cliente",
    content: `O PEM oferece suporte técnico conforme o plano contratado:

• Solo: suporte por WhatsApp em horário comercial (seg-sex, 9h–18h);
• Clínica: suporte por WhatsApp e e-mail + onboarding assistido em 48h;
• Rede+: suporte prioritário por WhatsApp, e-mail e telefone com SLA dedicado + gerente de conta.

Canais de suporte:
• WhatsApp: +55 73 98854-8309
• E-mail: suporte@usepem.com.br
• Central de ajuda: help.usepem.com.br`,
  },
  {
    title: "13. Alterações nos Termos",
    content: `Podemos modificar estes Termos a qualquer momento. As alterações entram em vigor 30 dias após a notificação, que será feita por e-mail e/ou aviso na plataforma.

O uso continuado dos serviços após a data de vigência das novas condições constitui aceitação tácita das alterações. Caso não concorde com as novas condições, você deve cancelar sua assinatura antes da data de vigência.

Alterações motivadas por obrigação legal podem ter vigência imediata, com notificação simultânea.`,
  },
  {
    title: "14. Encerramento e Rescisão",
    content: `14.1 Rescisão pelo Cliente
Você pode encerrar estes Termos a qualquer momento cancelando sua assinatura conforme descrito na Seção 5.

14.2 Rescisão pelo PEM
Podemos suspender ou encerrar sua conta imediatamente, com ou sem aviso prévio, em caso de:
• Violação material destes Termos;
• Uso fraudulento ou ilegal da plataforma;
• Inadimplência superior a 30 dias;
• Solicitação de autoridades competentes.

14.3 Efeitos do encerramento
Após o encerramento, seu acesso à plataforma será desativado. Seus dados ficam disponíveis para exportação por 30 dias, após o qual serão excluídos conforme nossa Política de Privacidade, respeitados os prazos de retenção legais.`,
  },
  {
    title: "15. Disposições Gerais",
    content: `15.1 Legislação aplicável
Estes Termos são regidos pelas leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor (Lei 8.078/1990), a LGPD (Lei 13.709/2018) e o Marco Civil da Internet (Lei 12.965/2014).

15.2 Foro
Fica eleito o foro da Comarca de Salvador, Estado da Bahia, para dirimir quaisquer disputas oriundas destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.

15.3 Integralidade do acordo
Estes Termos, juntamente com a Política de Privacidade e demais políticas incorporadas por referência, constituem o acordo integral entre as partes em relação ao objeto aqui descrito.

15.4 Invalidade parcial
Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor.

15.5 Contato
Protocolo de Escala Médica Ltda.
E-mail: contato@usepem.com.br
WhatsApp: +55 73 98854-8309`,
  },
]

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="text-[#1DAB87] text-xs font-mono uppercase tracking-[0.2em] mb-4">
              Documentos legais
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              Termos de Serviço
            </h1>
            <p className="text-slate-500">
              Última atualização: 18 de abril de 2026 · Versão 1.0
            </p>
          </div>

          <div className="bg-[#EEF3F9] border border-[#1a3a5c]/10 rounded-xl px-6 py-4 mb-10">
            <p className="text-[#1a3a5c] text-sm leading-relaxed">
              <strong>Resumo:</strong> Sem fidelidade mínima. Cancele quando quiser direto no painel. 14 dias grátis sem cartão. Reembolso integral nos primeiros 7 dias após a primeira cobrança. Seus dados são sempre seus — exportação disponível a qualquer momento.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-[#0B1F3A] mb-3">{s.title}</h2>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
