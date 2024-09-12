import { criarAgendamento, alterarStatus } from '../src/services/agendamentoService';
import { Agendamento } from '../src/models/agendamento';

describe('Agendamento Service', () => {
  let agendamento: Agendamento;

  beforeEach(() => {
    agendamento = {
      id: '1',
      motoristaNome: 'João',
      motoristaCpf: '12345678900',
      placaCaminhao: 'ABC-1234',
      numeroContrato: 'CT123',
      dataHora: new Date('2024-09-15T10:00:00Z'),
      status: 'pendente',
    };
  });

  it('Deve criar um novo agendamento', () => {
    const novoAgendamento = criarAgendamento(agendamento);
    expect(novoAgendamento).toEqual(agendamento);
  });

  it('Não deve permitir agendamento se o motorista tem um agendamento pendente ou atrasado', () => {
    criarAgendamento(agendamento);
    const novoAgendamento = { ...agendamento, id: '2' };
    expect(() => criarAgendamento(novoAgendamento)).toThrow('Conflito de agendamento');
  });

  it('Não deve permitir agendamento de dois motoristas no mesmo horário', () => {
    criarAgendamento(agendamento);
    const outroAgendamento = { ...agendamento, id: '2', motoristaCpf: '98765432100' };
    expect(() => criarAgendamento(outroAgendamento)).toThrow('Conflito de agendamento');
  });

  it('Deve alterar o status de um agendamento', () => {
    criarAgendamento(agendamento);
    const atualizado = alterarStatus(agendamento.id, 'concluido');
    expect(atualizado.status).toBe('concluido');
  });

  it('Não deve permitir cancelar um agendamento concluído', () => {
    criarAgendamento(agendamento);
    alterarStatus(agendamento.id, 'concluido');
    expect(() => alterarStatus(agendamento.id, 'cancelado')).toThrow('Não é possível cancelar um agendamento já concluído');
  });

  it('Não deve permitir alterar um agendamento cancelado', () => {
    criarAgendamento(agendamento);
    alterarStatus(agendamento.id, 'cancelado');
    expect(() => alterarStatus(agendamento.id, 'concluido')).toThrow('Não é possível alterar um agendamento cancelado');
  });
});
