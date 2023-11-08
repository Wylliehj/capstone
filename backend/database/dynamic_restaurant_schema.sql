
CREATE TABLE restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    phone_number text NOT NULL,
    address text NOT NULL
);

CREATE TABLE text_content (
    loc_id TEXT,
    rest_id INTEGER REFERENCES restaurant(id),
    content VARCHAR(255) NOT NULL,
    PRIMARY KEY (loc_id, rest_id)
);


CREATE TABLE menu_items (
    loc_id TEXT,
    rest_id INTEGER REFERENCES restaurant(id),
    item_name TEXT,
    item_desc TEXT,
    price FLOAT,
    PRIMARY KEY (loc_id, rest_id)
);

CREATE TABLE hours (
    rest_id INTEGER PRIMARY KEY REFERENCES restaurant(id),
    monday TEXT,
    tuesday TEXT,
    wednesday TEXT,
    thursday TEXT,
    friday TEXT,
    saturday TEXT,
    sunday TEXT
);

