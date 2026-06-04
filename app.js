// Base de Datos de Animes Populars (Simulada)
const animeData = [
    {
        id: "demon-slayer",
        title: "Demon Slayer (Kimetsu no Yaiba)",
        genres: ["Acción", "Fantasía", "Aventura"],
        rating: 8.7,
        episodes: "55 + Películas",
        studio: "ufotable",
        status: "En Emisión",
        releaseDate: "Abril 2019",
        image: "https://otakugato.com/wp-content/uploads/elementor/thumbs/Demon_Slayer_Hashira_Training_Arc_Poster2-1-qlmx8mh9idhflwqjbeg04ux1rsjpfeeww02egipsbm.jpg",
        synopsis: "Japón de la era Taisho. Tanjiro Kamado es un chico de buen corazón que se gana la vida vendiendo carbón. Sin embargo, su vida cambia radicalmente cuando su familia es masacrada por un demonio. Su hermana menor, Nezuko, es la única superviviente, pero se ha transformado en un demonio. Para salvarla y vengar a su familia, Tanjiro emprende un viaje para convertirse en un cazador de demonios.",
        characters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Giyu Tomioka", "Kyojuro Rengoku"]
    },
    {
        id: "jujutsu-kaisen",
        title: "Jujutsu Kaisen",
        genres: ["Acción", "Fantasía", "Drama"],
        rating: 8.6,
        episodes: "47 + Película",
        studio: "MAPPA",
        status: "En Emisión",
        releaseDate: "Octubre 2020",
        image: "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Yuji Itadori es un estudiante de secundaria con una fuerza física excepcional que prefiere pasar tiempo con el club de ocultismo. La vida de Yuji da un vuelco cuando se topa con un objeto maldito de alto rango que desencadena una serie de eventos sobrenaturales. Para proteger a sus amigos, Yuji se traga el dedo de Ryomen Sukuna, el 'Rey de las Maldiciones', convirtiéndose en su recipiente y entrando al oscuro e implacable mundo de la hechicería jujutsu.",
        characters: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo", "Ryomen Sukuna", "Suguru Geto"]
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan (Shingeki no Kyojin)",
        genres: ["Acción", "Drama", "Fantasía"],
        rating: 9.1,
        episodes: "89 + OVAs",
        studio: "Wit Studio / MAPPA",
        status: "Finalizado",
        releaseDate: "Abril 2013",
        image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Hace cien años, la humanidad se vio al borde de la extinción debido a la repentina aparición de los Titanes, gigantescas criaturas devoradoras de hombres. Los supervivientes se refugiaron tras tres inmensas murallas de 50 metros. Eren Yeager, un joven de la ciudad de Shiganshina, sueña con el mundo exterior hasta que un Titán Colosal destruye el muro, provocando una masacre. Eren jura erradicar a todos y cada uno de los Titanes de la faz de la Tierra.",
        characters: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman", "Erwin Smith", "Reiner Braun"]
    },
    {
        id: "frieren",
        title: "Frieren: Beyond Journey's End",
        genres: ["Fantasía", "Drama", "Aventura"],
        rating: 9.0,
        episodes: "28",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Septiembre 2023",
        image: "https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "La maga elfa Frieren y sus valientes compañeros de aventura han derrotado al Rey Demonio, trayendo la paz al reino. Tras diez años de travesía, el grupo se separa con la promesa de volver a reunirse. Para una elfa como Frieren, cuya esperanza de vida es de miles de años, el tiempo pasa en un abrir y cerrar de ojos. Al presenciar la vejez y muerte de sus amigos, Frieren se arrepiente de no haberlos conocido mejor y emprende un viaje para aprender sobre los humanos y el valor del tiempo.",
        characters: ["Frieren", "Fern", "Stark", "Himmel", "Heiter", "Eisen"]
    },
    {
        id: "one-piece",
        title: "One Piece",
        genres: ["Aventura", "Acción", "Fantasía"],
        rating: 8.9,
        episodes: "1100+",
        studio: "Toei Animation",
        status: "En Emisión",
        releaseDate: "Octubre 1999",
        image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Riqueza, fama, poder... el Rey de los Piratas, Gol D. Roger, lo obtuvo todo. Sus últimas palabras antes de morir inspiraron a miles de piratas a lanzarse al mar en busca de su legendario tesoro, el 'One Piece'. Veinte años después, Monkey D. Luffy, un joven entusiasta que adquirió poderes elásticos al comer una Fruta del Diablo, zarpa al océano con el firme propósito de reclutar a su propia tripulación, superar todos los peligros de la Gran Ruta y convertirse en el nuevo Rey de los Piratas.",
        characters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Vinsmoke Sanji", "Tony Tony Chopper", "Nico Robin"]
    },
    {
        id: "my-hero-academia",
        title: "My Hero Academia",
        genres: ["Acción", "Escolar", "Fantasía"],
        rating: 8.0,
        episodes: "138",
        studio: "Bones",
        status: "En Emisión",
        releaseDate: "Abril 2016",
        image: "https://hips.hearstapps.com/hmg-prod/images/my-hero-academia-temporada-6-669b9200f3a64.jpg",
        synopsis: "En un mundo donde la mayoría de las personas nacen con superpoderes conocidos como dones, Izuku Midoriya es un joven sin superpoderes que sueña con convertirse en un héroe. Después de un encuentro del destino con el héroe número uno del mundo, All Might, hereda su legendario don y entra en la prestigiosa Academia U.A. para entrenar.",
        characters: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "All Might"]
    },
    {
        id: "haikyu",
        title: "Haikyu!!",
        genres: ["Deportes", "Escolar", "Drama"],
        rating: 8.9,
        episodes: "85",
        studio: "Production I.G",
        status: "Finalizado",
        releaseDate: "Abril 2014",
        image: "https://m.media-amazon.com/images/M/MV5BYjYxMWFlYTAtYTk0YS00NTMxLWJjNTQtM2E0NjdhYTRhNzE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Shoyo Hinata, un estudiante de secundaria, se apasiona por el voleibol tras ver jugar al Pequeño Gigante. A pesar de su baja estatura, crea un club de voleibol en su escuela. Tras ser derrotados por el 'Rey de la Corte' Tobio Kageyama en su primer torneo, Hinata jura superarlo. Al ingresar a la preparatoria Karasuno, descubre que Kageyama ahora es su compañero de equipo.",
        characters: ["Shoyo Hinata", "Tobio Kageyama", "Kei Tsukishima", "Yuu Nishinoya"]
    },
    {
        id: "kaguya-sama",
        title: "Kaguya-sama: Love is War",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 8.8,
        episodes: "37",
        studio: "A-1 Pictures",
        status: "Finalizado",
        releaseDate: "Enero 2019",
        image: "https://m.media-amazon.com/images/M/MV5BZWJlZGJmMjctZTUwZi00NmU3LWJlNjItMGI2NjQ0NGU3YmY3XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Miyuki Shirogane y Kaguya Shinomiya son los líderes del consejo estudiantil de la prestigiosa Academia Shuchiin. Ambos son considerados la élite y se han enamorado el uno del otro, pero su inmenso orgullo les impide confesarlo. El primero en confesar su amor perderá y será el sumiso en la relación. Así comienza una guerra psicológica para hacer que el otro se declare.",
        characters: ["Kaguya Shinomiya", "Miyuki Shirogane", "Chika Fujiwara", "Yu Ishigami"]
    },
    {
        id: "another",
        title: "Another",
        genres: ["Terror", "Escolar", "Drama"],
        rating: 7.5,
        episodes: "12",
        studio: "P.A. Works",
        status: "Finalizado",
        releaseDate: "Enero 2012",
        image: "https://es.web.img3.acsta.net/pictures/19/09/19/15/04/5354652.jpg",
        synopsis: "En 1972, una popular estudiante de la clase 3-3 de la escuela Yomiyama North falleció repentinamente. Incapaces de aceptar su pérdida, sus compañeros y profesores actuaron como si siguiera viva. En 1998, el joven Koichi Sakakibara se transfiere a esa misma clase y nota una atmósfera sombría y pesada. Allí conoce a Mei Misaki, una misteriosa chica que lleva un parche en el ojo y a la que todos ignoran.",
        characters: ["Koichi Sakakibara", "Mei Misaki", "Izumi Akazawa", "Naoya Teshigawara"]
    },
    {
        id: "tokyo-ghoul",
        title: "Tokyo Ghoul",
        genres: ["Terror", "Acción", "Drama"],
        rating: 7.8,
        episodes: "24",
        studio: "Pierrot",
        status: "Finalizado",
        releaseDate: "Julio 2014",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11999443_b_v8_ab.jpg",
        synopsis: "En Tokio ocurren misteriosos asesinatos cometidos por Ghouls, seres caníbales que solo pueden alimentarse de carne humana y que viven ocultos entre la sociedad. Ken Kaneki, un joven universitario tímido, es atacado por una Ghoul y sobrevive de milagro gracias al trasplante de los órganos de su atacante muerta. Ahora, Kaneki se convierte en un híbrido mitad humano y mitad Ghoul.",
        characters: ["Ken Kaneki", "Touka Kirishima", "Rize Kamishiro", "Shu Tsukiyama"]
    },
    {
        id: "death-note",
        title: "Death Note",
        genres: ["Drama", "Terror", "Acción"],
        rating: 9.0,
        episodes: "37",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Octubre 2006",
        image: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Light Yagami es un estudiante de secundaria brillante pero aburrido de la vida. Todo cambia cuando encuentra un misterioso cuaderno negro llamado 'Death Note' tirado en el suelo. El cuaderno tiene la capacidad de matar a cualquier persona cuyo nombre sea escrito en él. Light decide usar el cuaderno para limpiar el mundo de criminales y crear una utopía sin maldad, bajo el alias de Kira.",
        characters: ["Light Yagami", "L Lawliet", "Ryuk", "Misa Amane"]
    },
    {
        id: "blue-lock",
        title: "Blue Lock",
        genres: ["Deportes", "Acción", "Drama"],
        rating: 8.3,
        episodes: "24",
        studio: "8bit",
        status: "En Emisión",
        releaseDate: "Octubre 2022",
        image: "https://m.media-amazon.com/images/I/81t2XhAKPbL._AC_UF894,1000_QL80_.jpg",
        synopsis: "Tras la desastrosa eliminación de Japón en el Mundial de 2018, la Unión de Fútbol japonesa decide crear un programa radical para desarrollar al delantero estrella definitivo que los lleve a la gloria. Reúnen a 300 jóvenes delanteros en una institución carcelaria de alta tecnología llamada 'Blue Lock'. Allí, el egoísmo y la competencia despiadada determinarán quién se convertirá en el delantero titular.",
        characters: ["Yoichi Isagi", "Meguru Bachira", "Rensuke Kunigami", "Hyoma Chigiri"]
    },
    {
        id: "horimiya",
        title: "Horimiya",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 8.2,
        episodes: "13",
        studio: "CloverWorks",
        status: "Finalizado",
        releaseDate: "Enero 2021",
        image: "https://m.media-amazon.com/images/I/81gWHkt7DvL._AC_UF1000,1000_QL80_.jpg",
        synopsis: "Kyoko Hori es una estudiante popular y brillante, pero en casa debe cuidar de su hermanito y encargarse de las tareas domésticas. Izumi Miyamura es visto como un otaku sombrío en la escuela, pero fuera es un chico amable con piercings y tatuajes. Un día se encuentran por casualidad fuera de clase, revelando sus verdaderos yo y descubriendo que tienen mucho más en común de lo que imaginaban.",
        characters: ["Kyoko Hori", "Izumi Miyamura", "Souta Hori", "Yuki Yoshikawa"]
    },
    {
        id: "chainsaw-man",
        title: "Chainsaw Man",
        genres: ["Acción", "Terror", "Fantasía"],
        rating: 8.5,
        episodes: "12",
        studio: "MAPPA",
        status: "En Emisión",
        releaseDate: "Octubre 2022",
        image: "https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Denji es un joven huérfano sumido en la pobreza extrema que caza demonios junto a su fiel perro demonio Pochita para saldar las monumentales deudas de su difunto padre. Tras ser traicionado y asesinado por la yakuza, Pochita se fusiona con el corazón de Denji para revivirlo. Ahora, con el poder de transformar partes de su cuerpo en motosierras, Denji es reclutado por los cazadores de demonios de seguridad pública.",
        characters: ["Denji", "Makima", "Power", "Aki Hayakawa"]
    },
    {
        id: "kuroko-basket",
        title: "Kuroko's Basketball",
        genres: ["Deportes", "Acción", "Escolar"],
        rating: 8.3,
        episodes: "75",
        studio: "Production I.G",
        status: "Finalizado",
        releaseDate: "Abril 2012",
        image: "https://m.media-amazon.com/images/M/MV5BYmI3NDAyZGUtYWZiZC00YWIwLTgyNDQtYjZmOGFmNTkzODYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "El equipo de baloncesto de la Secundaria Teiko dominó el país gracias a la 'Generación de los Milagros', cinco prodigios excepcionales. Sin embargo, existía un sexto miembro fantasma ignorado por muchos: Tetsuya Kuroko. Al ingresar a la preparatoria Seirin, Kuroko une fuerzas con Taiga Kagami, un talentoso jugador recién llegado de EE. UU., para llevar a Seirin a la cima del campeonato nacional.",
        characters: ["Tetsuya Kuroko", "Taiga Kagami", "Ryota Kise", "Shintaro Midorima"]
    },
    {
        id: "violet-evergarden",
        title: "Violet Evergarden",
        genres: ["Drama", "Fantasía", "Romance"],
        rating: 8.6,
        episodes: "13 + Películas",
        studio: "Kyoto Animation",
        status: "Finalizado",
        releaseDate: "Enero 2018",
        image: "https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Violet Evergarden es una joven huérfana entrenada exclusivamente como un arma de guerra durante un gran conflicto bélico continental. Con la guerra finalizada y habiendo perdido ambos brazos, ahora reemplazados por prótesis metálicas, Violet empieza a trabajar como una 'Auto Memory Doll', escritoras de cartas que ayudan a las personas a plasmar y entender sus sentimientos más profundos.",
        characters: ["Violet Evergarden", "Gilbert Bougainvillea", "Claudia Hodgins", "Cattleya Baudelaire"]
    },
    {
        id: "fullmetal-alchemist",
        title: "Fullmetal Alchemist: Brotherhood",
        genres: ["Aventura", "Acción", "Fantasía"],
        rating: 9.1,
        episodes: "64",
        studio: "Bones",
        status: "Finalizado",
        releaseDate: "Abril 2009",
        image: "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Edward y Alphonse Elric son dos hermanos alquimistas que intentaron realizar una transmutación humana para revivir a su fallecida madre. Este experimento prohibido fracasó trágicamente, costándole a Edward su pierna izquierda y a Alphonse todo su cuerpo físico. Edward sacrifica su brazo derecho para sellar el alma de su hermano en una armadura de metal. Juntos inician una búsqueda para hallar la Piedra Filosofal.",
        characters: ["Edward Elric", "Alphonse Elric", "Roy Mustang", "Winry Rockbell"]
    },
    {
        id: "hunter-x-hunter",
        title: "Hunter x Hunter",
        genres: ["Aventura", "Acción", "Fantasía"],
        rating: 9.0,
        episodes: "148",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Octubre 2011",
        image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Gon Freecss es un niño que vive en Isla Ballena y descubre que su padre, a quien creía muerto, sigue vivo y es un Cazador de renombre mundial. Los Cazadores son individuos de élite autorizados para buscar tesoros, cazar bestias y rastrear criminales. Con la esperanza de encontrar a su padre, Gon abandona su hogar a los 12 años para presentarse al durísimo y mortal Examen de Cazador.",
        characters: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio Paradinight"]
    },
    {
        id: "toradora",
        title: "Toradora!",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 8.1,
        episodes: "25",
        studio: "J.C.Staff",
        status: "Finalizado",
        releaseDate: "Octubre 2008",
        image: "https://m.media-amazon.com/images/I/819aGP+W6aL._AC_UF1000,1000_QL80_.jpg",
        synopsis: "Ryuuji Takasu es un chico amable pero con ojos aterradores que hacen que todos le teman. Taiga Aisaka es una chica pequeña de carácter feroz apodada la 'Tigre Compacta'. Cuando Ryuuji descubre accidentalmente que Taiga está enamorada de su mejor amigo, y Taiga descubre que Ryuuji está enamorado de la mejor amiga de ella, deciden formar un pacto y ayudarse mutuamente a conquistar a sus respectivos amores.",
        characters: ["Taiga Aisaka", "Ryuuji Takasu", "Minori Kushieda", "Yuusaku Kitamura"]
    },
    {
        id: "steins-gate",
        title: "Steins;Gate",
        genres: ["Drama", "Aventura", "Fantasía"],
        rating: 9.1,
        episodes: "24",
        studio: "White Fox",
        status: "Finalizado",
        releaseDate: "Abril 2011",
        image: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Rintarou Okabe es un científico loco autoproclamado que opera un laboratorio improvisado en Akihabara. Junto a sus amigos, crea un artefacto que permite enviar mensajes de texto al pasado, alterando el flujo temporal. Pronto se ven perseguidos por una oscura organización conspirativa que busca apoderarse de la tecnología del viaje en el tiempo, obligando a Okabe a cruzar líneas temporales desesperadamente.",
        characters: ["Rintarou Okabe", "Kurisu Makise", "Mayuri Shiina", "Itaru Hashida"]
    },
    {
        id: "sword-art-online",
        title: "Sword Art Online",
        genres: ["Aventura", "Acción", "Fantasía"],
        rating: 7.2,
        episodes: "25",
        studio: "A-1 Pictures",
        status: "Finalizado",
        releaseDate: "Julio 2012",
        image: "https://m.media-amazon.com/images/I/81mVoZWR6wL._AC_UF1000,1000_QL80_.jpg",
        synopsis: "En el año 2022, miles de jugadores se conectan a Sword Art Online (SAO), un revolucionario juego de rol de realidad virtual multijugador masivo en línea. Sin embargo, poco después de entrar, descubren que el creador del juego los ha atrapado dentro. La única forma de salir es superar los 100 pisos del castillo flotante de Aincrad; pero si mueren dentro del juego, morirán también en el mundo real.",
        characters: ["Kirito (Kazuto Kirigaya)", "Asuna Yuuki", "Yui", "Klein"]
    },
    {
        id: "my-dress-up-darling",
        title: "My Dress-Up Darling",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 8.0,
        episodes: "12",
        studio: "CloverWorks",
        status: "Finalizado",
        releaseDate: "Enero 2022",
        image: "https://m.media-amazon.com/images/M/MV5BYmJhYjgzYTQtMzMxYi00NTkyLWI2MWItNTgxNjk1NzU0YmQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Wakana Gojo es un estudiante de secundaria solitario que sueña con convertirse en un artesano de muñecas tradicionales Hina. Debido a un trauma de la infancia, mantiene su pasión en secreto. Un día, la popular y hermosa Marin Kitagawa lo descubre cosiendo en el aula de costura. Marin, quien ama el cosplay pero carece de habilidad para la costura, le pide a Wakana que diseñe y confeccione sus trajes.",
        characters: ["Marin Kitagawa", "Wakana Gojo", "Sajuna Inui", "Shinju Inui"]
    },
    {
        id: "classroom-of-the-elite",
        title: "Classroom of the Elite",
        genres: ["Escolar", "Drama", "Aventura"],
        rating: 7.7,
        episodes: "38",
        studio: "Lerche",
        status: "En Emisión",
        releaseDate: "Julio 2017",
        image: "https://m.media-amazon.com/images/M/MV5BY2U2NWU5MzMtOGY5Ni00MGI5LWFkZDYtMGNlN2RhMGRhNGZkXkEyXkFqcGc@._V1_.jpg",
        synopsis: "La Preparatoria Metropolitana de Educación Avanzada de Tokio es una escuela de élite establecida por el gobierno donde casi el 100% de los graduados van a la universidad o encuentran empleo. Los estudiantes gozan de gran libertad y puntos mensuales equivalentes a dinero. Kiyotaka Ayanokoji es asignado a la Clase D, reservada para los estudiantes con peor desempeño, donde descubre la cruda realidad competitiva.",
        characters: ["Kiyotaka Ayanokoji", "Suzune Horikita", "Kikyou Kushida", "Kei Karuizawa"]
    },
    {
        id: "vinland-saga",
        title: "Vinland Saga",
        genres: ["Aventura", "Acción", "Drama"],
        rating: 8.8,
        episodes: "48",
        studio: "Wit Studio / MAPPA",
        status: "Finalizado",
        releaseDate: "Julio 2019",
        image: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Thorfinn es el hijo de uno de los guerreros vikingos más grandes de la historia, Thors. Tras presenciar el cobarde asesinato de su padre a manos del mercenario Askeladd, Thorfinn se une a su banda para vengar su muerte batiéndose en duelos justos con él. Sin embargo, su sudor de venganza lo arrastra a una sangrienta e implacable guerra por el trono de Inglaterra en el siglo XI.",
        characters: ["Thorfinn", "Askeladd", "Canute", "Thors"]
    },
    {
        id: "one-punch-man",
        title: "One Punch Man",
        genres: ["Acción", "Drama", "Aventura"],
        rating: 8.7,
        episodes: "24",
        studio: "Madhouse / J.C.Staff",
        status: "Finalizado",
        releaseDate: "Octubre 2015",
        image: "https://m.media-amazon.com/images/M/MV5BNzMwOGQ5MWItNzE3My00ZDYyLTk4NzAtZWIyYWI0NTZhYzY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Saitama es un héroe por diversión que entrenó tan duro que perdió el cabello y obtuvo una fuerza inconmensurable, siendo capaz de derrotar a cualquier enemigo de un solo golpe. Paradójicamente, esta increíble fuerza lo ha dejado sumido en el aburrimiento y la insatisfacción existencial al no encontrar rivales dignos. Su vida da un giro al unirse a la Asociación de Héroes junto al ciborg Genos.",
        characters: ["Saitama", "Genos", "Tatsumaki", "Silver Fang"]
    },
    {
        id: "mob-psycho-100",
        title: "Mob Psycho 100",
        genres: ["Acción", "Escolar", "Drama"],
        rating: 8.7,
        episodes: "37",
        studio: "Bones",
        status: "Finalizado",
        releaseDate: "Julio 2016",
        image: "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Shigeo Kageyama, apodado 'Mob', es un estudiante de secundaria aparentemente normal pero con habilidades psíquicas devastadoras. Para evitar perder el control de sus emociones y desatar su poder latente, Mob vive una vida emocionalmente reprimida. Bajo la tutela del carismático charlatán y exorcista Reigen Arataka, Mob aprende a usar sus poderes y a lidiar con las amenazas sobrenaturales.",
        characters: ["Shigeo Kageyama", "Reigen Arataka", "Ritsu Kageyama", "Dimple"]
    },
    {
        id: "monster",
        title: "Monster",
        genres: ["Drama", "Terror", "Aventura"],
        rating: 8.7,
        episodes: "74",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Abril 2004",
        image: "https://m.media-amazon.com/images/M/MV5BYzU2MWQ5NGQtYmNlMC00ZjJkLWJmODItZDM5MDM3YmUyMWJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Kenzou Tenma es un cirujano cerebral japonés de gran talento que trabaja en Düsseldorf, Alemania. Un día decide desobedecer las órdenes de sus superiores para operar a un niño herido de bala en la cabeza, Johan Liebert, salvándole la vida. Años después, Tenma descubre con horror que aquel niño sobreviviente se ha convertido en un frío asesino psicópata y manipulador que aterroriza a Europa.",
        characters: ["Kenzou Tenma", "Johan Liebert", "Nina Fortner", "Heinrich Lunge"]
    },
    {
        id: "erased",
        title: "Erased",
        genres: ["Drama", "Escolar", "Aventura"],
        rating: 8.3,
        episodes: "12",
        studio: "A-1 Pictures",
        status: "Finalizado",
        releaseDate: "Enero 2016",
        image: "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Satoru Fujinuma es un joven mangaka frustrado que posee una habilidad involuntaria llamada 'Revival', que lo transporta minutos atrás en el tiempo justo antes de que ocurra un accidente trágico. Tras sufrir una tragedia personal, Satoru es enviado repentinamente 18 años atrás en el tiempo, a 1988, teniendo la oportunidad de salvar a su madre y resolver una serie de secuestros infantiles de su infancia.",
        characters: ["Satoru Fujinuma", "Kayo Hinazuki", "Sachiko Fujinuma", "Kenya Kobayashi"]
    },
    {
        id: "parasyte",
        title: "Parasyte -the maxim-",
        genres: ["Terror", "Acción", "Drama"],
        rating: 8.4,
        episodes: "24",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Octubre 2014",
        image: "https://m.media-amazon.com/images/M/MV5BMzg2YjA0NGYtYjQwMS00MDQyLWFlNWMtODVhNTBkYWIyNjE1XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Una noche, extrañas larvas alienígenas llamadas Parásitos caen en la Tierra con el objetivo de entrar al cerebro de los seres humanos y tomar el control total de sus cuerpos. Shinichi Izumi, un estudiante de secundaria normal, es atacado por uno, pero logra evitar que llegue a su cerebro, atrapándolo en su mano derecha. Shinichi y el parásito Migi formarán una simbiosis única para sobrevivir.",
        characters: ["Shinichi Izumi", "Migi", "Satomi Murano", "Kana Kimishima"]
    },
    {
        id: "promised-neverland",
        title: "The Promised Neverland",
        genres: ["Terror", "Fantasía", "Drama"],
        rating: 8.3,
        episodes: "23",
        studio: "CloverWorks",
        status: "Finalizado",
        releaseDate: "Enero 2019",
        image: "https://m.media-amazon.com/images/M/MV5BMGQ4ZGJhZTUtZDQ5Mi00NTI1LWEyYjItMzIxM2VlNmY4MDEyXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Emma, Norman y Ray son tres de los huérfanos más inteligentes del idílico orfanato Grace Field House. Viven felices bajo los cuidados de su cariñosa cuidadora, Isabella, a quien llaman 'Mamá'. Todo cambia cuando Emma y Norman descubren por accidente la espeluznante verdad: el orfanato es en realidad una granja de cría de niños destinados a ser devorados por monstruosos demonios.",
        characters: ["Emma", "Norman", "Ray", "Isabella"]
    },
    {
        id: "your-lie-in-april",
        title: "Your Lie in April",
        genres: ["Drama", "Romance", "Escolar"],
        rating: 8.4,
        episodes: "22",
        studio: "A-1 Pictures",
        status: "Finalizado",
        releaseDate: "Octubre 2014",
        image: "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Kousei Arima es un niño prodigio del piano que pierde su capacidad de escuchar el sonido de su propio piano tras la trágica muerte de su estricta madre. Dos años después, Kousei vive una vida monótona hasta que conoce a Kaori Miyazono, una violinista enérgica y de estilo libre. Kaori ayuda a Kousei a regresar al mundo de la música, mostrándole que esta puede ser colorida y libre.",
        characters: ["Kousei Arima", "Kaori Miyazono", "Tsubaki Sawabe", "Ryouta Watari"]
    },
    {
        id: "cyberpunk-edgerunners",
        title: "Cyberpunk: Edgerunners",
        genres: ["Acción", "Drama", "Aventura"],
        rating: 8.6,
        episodes: "10",
        studio: "Trigger",
        status: "Finalizado",
        releaseDate: "Septiembre 2022",
        image: "https://m.media-amazon.com/images/M/MV5BM2JkMzM2ZmYtNWU4MS00MjZhLWFhZWUtYWFjYTJkN2RhZDliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "En Night City, una metrópolis futurista obsesionada con la tecnología y la modificación corporal, David Martinez es un joven brillante pero de bajos recursos que pierde a su madre en un tiroteo. Lleno de rencor y sin nada que perder, David se implanta un chip cibernético militar experimental que le otorga supervelocidad, convirtiéndose en un mercenario ilegal conocido como Edgerunner.",
        characters: ["David Martinez", "Lucy", "Rebecca", "Maine"]
    },
    {
        id: "evangelion",
        title: "Neon Genesis Evangelion",
        genres: ["Acción", "Drama", "Terror"],
        rating: 8.5,
        episodes: "26 + Películas",
        studio: "Gainax",
        status: "Finalizado",
        releaseDate: "Octubre 1995",
        image: "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Quince años después de una catástrofe global conocida como el Segundo Impacto, la humanidad es atacada por misteriosas criaturas gigantescas llamadas Ángeles. La organización especial NERV desarrolla mechas biológicos llamados Evangelion (EVA) para combatirlos. Shinji Ikari, un tímido joven de 14 años, es convocado por su frío padre para pilotar la unidad EVA-01 en una batalla psicológica y existencial.",
        characters: ["Shinji Ikari", "Rei Ayanami", "Asuka Langley Soryu", "Misato Katsuragi"]
    },
    {
        id: "code-geass",
        title: "Code Geass",
        genres: ["Acción", "Drama", "Fantasía"],
        rating: 8.9,
        episodes: "50",
        studio: "Sunrise",
        status: "Finalizado",
        releaseDate: "Octubre 2006",
        image: "https://m.media-amazon.com/images/M/MV5BNTk4MWYwNmUtODFjNC00NWJhLWExNGYtMGU4YmRlNzEwOTY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "El Sacro Imperio de Britannia ha conquistado Japón, renombrándolo como el Área 11. Lelouch Lamperouge, un príncipe exiliado de Britannia que vive en Japón, se ve envuelto en un conflicto rebelde y obtiene el 'Geass', un poder que le permite dar una orden absoluta a cualquiera que lo mire a los ojos. Bajo la máscara de Zero, Lelouch lidera una rebelión para destruir a Britannia.",
        characters: ["Lelouch vi Britannia", "Suzaku Kururugi", "C.C.", "Kallen Stadtfeld"]
    },
    {
        id: "bleach",
        title: "Bleach",
        genres: ["Acción", "Fantasía", "Aventura"],
        rating: 8.1,
        episodes: "366 + Secuela",
        studio: "Pierrot",
        status: "En Emisión",
        releaseDate: "Octubre 2004",
        image: "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Ichigo Kurosaki es un estudiante de secundaria de 15 años que tiene la habilidad de ver fantasmas. Su vida cambia cuando se topa con Rukia Kuchiki, una Shinigami (dios de la muerte) que combate a los espíritus malignos llamados Hollows. Cuando Rukia resulta gravemente herida, se ve obligada a transferir sus poderes a Ichigo, convirtiéndolo en un Shinigami encargado de proteger a los vivos.",
        characters: ["Ichigo Kurosaki", "Rukia Kuchiki", "Yasutora Sado", "Orihime Inoue"]
    },
    {
        id: "naruto",
        title: "Naruto Shippuden",
        genres: ["Acción", "Aventura", "Fantasía"],
        rating: 8.3,
        episodes: "500",
        studio: "Pierrot",
        status: "Finalizado",
        releaseDate: "Febrero 2007",
        image: "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_.jpg",
        synopsis: "Naruto Uzumaki es un joven ninja marginado en su aldea debido a que lleva en su interior al Zorro de Nueve Colas, un demonio que casi destruye la aldea años atrás. A pesar de los prejuicios, Naruto entrena arduamente y se embarca en un viaje de superación personal con el firme propósito de convertirse en Hokage, el líder ninja más fuerte de la Aldea Oculta de la Hoja.",
        characters: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"]
    },
    {
        id: "fruits-basket",
        title: "Fruits Basket",
        genres: ["Romance", "Drama", "Fantasía"],
        rating: 8.6,
        episodes: "63",
        studio: "TMS Entertainment",
        status: "Finalizado",
        releaseDate: "Abril 2019",
        image: "https://es.web.img3.acsta.net/pictures/19/08/01/15/58/3865147.jpg",
        synopsis: "Tohru Honda es una huérfana de buen corazón que termina viviendo en una tienda de campaña tras una serie de desgracias familiares. Al ser descubierta por los dueños de los terrenos, la familia Soma, es invitada a vivir en su casa. Pronto descubre el secreto de los Soma: están malditos por el Zodiaco Chino, transformándose en animales cada vez que son abrazados por el sexo opuesto.",
        characters: ["Tohru Honda", "Kyo Soma", "Yuki Soma", "Shigure Soma"]
    },
    {
        id: "hyouka",
        title: "Hyouka",
        genres: ["Escolar", "Drama", "Aventura"],
        rating: 7.8,
        episodes: "22",
        studio: "Kyoto Animation",
        status: "Finalizado",
        releaseDate: "Abril 2012",
        image: "https://m.media-amazon.com/images/M/MV5BMjMyM2M2MTctY2EwNi00Y2RkLWI0M2EtM2M3MDkxYzM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Houtarou Oreki es un estudiante de secundaria apático que prefiere conservar energía sobre todas las cosas. A petición de su hermana mayor, se une al Club de Literatura Clásica para evitar que sea disuelto. Allí conoce a Eru Chitanda, una chica enérgica y extremadamente curiosa. Junto a sus amigos Satoshi e Mayaka, Oreki resolverá diversos e intrigantes misterios escolares de la vida cotidiana.",
        characters: ["Houtarou Oreki", "Eru Chitanda", "Satoshi Fukube", "Mayaka Ibara"]
    },
    {
        id: "slam-dunk",
        title: "Slam Dunk",
        genres: ["Deportes", "Escolar", "Drama"],
        rating: 8.5,
        episodes: "101",
        studio: "Toei Animation",
        status: "Finalizado",
        releaseDate: "Octubre 1993",
        image: "https://m.media-amazon.com/images/M/MV5BNjIyYjg4YWUtNTM2OS00YTc3LWE5NTEtZTdmMDdiMzE1OGJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Hanamichi Sakuragi es un delincuente juvenil pelirrojo famoso por ser rechazado por 50 chicas. Al entrar a la preparatoria Shohoku, conoce a Haruko Akagi, quien le pregunta si le gusta el baloncesto. Para impresionarla, Hanamichi se une al equipo a pesar de ser un completo novato, descubriendo poco a poco una verdadera pasión competitiva por este deporte.",
        characters: ["Hanamichi Sakuragi", "Kaede Rukawa", "Takenori Akagi", "Ryota Miyagi"]
    },
    {
        id: "hajime-no-ippo",
        title: "Hajime no Ippo",
        genres: ["Deportes", "Acción", "Drama"],
        rating: 8.8,
        episodes: "76 + Secuelas",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Octubre 2000",
        image: "https://m.media-amazon.com/images/M/MV5BOWE2OTJkNzAtZWU1NC00YmQyLTk5ZWMtNzQ4MjQyZTI5YjhlXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Ippo Makunouchi es un estudiante de secundaria tímido que ayuda a su madre en su negocio de pesca. Debido a su timidez, es objeto constante de acoso por parte de pandilleros. Un día es salvado por el boxeador profesional Mamoru Takamura, quien lo lleva al gimnasio Kamogawa para curarle las heridas. Impresionado por la fuerza de Takamura, Ippo decide entrenar boxeo para descubrir qué se siente ser fuerte.",
        characters: ["Ippo Makunouchi", "Mamoru Takamura", "Genji Kamogawa", "Ichiro Miyata"]
    },
    {
        id: "highschool-dead",
        title: "Highschool of the Dead",
        genres: ["Terror", "Acción", "Escolar"],
        rating: 7.2,
        episodes: "12",
        studio: "Madhouse",
        status: "Finalizado",
        releaseDate: "Julio 2010",
        image: "https://m.media-amazon.com/images/M/MV5BYjcyNTUwYmQtZjFmZC00YTZmLWJkYzEtMGU4NTlkMjVjZTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Un brote letal repentino azota al planeta, convirtiendo a los humanos en zombies violentos en cuestión de horas. Takashi Komuro, un estudiante de preparatoria, presencia cómo los zombies atacan su escuela. Junto a un pequeño grupo de estudiantes supervivientes y la enfermera escolar, Takashi luchará por escapar de la escuela y encontrar a sus seres queridos en un Japón sumido en la anarquía.",
        characters: ["Takashi Komuro", "Rei Miyamoto", "Saeko Busujima", "Saya Takagi"]
    },
    {
        id: "hellsing",
        title: "Hellsing Ultimate",
        genres: ["Terror", "Acción", "Fantasía"],
        rating: 8.3,
        episodes: "10 OVAs",
        studio: "Satelight / Madhouse",
        status: "Finalizado",
        releaseDate: "Febrero 2006",
        image: "https://m.media-amazon.com/images/M/MV5BZTA2OWJiYzgtZWFiOS00ZmYyLWFiMjMtYzg5YjNlMTA5NGJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "La Organización Hellsing de Inglaterra se encarga de proteger en secreto a la reina y al país de las amenazas sobrenaturales y los vampiros. Liderada por Sir Integra Hellsing, la organización cuenta con su arma definitiva: Alucard, un antiquísimo y devastador vampiro sirviente que caza a su propia especie con pistolas gigantescas y poderes demoníacos.",
        characters: ["Alucard", "Integra Hellsing", "Seras Victoria", "Alexander Anderson"]
    },
    {
        id: "solo-leveling",
        title: "Solo Leveling",
        genres: ["Acción", "Fantasía", "Aventura"],
        rating: 8.4,
        episodes: "12",
        studio: "A-1 Pictures",
        status: "En Emisión",
        releaseDate: "Enero 2024",
        image: "https://m.media-amazon.com/images/M/MV5BM2M4YzdkMTEtMjUyYy00ZWY0LWI5ODQtNGRkZWQ1MzU5MWM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "En un mundo donde misteriosas 'Puertas' conectan nuestro mundo con mazmorras llenas de monstruos, ciertos humanos han despertado superpoderes para combatirlos, conocidos como Cazadores. Sung Jinwoo es conocido como el cazador más débil de toda la humanidad. Tras sobrevivir a duras penas a una mazmorra doble oculta mortal, Jinwoo despierta en el hospital con un misterioso panel de misiones flotante.",
        characters: ["Sung Jinwoo", "Cha Haein", "Yoo Jinho", "Sung Ilhwan"]
    },
    {
        id: "spy-family",
        title: "Spy x Family",
        genres: ["Acción", "Escolar", "Aventura"],
        rating: 8.5,
        episodes: "37",
        studio: "CloverWorks / Wit Studio",
        status: "En Emisión",
        releaseDate: "Abril 2022",
        image: "https://m.media-amazon.com/images/I/81eVcxUwfRL._UF1000,1000_QL80_.jpg",
        synopsis: "El agente secreto Twilight, el espía número uno de Westalis, debe infiltrarse en un prestigioso colegio de la nación rival para acercarse a un político extremista. Para lograrlo, adopta la identidad del psiquiatra Loid Forger y forma una familia falsa adoptando a Anya, una niña huérfana con poderes telepáticos, y casándose con Yor Briar, una atenta oficinista que en realidad es una asesina profesional.",
        characters: ["Loid Forger", "Yor Forger", "Anya Forger", "Bond"]
    },
    {
        id: "oregairu",
        title: "Oregairu",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 8.0,
        episodes: "38",
        studio: "Brain's Base / Feel",
        status: "Finalizado",
        releaseDate: "Abril 2013",
        image: "https://m.media-amazon.com/images/M/MV5BNDE5NmZhN2ItNzU4YS00YTRlLWJlODYtMGQ1ZTQ2NTMxOTg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Hachiman Hikigaya es un estudiante cínico, pesimista y solitario que se niega a hacer amigos y tiene una visión distorsionada de las relaciones juveniles. Su profesora de orientación lo obliga a unirse al Club de Servicio Voluntario, liderado por Yukino Yukinoshita, la chica más inteligente y hermosa de la escuela, para resolver problemas de otros estudiantes y corregir su actitud social.",
        characters: ["Hachiman Hikigaya", "Yukino Yukinoshita", "Yui Yuigahama", "Iroha Isshiki"]
    },
    {
        id: "dr-stone",
        title: "Dr. Stone",
        genres: ["Aventura", "Fantasía", "Drama"],
        rating: 8.2,
        episodes: "57",
        studio: "TMS Entertainment",
        status: "En Emisión",
        releaseDate: "Julio 2019",
        image: "https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Un misterioso destello de luz verde convierte a toda la población humana en piedra de forma instantánea. 3700 años después, el joven genio de la ciencia Senku Ishigami despierta en un mundo donde la naturaleza ha reclamado el planeta. Decidido a reconstruir la civilización desde cero mediante el poder de la ciencia, Senku crea una fórmula para despetrificar a las personas.",
        characters: ["Senku Ishigami", "Taiju Oki", "Yuzuriha Ogawa", "Kohaku"]
    },
    {
        id: "yuri-on-ice",
        title: "Yuri!!! on Ice",
        genres: ["Deportes", "Drama", "Romance"],
        rating: 7.9,
        episodes: "12",
        studio: "MAPPA",
        status: "Finalizado",
        releaseDate: "Octubre 2016",
        image: "https://a.storyblok.com/f/178900/640x900/faa417e5b9/8be7d43910d0fb80e45fd06282b6fd541493470340_full.jpg/m/640x900",
        synopsis: "Yuuri Katsuki, una de las promesas del patinaje artístico japonés, sufre una aplastante derrota en la final del Gran Premio. Deprimido, regresa a su hogar en Kyushu con dudas sobre continuar. Su ídolo, el cinco veces campeón mundial ruso Viktor Nikiforov, ve un video de Yuuri imitando su rutina y decide viajar a Japón para convertirse en su entrenador personal.",
        characters: ["Yuuri Katsuki", "Viktor Nikiforov", "Yuri Plisetsky", "Phichit Chulanont"]
    },
    {
        id: "free",
        title: "Free! - Iwatobi Swim Club",
        genres: ["Deportes", "Escolar", "Drama"],
        rating: 7.4,
        episodes: "37",
        studio: "Kyoto Animation",
        status: "Finalizado",
        releaseDate: "Julio 2013",
        image: "https://m.media-amazon.com/images/M/MV5BZTkwMDBmYjItMWM1OS00MjBmLThjM2YtMWVkMGI0YjFhMDFmXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Haruka Nanase es un chico apasionado por el agua al que le encanta nadar estilo libre. En la primaria compitió y ganó un relevo junto a sus amigos Rin, Makoto e Nagisa. Años después, Nagisa y Makoto convencen a Haruka de fundar el Club de Natación de la Preparatoria Iwatobi, enfrentándose de nuevo a Rin, quien ha cambiado de actitud tras estudiar natación en Australia.",
        characters: ["Haruka Nanase", "Makoto Tachibana", "Nagisa Hazuki", "Rin Matsuoka"]
    },
    {
        id: "elfen-lied",
        title: "Elfen Lied",
        genres: ["Terror", "Drama", "Fantasía"],
        rating: 7.5,
        episodes: "13",
        studio: "Arms",
        status: "Finalizado",
        releaseDate: "Julio 2004",
        image: "https://es.web.img3.acsta.net/c_310_420/pictures/21/11/24/08/29/4692226.jpg",
        synopsis: "Los Diclonius son mutantes humanos con cuernos e invisibles brazos telepáticos llamados 'vectores' de gran fuerza destructiva. Lucy, una peligrosa Diclonius, escapa de una isla de investigación asesinando a los guardias, pero recibe un disparo en la cabeza que le genera una doble personalidad dócil e infantil llamada Nyuu. Es encontrada y acogida por dos primos inocentes.",
        characters: ["Lucy / Nyuu", "Kouta", "Yuka", "Nana"]
    },
    {
        id: "shiki",
        title: "Shiki",
        genres: ["Terror", "Drama", "Fantasía"],
        rating: 7.7,
        episodes: "22",
        studio: "Daume",
        status: "Finalizado",
        releaseDate: "Julio 2010",
        image: "https://m.media-amazon.com/images/M/MV5BODM1OGEzZDMtNTkyMy00YWFiLTg2YTEtNzA4ODdmNTA3NTBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Sotoba es una pequeña villa aislada de Japón donde la vida transcurre pacíficamente. Sin embargo, tras la llegada de la misteriosa familia Kirishiki a una gran mansión de estilo europeo en las colinas, comienzan a ocurrir numerosas muertes repentinas e inexplicables entre los habitantes. El médico local Toshio Ozaki sospecha que se trata de una epidemia, pero pronto descubre una aterradora causa vampírica.",
        characters: ["Toshio Ozaki", "Natsuno Yuuki", "Megumi Shimizu", "Sunako Kirishiki"]
    },
    {
        id: "your-name",
        title: "Your Name",
        genres: ["Romance", "Drama", "Fantasía"],
        rating: 8.9,
        episodes: "Película (106 min)",
        studio: "CoMix Wave Films",
        status: "Finalizado",
        releaseDate: "Agosto 2016",
        image: "https://m.media-amazon.com/images/M/MV5BZmUyYWRiODktOGYxMC00MWY3LThhNDUtZTViZDVkYTYwYmJhXkEyXkFqcGc@._V1_.jpg",
        synopsis: "Mitsuha Miyamizu es una chica de preparatoria aburrida de la vida rural en un pueblo de montaña. Taki Tachibana es un chico de preparatoria de Tokio interesado en el arte y la arquitectura. Un día despiertan descubriendo que han intercambiado cuerpos aleatoriamente. Para comunicarse, se dejan notas e intentan resolver el misterio detrás de este fenómeno mientras un cometa se acerca a la Tierra.",
        characters: ["Taki Tachibana", "Mitsuha Miyamizu", "Miki Okudera", "Yotsuha Miyamizu"]
    },
    {
        id: "kimi-ni-todoke",
        title: "Kimi ni Todoke",
        genres: ["Romance", "Escolar", "Drama"],
        rating: 7.9,
        episodes: "38",
        studio: "Production I.G",
        status: "En Emisión",
        releaseDate: "Octubre 2009",
        image: "https://m.media-amazon.com/images/M/MV5BMDliNGUxNTEtOTE1Zi00M2U3LWE0ODktNWQxMDRhMDZiNDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        synopsis: "Sawako Kuronuma es una chica de preparatoria dulce pero marginada y temida por sus compañeros debido a su parecido físico con la niña de la película 'El Aro', apodándola 'Sadako'. Su vida empieza a cambiar cuando Shouta Kazehaya, el chico más popular, alegre y amable de la clase, comienza a hablarle sin prejuicios, inspirándola a hacer nuevos amigos y abriéndole las puertas del amor.",
        characters: ["Sawako Kuronuma", "Shouta Kazehaya", "Ayane Yano", "Chizuru Yoshida"]
    },
    {
        id: "dragon-ball",
        title: "Dragon Ball (Saga Completa)",
        genres: ["Acción", "Aventura", "Fantasía"],
        rating: 8.9,
        episodes: "508 (DB/DBZ/DBGT)",
        studio: "Toei Animation",
        status: "Finalizado",
        releaseDate: "Febrero 1986",
        image: "https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png",
        synopsis: "Son Goku es un niño con cola de mono que vive solo en las montañas tras la muerte de su abuelo. Todo cambia cuando conoce a Bulma, una joven genio que busca las legendarias Esferas del Dragón, siete esferas mágicas que al reunirse invocan al dragón Shenlong para conceder cualquier deseo. Goku se une a ella en su aventura, entrenando en artes marciales y enfrentándose a poderosos villanos para proteger el universo.",
        characters: ["Goku", "Vegeta", "Bulma", "Krillin", "Piccolo", "Gohan"]
    }
];

