# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de como recuperar sua senha
- O usuário deve poder resetar sua senha

**RNF**

- Utilizar Mailtrap para testar envio de e-mails em ambiente dev
- Utilizar Amazon SES para envios em produção
- O envio de e-mails deve acontecer em segundo plano (background-job)

**RN**

- O link enviado por e-mail para resetar senha, deve durar no máximo 2 horas
- O usuário precisa digitar a nova senha 2 vezes

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil (nome, email e senha)


**RNF**

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário
- Para atualizar sua senha, o usuário precisa informar a senha antiga
- Para atualizar sua senha, o usuário deve digitar a nova senha 2 vezes

# Painel do prestador

**RF**

- O usuário deve poder visualizar seus agendamentos de um dia específico
- O prestador deve receber uma notificação a cada vez que receber um novo agendamento
- O prestador deve poder visualizar as notificações não lidas


**RNF**

- A listagem de agendamentos deve ser armazenada em cache
- As notificações do prestador devem ser armazenadas no MongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida e não lida para que o prestador possa controlar.

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos 1 horário disponível de um prestador
- O usuário deve poder listar horários disponíveis de um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador


**RNF**

- A listagem de prestadores de serviço deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1 hora exatamente
- Os agendamentos devem estar disponíveis no intervalo das 8h às 18h (Primeiro às 8h, último às 17h)
- O usuário não pode agendar em um horário ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviços consigo mesmo
