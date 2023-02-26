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
        img: 'Divergent.jpg'
    },
    {
        id: 3,
        titulo: 'Four',
        autor: 'Veronica Roth',
        descripcion: 'Llega el esperado spin-off de la trilogía de "Divergente", contado desde el punto de vista de Cuatro, con cuatro historias distintas (La transferencia, El iniciado, El hijo, El traidor y tres escenas adicionales), que darán a los lectores de la serie superventas "Divergente", la mirada del popular Tobias sobre distintos momentos únicos en la épica trilogía. Cuatro historias cortas y tres escenas inéditas que te revelarán lo que nunca llegaste a saber del mundo de Divergente.',
        precio: '8.500',
        img: 'Four.jpg'
    },
    {
        id: 4,
        titulo: 'Heartless',
        autor: 'Marissa Meyer',
        descripcion: 'Mucho antes de convertirse en el terror del Pais de las Maravillas, la Reina de Corazones era una chica que tan solo queria enamorarse. Catherine es una de las jovenes mas deseadas de Corazones. Es la favorita del Rey, pero ella quiere vivir bajo sus propias reglas y tomar las riendas de su vida. Pero, ¿a que precio?. Meyer combino elementos de la oscuridad y de la luz, del destino y del libre albedrio, del amor y del odio, en una historia inolvidable sobre como la Reina de Corazones dejo de ser una joven que soñaba con el verdadero amor y la libertad y se convirtio en una cruel mujer a la que todos recuerdan por su frase "Que le corten la cabeza".',
        precio: '5.599',
        img: 'Heartless.jpg'
    }
]

const controlador = {
    index: (req, res) => {
        res.render('index', { productos: productosMasVendidos });
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
        res.render("productDetail", { libro: libro });
    },
}

module.exports = controlador;