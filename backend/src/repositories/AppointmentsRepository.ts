import {EntityRepository, Repository} from 'typeorm';
import Appointment from '../models/Appointment';


//DTO - DATA TRANSFER OBJECT

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment>{
  

  public async findbyDate(date: Date) : Promise<Appointment | null> {

    const findAppointment = await this.findOne({
      where: {date},
    })
    return findAppointment || null;
  }

  
}

export default AppointmentRepository;