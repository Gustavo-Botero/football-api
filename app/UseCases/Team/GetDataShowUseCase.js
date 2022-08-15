const TeamModel = use('App/Models/Team');

class GetDataShowUseCase {

    /**
     * Function to get a team by name and players if required
     * @param {String} team
     * @param {Boolean} players
     * @returns object
     */
    async handle(team, players = null) {
        let query;
        let status = 200;
        let teamName = team.replaceAll('-', ' ');

        if (players) {
            query = await TeamModel.query().where('name', teamName).with('players').fetch();
        } else {
            query = await TeamModel.query().where('name', teamName).fetch();
        }

        if (query.toJSON() == '') {
            query = 'El nombre del equipo no existe';
            status = 404;
        }

        return {
            'data': query,
            'status': status
        };
    }
}

module.exports = new GetDataShowUseCase()