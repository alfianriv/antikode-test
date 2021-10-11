--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.4

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
-- Name: tb_brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_brand (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    logo character varying(255) NOT NULL,
    banner character varying(255) NOT NULL
);


ALTER TABLE public.tb_brand OWNER TO postgres;

--
-- Name: tb_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_brand_id_seq OWNER TO postgres;

--
-- Name: tb_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_brand_id_seq OWNED BY public.tb_brand.id;


--
-- Name: tb_outlet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_outlet (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    address text NOT NULL,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL,
    brand_id integer NOT NULL
);


ALTER TABLE public.tb_outlet OWNER TO postgres;

--
-- Name: tb_outlet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_outlet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_outlet_id_seq OWNER TO postgres;

--
-- Name: tb_outlet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_outlet_id_seq OWNED BY public.tb_outlet.id;


--
-- Name: tb_product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_product (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    picture character varying(255) NOT NULL,
    price integer DEFAULT 0 NOT NULL,
    outlet_id integer NOT NULL
);


ALTER TABLE public.tb_product OWNER TO postgres;

--
-- Name: tb_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_product_id_seq OWNER TO postgres;

--
-- Name: tb_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_product_id_seq OWNED BY public.tb_product.id;


--
-- Name: tb_brand id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_brand ALTER COLUMN id SET DEFAULT nextval('public.tb_brand_id_seq'::regclass);


--
-- Name: tb_outlet id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_outlet ALTER COLUMN id SET DEFAULT nextval('public.tb_outlet_id_seq'::regclass);


--
-- Name: tb_product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_product ALTER COLUMN id SET DEFAULT nextval('public.tb_product_id_seq'::regclass);


--
-- Data for Name: tb_brand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_brand (id, name, logo, banner) FROM stdin;
6	Adidas	https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png	https://mmc.tirto.id/image/otf/880x495/2016/05/12/adidas_056_ratio-16x9.JPG
8	Nike	https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png	https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg
\.


--
-- Data for Name: tb_outlet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_outlet (id, name, image, address, longitude, latitude, brand_id) FROM stdin;
2	Adidas Plaza Indonesia	https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png	PLAZA INDONESIA Jalan M.H. Thamrin No.28-30, Jl. Gondangdia Dalam No.5, RT.9/RW.5, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350	106.8198244	-6.1930084	6
3	Adidas Bank Bangkok	https://assets.adidas.com/images/w_600,f_auto,q_auto/7b6e244d42a8482583cbad21017493ce_9366/Humanrace_Sichona_Shoes_Blue_GW4880.jpg	Jl. MH Thamrin No1 Grand Indonesia SB2-2,2-03 Jakarta Pusat DKI JAKARTA ID 10310, Jl. M.H. Thamrin No.1, RT.1/RW.5, Menteng, Central Jakarta City, Jakarta 10310	106.822782	-6.192454	6
4	Nike Grand Indonesia	https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png	Grand Indonesia Lantai 2, Jl. M.H. Thamrin No.1, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310	106.8237261	-6.1945654	8
\.


--
-- Data for Name: tb_product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_product (id, name, picture, price, outlet_id) FROM stdin;
2	HUMANRACE SICHONA SHOES	https://assets.adidas.com/images/w_600,f_auto,q_auto/7b6e244d42a8482583cbad21017493ce_9366/Humanrace_Sichona_Shoes_Blue_GW4880.jpg	2800000	2
\.


--
-- Name: tb_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_brand_id_seq', 8, true);


--
-- Name: tb_outlet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_outlet_id_seq', 4, true);


--
-- Name: tb_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_product_id_seq', 2, true);


--
-- Name: tb_product PK_4aceb181b0d6bb92343817fc5c9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_product
    ADD CONSTRAINT "PK_4aceb181b0d6bb92343817fc5c9" PRIMARY KEY (id);


--
-- Name: tb_brand PK_928f649ba57cedcea7b2294d122; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_brand
    ADD CONSTRAINT "PK_928f649ba57cedcea7b2294d122" PRIMARY KEY (id);


--
-- Name: tb_outlet PK_c9482f4051fa8ecf35c7635bbff; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_outlet
    ADD CONSTRAINT "PK_c9482f4051fa8ecf35c7635bbff" PRIMARY KEY (id);


--
-- Name: tb_brand UQ_7a4798192fb0633c99d017b8b2a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_brand
    ADD CONSTRAINT "UQ_7a4798192fb0633c99d017b8b2a" UNIQUE (name);


--
-- Name: tb_outlet UQ_8eb2d481b2586931dce690622ac; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_outlet
    ADD CONSTRAINT "UQ_8eb2d481b2586931dce690622ac" UNIQUE (name);


--
-- Name: tb_outlet FK_77d75af8f176cf283a48033bb00; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_outlet
    ADD CONSTRAINT "FK_77d75af8f176cf283a48033bb00" FOREIGN KEY (brand_id) REFERENCES public.tb_brand(id);


--
-- Name: tb_product FK_ab478244719788b5715122a2b75; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_product
    ADD CONSTRAINT "FK_ab478244719788b5715122a2b75" FOREIGN KEY (outlet_id) REFERENCES public.tb_outlet(id);


--
-- PostgreSQL database dump complete
--

