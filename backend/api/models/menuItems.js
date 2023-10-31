'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError } = require('../expressError');

class MenuItem {
    /**Get all items on a given menu for a particular restaurant */
    static async get(rest_id, menu){
        let menuQuery = `%${menu}%`
        const itemRes = await db.query(
            `SELECT loc_id AS "locID",
                    item_name AS "itemName",
                    item_desc AS "itemDesc",
                    price
             FROM menu_items
             WHERE rest_id = $1 AND loc_id ILIKE $2
             ORDER BY loc_id`,
            [rest_id, menuQuery]);
        const menuItems = itemRes.rows;

        if(!menuItems) throw new NotFoundError(`No menu: ${menu}`)

        return menuItems;
    }
    static async delete(rest_id, loc_id){
        const itemRes = await db.query(
            `DELETE
             FROM menu_items
             WHERE rest_id = $1 AND loc_id = $2
             RETURNING item_name`,
             [rest_id, loc_id]);

        const deletedItem = itemRes.rows[0];
        if(!deletedItem) throw new NotFoundError(`No menu item found at: ${loc_id}`);
        return deletedItem;
    }
    static async update(data){
        let keys = Object.keys(data);
        if(keys.length === 0) throw new BadRequestError(`No Data`);

        let cols = [`item_name = ${data[itemName]}`, `item_desc = ${data[itemDesc]}`, `price = ${data[price]}`];
        let setQuery = cols.join(', '); 
        const updateRes = await db.query(
            `UPDATE menu_items
             SET $1
             WHERE rest_id = $2 AND loc_id = $3
             RETURNING loc_id AS locId,
                       item_name AS itemName,
                       item_desc AS itemDesc,
                       price`,
        [setQuery, data[restId], data[locId]]);

        const menuItem = updateRes.rows[0];

        if(!menuItem) throw new BadRequestError(`No item ${data[itemName]} at: ${data[locId]}`);
        return menuItem;
    }
}

module.exports = MenuItem;