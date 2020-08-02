import {Router} from 'express';
import appointmentsRouter from './appointments.routes';
import userstRouter from './users.routes';
import sessionstRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userstRouter);
routes.use('/sessions', sessionstRouter);

export default routes;