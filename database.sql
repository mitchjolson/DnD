-- Table: public.monsters

-- DROP TABLE public.monsters;

CREATE TABLE public.monsters
(
    id integer NOT NULL DEFAULT nextval('monsters_id_seq'::regclass),
    alignment character varying(20) COLLATE pg_catalog."default",
    armor_class integer,
    armor_desc character varying(100) COLLATE pg_catalog."default",
    challenge_rating character varying(20),
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


-- Table: public.monsters_actions

-- DROP TABLE public.monsters_actions;

CREATE TABLE public.monsters_actions
(
    id integer NOT NULL DEFAULT nextval('monsters_actions_id_seq'::regclass),
    attack_bonus integer,
    damage_bonus integer,
    damage_dice character varying(100) COLLATE pg_catalog."default",
    description character varying(2000) COLLATE pg_catalog."default",
    name character varying(100) COLLATE pg_catalog."default",
    monster_id integer,
    CONSTRAINT monsters_actions_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_actions
    OWNER to postgres;


-- Table: public.monsters_legendary_actions

-- DROP TABLE public.monsters_legendary_actions;

CREATE TABLE public.monsters_legendary_actions
(
    id integer NOT NULL DEFAULT nextval('monsters_legendary_actions_id_seq'::regclass),
    description character varying(2000) COLLATE pg_catalog."default",
    name character varying(100) COLLATE pg_catalog."default",
    monster_id integer,
    CONSTRAINT monsters_legendary_actions_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_legendary_actions
    OWNER to postgres;


-- Table: public.monsters_skills

-- DROP TABLE public.monsters_skills;

CREATE TABLE public.monsters_skills
(
    id integer NOT NULL DEFAULT nextval('monsters_skills_id_seq'::regclass),
    monster_id integer,
    acrobatics integer,
    animal_handling integer,
    arcana integer,
    athletics integer,
    deception integer,
    history integer,
    insight integer,
    intimidation integer,
    investigation integer,
    medicine integer,
    nature integer,
    perception integer,
    performance integer,
    persuasion integer,
    religion integer,
    sleight_of_hand integer,
    stealth integer,
    survival integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_skills
    OWNER to postgres;


-- Table: public.monsters_speed

-- DROP TABLE public.monsters_speed;

CREATE TABLE public.monsters_speed
(
    id integer NOT NULL DEFAULT nextval('monsters_speed_id_seq'::regclass),
    monster_id integer,
    burrow character varying(20) COLLATE pg_catalog."default",
    fly character varying(20) COLLATE pg_catalog."default",
    swim character varying(20) COLLATE pg_catalog."default",
    walk character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT monsters_speed_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_speed
    OWNER to postgres;


-- Table: public.monsters_special_abilities

-- DROP TABLE public.monsters_special_abilities;

CREATE TABLE public.monsters_special_abilities
(
    id integer NOT NULL DEFAULT nextval('monsters_special_abilities_id_seq'::regclass),
    monster_id integer,
    name character varying(200) COLLATE pg_catalog."default",
    description character varying(2000) COLLATE pg_catalog."default",
    CONSTRAINT monsters_special_abilities_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_special_abilities
    OWNER to postgres;


-- Table: public.monsters_reactions

-- DROP TABLE public.monsters_reactions;

CREATE TABLE public.monsters_reactions
(
    id integer NOT NULL DEFAULT nextval('monsters_reactions_id_seq'::regclass),
    monster_id integer,
    name character varying(100) COLLATE pg_catalog."default",
    description character varying(2000) COLLATE pg_catalog."default",
    CONSTRAINT monsters_reactions_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.monsters_reactions
    OWNER to postgres;