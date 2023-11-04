const db = require('../db');
const { BadRequestError, NotFoundError } = require('../expressError');

class Content {
    static async getText(restId, locId){
        let idQuery = `${locId}%`;
        const contentRes = await db.query(`
            SELECT loc_id AS "locId",
                   content
            FROM text_content
            WHERE rest_id = $1 AND loc_id ILIKE $2
            ORDER BY loc_id`,
            [restId, idQuery])
        const contentItems = contentRes.rows;

        if(!contentItems[0]) throw new BadRequestError(`No content with id: ${locId}`)

        return contentItems;
    }

    static async getHours(restId){
        let query = await db.query(`
            SELECT monday, 
                   tuesday, 
                   wednesday, 
                   thursday, 
                   friday, 
                   saturday, 
                   sunday
            FROM hours
            WHERE rest_id = $1`,
            [restId])
        const hours = query.rows[0];
        if(!hours) throw new BadRequestError(`No hours for restaurant with id: ${restId}`)
        return hours;
    }
}

module.exports = Content