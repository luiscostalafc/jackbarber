import Point from "../models/Point";

class PointController {
  async store(req, res) {
    const point = await Point.create(req.body);

    return res.json(point);
  }

	async index(req, res) {}

}
export default new PointController;
