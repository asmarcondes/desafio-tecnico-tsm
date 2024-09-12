# Desafio Técnico - API de Agendamento

## Objetivo
Implementar uma API RESTful para gerenciar agendamentos de motoristas, conforme as regras de negócio descritas abaixo.

## Requisitos

### Rotas:
- POST `/agendamentos`: Cria um novo agendamento.
- PATCH `/agendamentos/:id/status`: Altera o status de um agendamento.

### Regras de Negócio:
- Não é possível criar agendamentos se o motorista já possui um com status `pendente` ou `atrasado`.
- Não é possível agendar mais de um motorista no mesmo horário.
- Não é permitido alterar o status para `cancelado` de um agendamento já `concluido`.
- Não é permitido alterar o status de agendamentos `cancelados`.

## Como rodar o projeto

1. Clone o repositório:
	```bash
	git clone <url-do-repositorio>
	```

2. Instale as dependências:
	```bash
	yarn install
	```
3. Execute a aplicação:
	```bash
	yarn start
	```
4. Execute os testes:
	```bash
	yarn test
	```