-- Table: public.monsters

-- DROP TABLE public.monsters;

CREATE TABLE public.monsters
(
    id integer NOT NULL DEFAULT nextval('monsters_id_seq'::regclass),
    alignment character varying(20) COLLATE pg_catalog."default",
    armor_class integer,
    armor_desc character varying(100) COLLATE pg_catalog."default",
    challenge_rating integer,
    charisma integer,
    condition_immunities character varying(200) COLLATE pg_catalog."default",
    constitution integer,
    damage_immunities character varying(200) COLLATE pg_catalog."default",
    damage_resistances character varying(200) COLLATE pg_catalog."default",
    damage_vulnerabilities character varying(200) COLLATE pg_catalog."default",
    dexterity integer,
    hit_dice character varying(50) COLLATE pg_catalog."default",
    hit_points integer,
    intelligence integer,
    languages character varying(200) COLLATE pg_catalog."default",
    legendary_desc character varying(2000) COLLATE pg_catalog."default",
    name character varying(100) COLLATE pg_catalog."default",
    reactions character varying(1000) COLLATE pg_catalog."default",
    senses character varying(200) COLLATE pg_catalog."default",
    size character varying(50) COLLATE pg_catalog."default",
    slug character varying(100) COLLATE pg_catalog."default",
    strength integer,
    subtype character varying(100) COLLATE pg_catalog."default",
    type character varying(100) COLLATE pg_catalog."default",
    wisdom integer,
    CONSTRAINT monsters_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters
    OWNER to postgres;