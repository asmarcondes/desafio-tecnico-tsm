import { Request, Response } from 'express';
import { listarAgendamentos } from "../services/agendamentoService";
import { parseISO } from "date-fns";

export const criarNovoAgendamento = (req: Request, res: Response) => {};

export const atualizarStatusAgendamento = (req: Request, res: Response) => {};

export const listarTodosAgendamentos = (req, res) => {
	var d = req.query.data;
	var s = req.query.status;
	var m = req.query.motoristaCpf;

	let df: Date | undefined = undefined;
	if (d) df = parseISO(d as string);

	const a = listarAgendamentos(df, s, m);
	res.status(200).json(a);
};