// Datos de Personajes Destacados para el Carrusel
const characterData = [
    { name: "Tanjiro Kamado", anime: "Demon Slayer", image: "https://espadasymas.com/cdn/shop/collections/c7427b133752a62bf5c74fd8b5be8437f4d8dfddr1-564-564v2_hq.jpg?v=1779247814" },
    { name: "Satoru Gojo", anime: "Jujutsu Kaisen", image: "https://i.pinimg.com/736x/98/fa/6e/98fa6ece5f6a9b34b4190989f9c408db.jpg" },
    { name: "Eren Yeager", anime: "Attack on Titan", image: "https://wallpapers.com/images/featured/eren-yeager-pfp-p4ff16eninzqrgui.jpg" },
    { name: "Goku", anime: "Dragon Ball", image: "https://media.gq.com.mx/photos/5f6ce732bc946e88f6c96320/16:9/w_2560%2Cc_limit/goky%2520ultra%2520instinto.jpg" },
    { name: "Monkey D. Luffy", anime: "One Piece", image: "https://f.rpp-noticias.io/2018/11/26/551055_716795.jpg?width=1020&quality=80" }
];

// Estado de la Aplicación
let currentFilter = 'all';
let searchQuery = '';

// Elementos del DOM
const animeGrid = document.getElementById('animeGrid');
const characterCarousel = document.getElementById('characterCarousel');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.getElementById('filterTabs');
const themeToggle = document.getElementById('themeToggle');
const animeModal = document.getElementById('animeModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Forzar el scroll al inicio de la página al recargar
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Asegurar que el campo de búsqueda se limpie al recargar
    if (searchInput) {
        searchInput.value = '';
    }
    searchQuery = '';
    currentFilter = 'all';

    initTheme();
    renderAnimeGrid();
    renderCharacterCarousel();
    setupEventListeners();
});

