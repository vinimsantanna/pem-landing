import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Política de Privacidade | PEM — Protocolo de Escala Médica",
  description: "Saiba como o PEM coleta, usa, armazena e protege seus dados pessoais em conformidade com a LGPD.",
}

const sections = [
  {
    title: "1. Quem somos",
    content: `O PEM (Protocolo de Escala Médica) é um software de gestão clínica desenvolvido e operado pela Protocolo de Escala Médica Ltda., pessoa jurídica de direito privado, com sede no Brasil. Somos responsáveis pelo tratamento dos seus dados pessoais conforme descrito nesta Política de Privacidade.

Para questões relacionadas a privacidade e proteção de dados, você pode entrar em contato com nosso Encarregado de Dados (DPO) pelo e-mail: suporte@usepem.com.br.`,
  },
  {
    title: "2. Âmbito de aplicação",
    content: `Esta Política de Privacidade aplica-se a todos os usuários da plataforma PEM, incluindo:

• Médicos, profissionais de saúde e administradores que contratam o serviço;
• Pacientes cujos dados são gerenciados dentro da plataforma pelos profissionais de saúde;
• Visitantes do site usepem.com.br;
• Qualquer pessoa que interaja com nossos canais de comunicação (WhatsApp, e-mail, Instagram, Facebook).

Ao utilizar nossos serviços ou fornecer seus dados, você declara ter lido e compreendido esta Política.`,
  },
  {
    title: "3. Dados pessoais que coletamos",
    content: `Coletamos diferentes categorias de dados dependendo da sua relação com o PEM:

3.1 Dados de clientes (médicos e administradores de clínica)
• Dados de identificação: nome completo, CPF, CNPJ, CRM, data de nascimento;
• Dados de contato: endereço de e-mail, telefone, WhatsApp;
• Dados profissionais: especialidade médica, nome da clínica, endereço da clínica;
• Dados financeiros: informações de faturamento, dados de cartão de crédito (processados exclusivamente pela Stripe — não armazenamos dados de cartão);
• Dados de acesso: endereço IP, tipo de navegador, sistema operacional, logs de acesso.

3.2 Dados de pacientes (inseridos pelos profissionais de saúde)
• Dados de identificação: nome, CPF, data de nascimento, sexo;
• Dados de contato: telefone, WhatsApp, e-mail, endereço;
• Dados de saúde (dados sensíveis): anamnese, diagnósticos, exames, evoluções clínicas, prescrições, procedimentos realizados, fotos clínicas;
• Dados financeiros: informações sobre pagamentos de consultas e procedimentos.

3.3 Dados coletados automaticamente
• Cookies e tecnologias similares para funcionamento da plataforma;
• Dados de navegação e uso da plataforma (páginas acessadas, funcionalidades utilizadas);
• Dados de dispositivo (modelo, sistema operacional, versão do aplicativo).`,
  },
  {
    title: "4. Finalidades do tratamento",
    content: `Tratamos seus dados pessoais para as seguintes finalidades:

4.1 Execução do contrato
• Prestação dos serviços contratados (agenda, prontuário, receituário, financeiro, CRM);
• Criação e gestão da sua conta na plataforma;
• Processamento de pagamentos e emissão de notas fiscais;
• Suporte técnico e atendimento ao cliente.

4.2 Cumprimento de obrigações legais e regulatórias
• Cumprimento de obrigações fiscais e contábeis;
• Atendimento a determinações do Conselho Federal de Medicina (CFM) sobre prontuário eletrônico;
• Cumprimento da Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018);
• Cumprimento do Marco Civil da Internet (Lei 12.965/2014).

4.3 Interesses legítimos
• Prevenção de fraudes e garantia da segurança da plataforma;
• Melhoria contínua dos serviços;
• Análise de uso para desenvolvimento de novas funcionalidades;
• Comunicações sobre atualizações importantes do serviço.

4.4 Consentimento (quando aplicável)
• Envio de comunicações de marketing, novidades e promoções;
• Uso de dados para pesquisas e estudos de caso (sempre anonimizados).`,
  },
  {
    title: "5. Base legal para o tratamento",
    content: `Tratamos seus dados pessoais com base nas seguintes hipóteses previstas na LGPD:

• Execução de contrato (Art. 7º, V): para cumprir o contrato de prestação de serviços firmado com você;
• Cumprimento de obrigação legal (Art. 7º, II): para atender exigências de órgãos reguladores e da legislação vigente;
• Interesse legítimo (Art. 7º, IX): para segurança da plataforma, prevenção de fraudes e melhoria dos serviços;
• Consentimento (Art. 7º, I): para envio de marketing e comunicações promocionais;
• Tutela da saúde (Art. 11, II, f): para o tratamento de dados de saúde pelos profissionais médicos habilitados dentro da plataforma.`,
  },
  {
    title: "6. Dados sensíveis de saúde",
    content: `Os dados de saúde dos pacientes são classificados como dados sensíveis nos termos da LGPD e recebem proteção reforçada:

• São acessíveis exclusivamente pelo profissional de saúde responsável e pelos membros autorizados da sua equipe;
• Não são compartilhados com terceiros sem o consentimento expresso do paciente, exceto por obrigação legal;
• São armazenados com criptografia de ponta a ponta;
• São processados em conformidade com o sigilo médico estabelecido no Código de Ética Médica;
• Receituários digitais são emitidos com certificado ICP-Brasil A1, garantindo validade jurídica e autenticidade.

O PEM atua como operador de dados em relação aos dados de pacientes. O profissional de saúde é o controlador responsável pelo tratamento desses dados.`,
  },
  {
    title: "7. Compartilhamento de dados",
    content: `Podemos compartilhar seus dados com terceiros nas seguintes hipóteses:

7.1 Parceiros de infraestrutura e tecnologia
• Supabase (banco de dados e autenticação — servidores no Brasil);
• Stripe (processamento de pagamentos — certificação PCI DSS nível 1);
• Vercel (hospedagem da aplicação web);
• Evolution API / WhatsApp Business Cloud API (integração de mensagens);
• Google (Calendar, autenticação OAuth — sujeito à política do Google);
• Meta Platforms (Instagram e Facebook API — sujeito à política da Meta).

7.2 Autoridades governamentais
Quando exigido por lei, decisão judicial ou determinação de autoridade competente.

7.3 Transferência de negócios
Em caso de fusão, aquisição ou venda total/parcial do negócio, desde que o adquirente assuma as obrigações desta Política.

Não vendemos, alugamos ou comercializamos seus dados pessoais a terceiros para fins de marketing.`,
  },
  {
    title: "8. Transferência internacional de dados",
    content: `Alguns de nossos fornecedores de tecnologia (Stripe, Vercel, Meta, Google) podem processar dados em servidores fora do Brasil. Adotamos as seguintes salvaguardas:

• Contratamos apenas fornecedores que oferecem garantias adequadas de proteção de dados (cláusulas contratuais padrão, certificações internacionais);
• Verificamos se o país de destino oferece grau de proteção adequado ou se o fornecedor possui certificações equivalentes à LGPD;
• Os dados de saúde dos pacientes são armazenados prioritariamente em servidores localizados no Brasil.`,
  },
  {
    title: "9. Segurança dos dados",
    content: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida:

• Criptografia TLS 1.3 em trânsito e criptografia AES-256 em repouso;
• Autenticação multifator disponível para todas as contas;
• Controle de acesso baseado em funções (RBAC) com princípio de menor privilégio;
• Logs de auditoria para todas as operações sensíveis;
• Políticas de senha forte e renovação periódica;
• Testes periódicos de segurança e análise de vulnerabilidades;
• Plano de resposta a incidentes de segurança;
• Isolamento de dados entre clínicas (arquitetura multi-tenant com Row Level Security).

Em caso de incidente de segurança que coloque em risco seus dados, notificaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) nos prazos previstos na LGPD.`,
  },
  {
    title: "10. Retenção e exclusão de dados",
    content: `Retemos seus dados pelo tempo necessário para as finalidades descritas nesta Política ou pelo prazo determinado por lei:

• Dados de conta ativa: durante toda a vigência do contrato de serviço;
• Dados financeiros e fiscais: 5 anos após o encerramento do contrato (obrigação legal);
• Prontuários eletrônicos de pacientes: mínimo de 20 anos conforme Resolução CFM 1.821/2007;
• Logs de acesso: 6 meses conforme Marco Civil da Internet;
• Dados de marketing (com consentimento): até a revogação do consentimento.

Após o encerramento do contrato, você pode solicitar a exportação completa dos seus dados em formato portável antes da exclusão.`,
  },
  {
    title: "11. Seus direitos como titular",
    content: `A LGPD garante a você os seguintes direitos, que podem ser exercidos a qualquer momento:

• Confirmação e acesso: confirmar se tratamos seus dados e obter cópia deles;
• Correção: solicitar a correção de dados incompletos, inexatos ou desatualizados;
• Anonimização, bloqueio ou eliminação: solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;
• Portabilidade: receber seus dados em formato estruturado e legível por máquina;
• Eliminação com consentimento: solicitar a eliminação de dados tratados com base em consentimento;
• Informação sobre compartilhamento: obter informações sobre com quais entidades compartilhamos seus dados;
• Revogação do consentimento: revogar o consentimento a qualquer momento, sem prejuízo da legalidade do tratamento anterior;
• Oposição: opor-se ao tratamento baseado em interesse legítimo quando não concordar com a justificativa apresentada;
• Revisão de decisões automatizadas: solicitar revisão de decisões tomadas exclusivamente com base em tratamento automatizado.

Para exercer seus direitos, entre em contato pelo e-mail suporte@usepem.com.br. Responderemos em até 15 dias úteis.`,
  },
  {
    title: "12. Cookies e tecnologias de rastreamento",
    content: `Utilizamos cookies e tecnologias similares para:

• Cookies essenciais: necessários para o funcionamento da plataforma (autenticação, sessão, preferências);
• Cookies analíticos: para análise de uso e melhoria do serviço (Google Analytics — dados anonimizados);
• Cookies de preferências: para memorizar suas configurações e personalizar a experiência.

Não utilizamos cookies de rastreamento para fins publicitários de terceiros.

Você pode gerenciar as suas preferências de cookies nas configurações do seu navegador. A desativação de cookies essenciais pode impedir o funcionamento correto da plataforma.`,
  },
  {
    title: "13. Menores de idade",
    content: `O PEM é uma plataforma destinada a profissionais de saúde e seus pacientes adultos. Não coletamos conscientemente dados de menores de 18 anos diretamente.

Quando dados de pacientes menores de idade forem inseridos na plataforma por profissionais de saúde, aplica-se o consentimento dos pais ou responsáveis legais, conforme a legislação vigente e as normas éticas médicas.`,
  },
  {
    title: "14. Alterações nesta Política",
    content: `Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças nos nossos serviços, na legislação ou nas nossas práticas de privacidade.

Notificaremos você sobre alterações relevantes por e-mail ou por aviso destacado na plataforma com, no mínimo, 15 dias de antecedência. O uso continuado dos serviços após a vigência das alterações implica aceitação da nova Política.

Manteremos versões anteriores arquivadas para consulta mediante solicitação.`,
  },
  {
    title: "15. Contato e DPO",
    content: `Para exercer seus direitos, esclarecer dúvidas ou apresentar reclamações relacionadas à privacidade e proteção de dados:

Encarregado de Proteção de Dados (DPO)
E-mail: suporte@usepem.com.br
Prazo de resposta: até 15 dias úteis

Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
]

export default function PoliticaPrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="text-slate-500">
              Última atualização: 18 de abril de 2026 · Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)
            </p>
          </div>

          <div className="bg-[#E8F8F4] border border-[#1DAB87]/20 rounded-xl px-6 py-4 mb-10">
            <p className="text-[#0d6e56] text-sm leading-relaxed">
              <strong>Resumo:</strong> O PEM armazena seus dados em servidores no Brasil, não vende seus dados a terceiros, trata dados de saúde com proteção reforçada e você pode solicitar a exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <strong>suporte@usepem.com.br</strong>.
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
