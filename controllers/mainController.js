const productosMasVendidos = [
    {
        id: 1,
        titulo: 'They both die at the end',
        autor: 'Adam Silvera',
        descripcion: '¿Puede un solo día albergar toda una vida? En un presente alternativo, en el que es posible predecir la muerte con un plazo de veinticuatro horas, Mateo Torrez y Rufus Emeterio acaban de recibir la llamada más temida: la misma que te avisa de que ha llegado tu hora final.',
        precio: '6.770',
        img: 'They-Both-Die-At-The-End.jpg'
    },
    {
        id: 2,
        titulo: 'Divergent',
        autor: 'Veronica Roth',
        descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '6.500',
        img: 'Divergent.jpg'
    },
    {
        id: 3,
        titulo: 'Four',
        autor: 'Veronica Roth',
        descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '8.500',
        img: 'Four.jpg'
    },
    {
        id: 4,
        titulo: 'Heartless',
        autor: 'Marissa Meyer',
        descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '9.500',
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


    productDetail: (req,res) => {
        res.render('productDetail')
    },
    
    // productDetail: (req, res) => {
    //     let libro = productosMasVendidos.find(libro => libro.id == req.params.libroId);
    //     res.render("productDetail", { libro: libro });
    // },
}

module.exports = controlador;