import {Router} from 'express';
import {parseISO} from 'date-fns';
import {getCustomRepository} from 'typeorm'

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../midleware/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();
  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const parseDate = parseISO(date)
  const createAppointment = new CreateAppointmentService();
  const appointment = await createAppointment.execute({
    provider_id, 
    date: parseDate
  });
  return response.json(appointment);
});

export default appointmentsRouter;