// Configuración del Tema Oscuro/Claro
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// Renderizar Grilla de Animes
function renderAnimeGrid() {
    // Filtrar los datos
    const filteredAnime = animeData.filter(anime => {
        const matchesCategory = currentFilter === 'all' || anime.genres.includes(currentFilter);
        const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              anime.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
                              anime.studio.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Limpiar grilla
    animeGrid.innerHTML = '';

    if (filteredAnime.length === 0) {
        animeGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 0; color: var(--text-secondary);">
                <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: var(--accent-color);"></i>
                <p>No se encontraron animes que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    // Insertar tarjetas
    filteredAnime.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${anime.image}" alt="${anime.title}" loading="lazy">
                <div class="card-overlay">
                    <span class="card-rating">
                        <i class="fa-solid fa-star"></i> ${anime.rating.toFixed(1)}
                    </span>
                </div>
            </div>
            <div class="card-info">
                <div>
                    <h3 class="anime-title">${anime.title}</h3>
                    <div class="anime-tags">
                        ${anime.genres.map(genre => `<span class="tag">${genre}</span>`).join('')}
                    </div>
                </div>
                <div class="card-footer">
                    <span><i class="fa-solid fa-film"></i> ${anime.studio}</span>
                    <span><i class="fa-solid fa-play"></i> ${anime.episodes} eps</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(anime));
        animeGrid.appendChild(card);
    });
}

