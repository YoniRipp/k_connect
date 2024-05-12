INSERT INTO categories (category_name) VALUES ('Gym'), ('Beauty');

INSERT INTO items (item_name, category_id) VALUES
('Alon', (SELECT category_id FROM categories WHERE category_name = 'Gym')),
('Ben', (SELECT category_id FROM categories WHERE category_name = 'Gym')),
('Carl', (SELECT category_id FROM categories WHERE category_name = 'Gym')),
('Dani', (SELECT category_id FROM categories WHERE category_name = 'Gym')),
('Eli', (SELECT category_id FROM categories WHERE category_name = 'Gym')),
('Fergi', (SELECT category_id FROM categories WHERE category_name = 'Beauty')),
('Goni', (SELECT category_id FROM categories WHERE category_name = 'Beauty')),
('Helena', (SELECT category_id FROM categories WHERE category_name = 'Beauty')),
('Irit', (SELECT category_id FROM categories WHERE category_name = 'Beauty')),
('Josephine', (SELECT category_id FROM categories WHERE category_name = 'Beauty'));

INSERT INTO items_volumes (item_id, volume_description, price, duration_months) VALUES
((SELECT item_id FROM items WHERE item_name = 'Alon'), 'Short Term', 1, 50),
((SELECT item_id FROM items WHERE item_name = 'Ben'), 'Short Term', 2, 2),
((SELECT item_id FROM items WHERE item_name = 'Carl'), 'Long Term', 3, 3),
((SELECT item_id FROM items WHERE item_name = 'Dani'), 'Long Term', 4, 4),
((SELECT item_id FROM items WHERE item_name = 'Eli'), 'Long Term', 5, 5),
((SELECT item_id FROM items WHERE item_name = 'Fergi'), 'Eyes', 6, 6),
((SELECT item_id FROM items WHERE item_name = 'Goni'), 'Eyes', 7, 7),
((SELECT item_id FROM items WHERE item_name = 'Helena'), 'Eyes', 8, 8),
((SELECT item_id FROM items WHERE item_name = 'Irit'), 'Nose', 9, 9),
((SELECT item_id FROM items WHERE item_name = 'Josephine'), 'Nose',10, 10);


