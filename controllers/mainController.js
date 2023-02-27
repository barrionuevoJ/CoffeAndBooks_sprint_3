const productosMasVendidos = [
    {
        id: 1,
        titulo: 'They both die at the end',
        autor: 'Adam Silvera',
        descripcion: '¿Puede un solo día albergar toda una vida? En un presente alternativo, en el que es posible predecir la muerte con un plazo de veinticuatro horas, Mateo Torrez y Rufus Emeterio acaban de recibir la llamada más temida: la misma que te avisa de que ha llegado tu hora final.',
        precio: '13.239',
        img: 'They-Both-Die-At-The-End.jpg',
        genre: 'Novela Juvenil, romance, aventura'
    },
    {
        id: 2,
        titulo: 'Divergent',
        autor: 'Veronica Roth',
        descripcion: 'En el Chicago distópico de Beatrice, la sociedad está dividida en cinco facciones. En una ceremonia anual, todos los chicos de dieciséis años deben decidir a qué facción dedicarán el resto de sus vidas. Beatrice tiene que elegir entre quedarse con su familia... y ser quien realmente es. Así que toma una decisión que sorprenderá a todo el mundo, incluida ella...',
        precio: '4.800',
        img: 'Divergent.jpg',
        genre: 'Literatura Juvenil'
    },
    {
        id: 3,
        titulo: 'Four',
        autor: 'Veronica Roth',
        descripcion: 'Llega el esperado spin-off de la trilogía de "Divergente", contado desde el punto de vista de Cuatro, con cuatro historias distintas (La transferencia, El iniciado, El hijo, El traidor y tres escenas adicionales), que darán a los lectores de la serie superventas "Divergente", la mirada del popular Tobias sobre distintos momentos únicos en la épica trilogía. Cuatro historias cortas y tres escenas inéditas que te revelarán lo que nunca llegaste a saber del mundo de Divergente.',
        precio: '8.500',
        img: 'Four.jpg',
        genre: 'Literatura Juvenil'
    },
    {
        id: 4,
        titulo: 'Heartless',
        autor: 'Marissa Meyer',
        descripcion: 'Mucho antes de convertirse en el terror del Pais de las Maravillas, la Reina de Corazones era una chica que tan solo queria enamorarse. Catherine es una de las jovenes mas deseadas de Corazones. Es la favorita del Rey, pero ella quiere vivir bajo sus propias reglas y tomar las riendas de su vida. Pero, ¿a que precio?. Meyer combino elementos de la oscuridad y de la luz, del destino y del libre albedrio, del amor y del odio, en una historia inolvidable sobre como la Reina de Corazones dejo de ser una joven que soñaba con el verdadero amor y la libertad y se convirtio en una cruel mujer a la que todos recuerdan por su frase "Que le corten la cabeza".',
        precio: '5.599',
        img: 'Heartless.jpg',
        genre: 'Literatura y Ficción'
    }
]

    const ofertas = [
        {
            id: 5, 
            titulo: 'Mo Dao Zu Shi',
            autor: 'Mo Xiang Tong Xiu',
            descripcion: 'Después de revivir en el cuerpo de una persona llamada Mo Xuanyu, Wei Wuxian se reencuentra con un viejo conocido con el cual deberá resolver un misterio que probablemente está cubriendo algo mayor…',
            precio: '9.764',
            img: 'Mo-Dao-Zu-Shi-Third-Tome.jpg',
            genre: 'Wuxia, BL, adventure'
        },

        {
            id: 6,
            titulo: 'Tian Guan Ci Fu',
            autor: 'Mo Xiang Tong Xiu',
            descripcion: 'Su Alteza el Príncipe Heredero ha vuelto a ascender al cielo, pero esta vez no tiene ni a los seguidores ni a ningún incienso quemado a su nombre. Un día, en su camino a su hogar se encuentra con un jovén misterioso a quien le ofrece un lugar para dormir. Sin embargo, este misterioso jovén resulta ser nada más ni nada menos que el Rey Fantasma: Hua Cheng.',
            precio: '12.500',
            img: 'Tian-Guan-Ci-Fu-Forth-Tome.jpg',
            genre: 'Xianxia'
        },

        {
            id: 7,
            titulo: 'Batman Detective Comics',
            autor: 'DC',
            descripcion: 'Pensaron que la Liga de las Sombras era solo un rumor: una sociedad secreta de asesinos nihilistas, a menudo susurrados pero nunca vistos. Pero ahora la Liga está aquí, en Gotham. Están destruyendo al equipo de Batman, uno por uno. Y su siniestra líder, Lady Shiva, ha venido a reclamar a su hija… o a destruirla',
            precio: '4.550',
            img: 'Batam-Detective-Comics.jpg',
            genre: 'Comic'
        },

        {
            id: 8,
            titulo: 'Twisted Wonderland The Novel "Chapter one: Red Roses Tyrant"',
            autor: 'Toboso Yana (Ilustrations) & Jun Hioki',
            descripcion: 'Novela basada en el prologo y primer capitulo del Famoso juego Twisted Wonderland. Luego de despertar en un extraño mundo conocido como Twisted Wonderland, Kuroki Yuuya se encuentra envuelto en una peligrosa situación, sin forma de volver a su hogar y rodeado de personas que tienen la habilidad de usar magia, siendo el un humano común y corriente.',
            precio: '15.200',
            img: 'Twisted-Wonderland-The-Novel.jpg',
            genre: 'Novela juvenil'
        }

    ]

const controlador = {
    index: (req, res) => {
        res.render('index', { productos: productosMasVendidos, ofertas: ofertas });
    },

    login: (req, res) => {
        res.render('login');
    },

    register: (req, res) => {
        res.render('register');
    },

    productCart: (req, res) => {
        res.render('productCart');
    },
    
    productDetail: (req, res) => {
        let libro = productosMasVendidos.find(libro => libro.id == req.params.libroId);
        let libroOfertas = ofertas.find(libro => libro.id == req.params.libroId);
        res.render("productDetail", { libro: libro, libro: libroOfertas });
    },
}

module.exports = controlador;