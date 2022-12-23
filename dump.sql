--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token TEXT NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now()
);


--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    visits bigint DEFAULT 0,
    "createdAt" timestamp with time zone DEFAULT now()
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Miguel Domingos', 'miguel@dev.com', '$2b$10$G52xqVFj0CFwACVXRWhE.O4901Ehu/ILjdg7iyc4W7zw18aKhpWiC', '2022-12-23 11:59:43.378164-03');
INSERT INTO public.users VALUES (3, 'hacker', 'hacker@dev.com', '$2b$10$WFE7qrHBWOc/ojCmjl3z/ule.lI/B5l6K0l2.Af0sEqy9.pTOPXiC', '2022-12-23 12:00:35.503726-03');
INSERT INTO public.users VALUES (5, 'hacker', 'hacker2@dev.com', '$2b$10$2DRIr0HwQRcmPW.FV216euvjf6nGyKMDLU3au4vnNbp4If373QOdW', '2022-12-23 12:00:57.74883-03');
INSERT INTO public.users VALUES (6, 'hacker', 'hacker1@dev.com', '$2b$10$82fdyRZscpH8.BSfziM7cuy2JbxIr6mihKKRwFvyYVFpWiK54hclK', '2022-12-23 12:01:05.380094-03');
INSERT INTO public.users VALUES (9, 'hacker', 'hacker3@dev.com', '$2b$10$2sn8kcQfI3E6a4JjykkpsOwAAEA9Stz.sUD.TvCmeZ41.bKQ2bivC', '2022-12-23 12:01:14.873396-03');
INSERT INTO public.users VALUES (10, 'hacker', 'hacker4@dev.com', '$2b$10$uvuKcAwcI6thvIARFtj8.eZBWmPI1wrLtd4pQAKa/KxNPRIH0oUmO', '2022-12-23 12:01:18.904523-03');
INSERT INTO public.users VALUES (11, 'hacker', 'hacker5@dev.com', '$2b$10$Cee8EFwCOecuyGPWGit5MumLeSjnvLRZzzvDk2xjH6i7h5EdtJIc2', '2022-12-23 12:01:22.777832-03');
INSERT INTO public.users VALUES (12, 'hacker', 'hacker6@dev.com', '$2b$10$CzrPx0YSMRWrL7JouDsIBedl5YWRqqZNLmq1tCfQ8t4l/Qppu7u2e', '2022-12-23 12:01:26.372486-03');
INSERT INTO public.users VALUES (13, 'hacker', 'hacker7@dev.com', '$2b$10$kgL25m2k5W/Gt2kBcY6SGef7jeDe0tihz.o6USNoQ9yC/PNYYySUe', '2022-12-23 12:01:30.477404-03');
INSERT INTO public.users VALUES (14, 'hacker', 'hacker8@dev.com', '$2b$10$tVxVmX2.c6dZ0l8azil6X.2mZcr3SNC4uKYlCNNvQe8dNwwJzHmVS', '2022-12-23 12:01:34.582656-03');
INSERT INTO public.users VALUES (15, 'hacker', 'hacker9@dev.com', '$2b$10$5RjI26SoJVUvTebBsgZ2F.Lg2d.2MDFUHYMexwfyjp1SubliNwj0G', '2022-12-23 12:01:38.355196-03');


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tokens_id_seq', 1, false);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 17, true);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_userId_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_key" UNIQUE ("userId");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

