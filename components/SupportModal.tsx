import React from 'react';
import { X, BookOpen, LifeBuoy, Mail, Phone, FileText, Calculator, Printer, Settings } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 text-white p-4 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <LifeBuoy className="text-sky-400" />
            Suporte e Manual do Sistema
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Manual Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4 flex items-center gap-2">
              <BookOpen className="text-sky-600" size={20} />
              Manual de Uso Detalhado
            </h3>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-slate-200 text-slate-700 p-2 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">1. Visão Geral e Navegação</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O aplicativo é dividido em dois modos principais: <strong>EDITOR</strong> e <strong>PROPOSTA</strong>. 
                  Você pode alternar entre eles usando os botões no topo da tela. O <strong>Editor</strong> é onde você insere todos os dados do cliente e do sistema. A <strong>Proposta</strong> é a visualização final do documento que será entregue ao cliente.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-sky-100 text-sky-600 p-2 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">2. Dados Comerciais e Financeiros</h4>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li><strong>Conta de Energia:</strong> Insira o valor médio da conta (R$) e a tarifa da concessionária (R$/kWh). O sistema divide o valor pela tarifa para estimar o consumo real em kWh.</li>
                  <li><strong>Precificação:</strong> Na aba Técnica, insira o "Custo do Kit" (equipamentos + frete) e a sua "Margem de Lucro" (%). O sistema calculará automaticamente o "Valor do Investimento" final.</li>
                  <li><strong>Entrada:</strong> Você pode definir o valor de entrada para que o sistema calcule o saldo restante a ser financiado.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <Calculator size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">3. Dimensionamento Técnico</h4>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li><strong>Manual:</strong> Você pode preencher diretamente a potência do módulo, quantidade e o HSP (Horas de Sol Pleno) da região.</li>
                  <li><strong>Calculadora Avançada:</strong> Clique no botão "Calculadora" no topo do Editor. Ela usa o consumo alvo, área do telhado, dimensões do painel e perdas do sistema (ex: 15%) para sugerir a quantidade exata de painéis e o inversor ideal. Ao clicar em "Aplicar e Gerar Proposta", os dados preenchem a proposta automaticamente.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                    <Settings size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">4. Checklist e Foto do Local</h4>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li><strong>Checklist:</strong> É gerado automaticamente com base no tipo de telhado, disjuntor e cabos calculados. Você pode adicionar novos itens, editar ou remover os existentes diretamente na aba "Checklist".</li>
                  <li><strong>Foto do Local:</strong> Na aba "Comercial", você pode fazer o upload de uma foto da fachada ou do telhado do cliente. Essa foto aparecerá na capa da proposta final.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                    <Printer size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">5. Proposta, Histórico e Impressão</h4>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                  <li><strong>Configurações da Proposta:</strong> No modo "PROPOSTA", clique no ícone de engrenagem para editar os dados da sua empresa, nome do vendedor, garantias e condições de pagamento.</li>
                  <li><strong>Histórico:</strong> Use o botão "SALVAR PROJETO" para guardar a proposta no seu dispositivo (funciona offline). Use o ícone de relógio no topo para carregar projetos antigos.</li>
                  <li><strong>Impressão (PDF):</strong> Clique em "IMPRIMIR PROPOSTA". Na janela de impressão do navegador, certifique-se de <strong>ativar "Gráficos de plano de fundo"</strong> (para manter as cores) e <strong>desativar "Cabeçalhos e rodapés"</strong>. Salve como PDF ou envie para a impressora.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2 mb-4 flex items-center gap-2">
              <LifeBuoy className="text-sky-600" size={20} />
              Precisa de Ajuda?
            </h3>
            
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div>
                <p className="text-slate-700 mb-4">
                  Se você encontrou algum problema, tem dúvidas sobre o dimensionamento ou precisa de suporte técnico, entre em contato com nossa equipe:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Phone className="text-green-600" size={18} />
                    </div>
                    (88) 98836-0143 <span className="text-sm text-slate-500 font-normal">(WhatsApp / Ligação)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Mail className="text-sky-600" size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span>mgssystemsolar@gmail.com</span>
                      <span>mgssystemsolarclientes@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-sky-100">
                  <LifeBuoy className="text-sky-500" size={40} />
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="p-4 bg-slate-50 border-t flex justify-end rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
