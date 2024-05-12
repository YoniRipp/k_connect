const db = require('../models');


exports.getAllItems = async (req, res) => {
    try {
        const items = await db.Item.findAll({
            include: [{
                model: db.ItemVolume,
                as: 'ItemVolumes'  
            }]
        });

        const responseData = items.map(item => ({
            id: item.item_id,
            name: item.item_name,
            volumes: item.ItemVolumes.map(volume => ({
                value: volume.duration_months,  
                price: volume.price
            }))
        }));

        res.json({
            success: true,
            code: 200,
            data: responseData
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await db.Item.findByPk(req.params.id, {
            include: [{
                model: db.ItemVolume,
                as: 'ItemVolumes'  
            }]
        });

        if (item) {
            // Restructure the output to directly include volumes under the item
            const responseData = {
                id: item.item_id,
                name: item.item_name,
                volumes: item.ItemVolumes.map(volume => ({
                    value: volume.duration_months, 
                    price: volume.price
                }))
            };

            res.json({
                success: true,
                code: 200,
                data: responseData
            });
        } else {
            res.status(404).json({ success: false, message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.searchItemsAndCategories = async (req, res) => {

    const searchText = req.query.q;  // Get search query from URL parameter
    try {
        // Search for items
        const items = await db.Item.findAll({
            where: {
                item_name: {
                    [db.Sequelize.Op.like]: `%${searchText}%`  // Search for partial matches in item_name
                }
            },
            include: [{
                model: db.ItemVolume,
                as: 'ItemVolumes'
            }]
        });

        // Search for categories
        const categories = await db.Category.findAll({
            where: {
                category_name: {
                    [db.Sequelize.Op.like]: `%${searchText}%`  // Search for partial matches in category_name
                }
            }
        });

        // Format response
        res.json({
            success: true,
            code: 200,
            data: {
                items: items.map(item => ({
                    id: item.item_id,
                    name: item.item_name,
                    volumes: item.ItemVolumes.map(volume => ({
                        value: volume.volume_id,
                        price: volume.price
                    }))
                })),
                categories: categories.map(category => ({
                    id: category.category_id,
                    name: category.category_name
                }))
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