// Renderizar Carrusel de Personajes
function renderCharacterCarousel() {
    characterCarousel.innerHTML = '';
    characterData.forEach(char => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <div class="char-img-wrapper">
                <img src="${char.image}" alt="${char.name}" loading="lazy">
            </div>
            <div class="char-info">
                <h4 class="char-name">${char.name}</h4>
                <p class="char-anime">${char.anime}</p>
            </div>
        `;
        characterCarousel.appendChild(card);
    });
}

// Control del Modal
function openModal(anime) {
    const modalImg = document.getElementById('modalImg');
    const modalRating = document.getElementById('modalRating').querySelector('span');
    const modalTitle = document.getElementById('modalTitle');
    const modalMetadata = document.getElementById('modalMetadata');
    const modalSynopsis = document.getElementById('modalSynopsis');
    const modalGenres = document.getElementById('modalGenres');
    const modalStudio = document.getElementById('modalStudio');
    const modalStatus = document.getElementById('modalStatus');
    const modalDate = document.getElementById('modalDate');
    const modalCharacterTags = document.getElementById('modalCharacterTags');

    // Asignar valores
    modalImg.src = anime.image;
    modalImg.alt = anime.title;
    modalRating.textContent = anime.rating.toFixed(1);
    modalTitle.textContent = anime.title;
    modalSynopsis.textContent = anime.synopsis;
    modalGenres.textContent = anime.genres.join(', ');
    modalStudio.textContent = anime.studio;
    modalStatus.textContent = anime.status;
    modalDate.textContent = anime.releaseDate;

    // Metadatos cortos (Estreno, Episodios, Estudio)
    modalMetadata.innerHTML = `
        <span><i class="fa-solid fa-calendar"></i> ${anime.releaseDate.split(' ')[1] || anime.releaseDate}</span>
        <span><i class="fa-solid fa-circle"></i></span>
        <span><i class="fa-solid fa-play"></i> ${anime.episodes} Episodios</span>
        <span><i class="fa-solid fa-circle"></i></span>
        <span><i class="fa-solid fa-clapperboard"></i> ${anime.studio}</span>
    `;

    // Personajes
    modalCharacterTags.innerHTML = anime.characters.map(char => `<span class="char-tag">${char}</span>`).join('');

    // Mostrar
    animeModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}

function closeModal() {
    animeModal.classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll
}

// Configurar Event Listeners
function setupEventListeners() {
    // Clic en el logo para reiniciar y recargar la página al estado inicial
    const logoLink = document.querySelector('.logo');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.reload();
        });
    }

    // Buscador
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAnimeGrid();
    });

    // Pestañas de Filtros
    filterTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remover activo previo
            filterTabs.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Añadir activo actual
            e.target.classList.add('active');
            // Cambiar filtro
            currentFilter = e.target.getAttribute('data-category');
            renderAnimeGrid();
        }
    });

    // Botón de Alternar Tema
    themeToggle.addEventListener('click', toggleTheme);

    // Cerrar Modal
    modalCloseBtn.addEventListener('click', closeModal);
    animeModal.addEventListener('click', (e) => {
        if (e.target === animeModal) {
            closeModal();
        }
    });

    // Escapar para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && animeModal.classList.contains('active')) {
            closeModal();
        }
    });
}
