import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
// parseISO -> converte um dateTime para Date() do JavaScript!
// startOfHour -> Pega um horario e remove seus minutos, deixa apenas a horsa

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createNewAppointment = new CreateAppointmentService();

    const appointment = await createNewAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
});

export default appointmentsRouter;
