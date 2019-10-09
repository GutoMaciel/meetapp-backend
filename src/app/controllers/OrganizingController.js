import Meetup from '../models/Meetup';

// Listagem de inscrições

// Crie uma rota para listar os meetups em que o usuário logado está inscrito.

// Liste apenas meetups que ainda não passaram e ordene meetups mais próximos como primeiros da lista.
class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetups);
  }
}

export default new OrganizingController();
