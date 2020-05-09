import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import CategoryController from './app/controllers/CategoryController';
import PointController from './app/controllers/PointController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryPendingController from './app/controllers/DeliveryPendingController';
import DeliveryDeliveredController from './app/controllers/DeliveryDeliveredController';
import DeliveryWithDrawController from './app/controllers/DeliveryWithDrawController';
import DeliveryFinishController from './app/controllers/DeliveryFinishController';
import DeliveryProblem from './app/controllers/DeliveryProblemController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/categories', upload.single('category'), CategoryController.store);

routes.get('/points', PointController.index);
routes.post('/points', PointController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);


routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);



routes.get('/deliveryman/:id', DeliveryPendingController.index);
routes.get('/deliveryman/:id/deliveries', DeliveryDeliveredController.index);
routes.put(
	'/deliveryman/:deliverymanId/delivery/:deliveryId',
	DeliveryWithDrawController.update
);
routes.put(
	'/deliveryman/:deliverymanId/delivery/:deliveryId/finish',
	DeliveryFinishController.update
);

routes.post('/delivery/:id/problems', DeliveryProblem.store);

routes.get('/deliverymen/:id', DeliverymanController.show);

// Rotas de destinatarios
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.delete('/recipients/:id', RecipientController.destroy);

// Rotas de entregadores
routes.post('/deliverymen', DeliverymanController.store);
routes.get('/deliverymen', DeliverymanController.index);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.destroy);

routes.get('/deliveries/problems', DeliveryProblem.index);
routes.get('/delivery/:id/problems', DeliveryProblem.show);

// Rotas de encomendas
routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:id', DeliveryController.show);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.destroy);

routes.delete('/problem/:id/cancel-delivery', DeliveryProblem.destroy);



export default routes;
