CREATE TABLE cartillas2(
   ID SERIAL PRIMARY KEY,
   info JSON NOT NULL,
	Ganador TEXT
)
CREATE TABLE numLanzados(
   ID SERIAL PRIMARY KEY,
   lanzados JSON NOT NULL
)