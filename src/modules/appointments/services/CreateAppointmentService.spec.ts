import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '7378267326492',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('7378267326492');
  });

  it('should not be able to create 2 appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2021, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '7378267326492',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '7378267326492',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
