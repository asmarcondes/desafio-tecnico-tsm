import { Agendamento } from '../models/agendamento';
import { isSameDay } from "date-fns";

var agendamentos: Agendamento[] = [];

export const criarAgendamento = (novoAgendamento: Agendamento): Agendamento => {
	// TODO
};

export const alterarStatus = (id, novoStatus: Status): Agendamento => {
	// TODO
};

export const listarAgendamentos = (d, s, m): Agendamento[] => {
	return agendamentos.filter((a) => {
		var corresponde = true;

		if (d) {
			corresponde = corresponde && isSameDay(a.dataHora, d);
		} else if (s) {
			corresponde = corresponde && a.status === s;
		} else if (m) {
			corresponde = corresponde && a.motoristaCpf === m;
		}

		return corresponde;
	});
};
