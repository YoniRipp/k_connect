const db = require('../models');

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await db.Category.create({ category_name: name });
        res.json({ success: true, code: 200, data: { id: category.category_id, name: category.category_name } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getCategoryById = async (req, res) => {
    try {
        const category = await db.Category.findByPk(req.params.id, {
            include: [{
                model: db.Item,
                include: [{
                    model: db.ItemVolume,
                    as: 'ItemVolumes'  // Confirm this matches your model association alias
                }]
            }]
        });

        if (category) {
            // Mapping the response to match the desired output
            const responseData = {
                category: {
                    id: category.category_id,
                    name: category.category_name,
                    items: category.Items.map(item => ({
                        item_id: item.item_id,
                        item_name: item.item_name,
                        category_id: item.category_id,
                        volumes: item.ItemVolumes.map(volume => ({
                            volume_id: volume.volume_id,
                            description: volume.volume_description,
                            price: volume.price,
                            duration_months: volume.duration_months
                        }))
                    }))
                }
            };

            res.json({
                success: true,
                code: 200,
                data: responseData
            });
        } else {
            res.status(404).json({ success: false, message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
