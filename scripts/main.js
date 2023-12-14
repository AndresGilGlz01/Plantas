let json = [
    {
        Numero: 1,
        Nombre: 'Rosa',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores generalmente grandes y vistosas.',
        ImagenUrl: 'https://i.pinimg.com/originals/39/7f/3e/397f3e62ca71bbe76164ce27c8989115.jpg'
    },
    {
        Numero: 2,
        Nombre: 'Tomate',
        Categoria: 'Hortalizas',
        Descripcion: 'Planta comestible cultivada por sus frutos, que son utilizados en diversas preparaciones culinarias.',
        ImagenUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/6/2019/06/11131958/tomate-manitoba.jpg'
    },
    {
        Numero: 3,
        Nombre: 'Lavanda',
        Categoria: 'Hierbas',
        Descripcion: 'Planta aromática apreciada por su fragancia, comúnmente utilizada en aceites esenciales y productos de cuidado personal.',
        ImagenUrl: 'https://www.rawberta.com/wp-content/uploads/2020/05/Lavender-resized-Wikimedia-commons-1.jpg'
    },
    {
        Numero: 4,
        Nombre: 'Ficus Elastica',
        Categoria: 'Plantas de Interior',
        Descripcion: 'Planta de interior popular, también conocida como "Higuera de Goma", apreciada por su follaje brillante y fácil cuidado.',
        ImagenUrl: 'https://homecveti.ru/wp-content/uploads/2013/02/Ficus_elastica.jpg'
    },
    {
        Numero: 5,
        Nombre: 'Girasol',
        Categoria: 'Flores',
        Descripcion: 'Planta conocida por sus flores grandes y amarillas que siguen la dirección del sol a lo largo del día.',
        ImagenUrl: 'https://i.pinimg.com/originals/48/f5/1a/48f51a8393d38f9179c001173b683eec.jpg'
    },
    {
        Numero: 6,
        Nombre: 'Zanahoria',
        Categoria: 'Hortalizas',
        Descripcion: 'Raíz comestible de color naranja utilizada en diversas preparaciones culinarias.',
        ImagenUrl: 'https://www.bolha.com/image-w920x690/krmljenje-napajanje/rumeno-in-rdece-korenje-ljudi-ali-zivali-slika-19139604.jpg'
    },
    {
        Numero: 7,
        Nombre: 'Menta',
        Categoria: 'Hierbas',
        Descripcion: 'Planta aromática con hojas frescas utilizadas en infusiones, cócteles y en la cocina.',
        ImagenUrl: 'https://i.pinimg.com/originals/41/4b/8e/414b8e73d0dabf63b50c78ff1568998c.jpg'
    },
    {
        Numero: 8,
        Nombre: 'Cactus',
        Categoria: 'Suculentas',
        Descripcion: 'Planta suculenta adaptada a ambientes secos, con tallos carnosos y a menudo espinosos.',
        ImagenUrl: 'https://www.publicdomainpictures.net/pictures/220000/velka/cactus-plant-14934698682hE.jpg'
    },
    {
        Numero: 9,
        Nombre: 'Orquídea',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus exquisitas y variadas flores.',
        ImagenUrl: 'https://elarbol.org/wp-content/uploads/2018/09/word-image-104.jpeg'
    },
    {
        Numero: 10,
        Nombre: 'Espinaca',
        Categoria: 'Hortalizas',
        Descripcion: 'Hoja verde comestible rica en nutrientes, utilizada en ensaladas y platos cocidos.',
        ImagenUrl: 'https://s3-ap-southeast-1.amazonaws.com/zhonglingdev/resource/goods/5b9f78d041664.jpg'
    },
    {
        Numero: 11,
        Nombre: 'Romero',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática con hojas y tallos leñosos, utilizada en la cocina y en productos de cuidado personal.',
        ImagenUrl: 'https://endanea.com/wp-content/uploads/2020/04/romero-km0-planta-de-exterior-aromatica-follaje.jpg'
    },
    {
        Numero: 12,
        Nombre: 'Aloe Vera',
        Categoria: 'Suculentas',
        Descripcion: 'Planta suculenta conocida por sus propiedades medicinales, especialmente para la piel.',
        ImagenUrl: 'https://images.myplantin.com/1242_2688/5643/main.jpg'
    },
    {
        Numero: 13,
        Nombre: 'Tulipán',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores en forma de copa y una amplia variedad de colores.',
        ImagenUrl: 'https://tulipfestival.ca/wp-content/uploads/2020/05/20200519_132120-768x1024-1.jpeg'
    },
    {
        Numero: 14,
        Nombre: 'Papa',
        Categoria: 'Hortalizas',
        Descripcion: 'Tubérculo comestible ampliamente utilizado en la cocina.',
        ImagenUrl: 'https://www.debate.com.mx/export/sites/debate/img/2017/03/13/produccixn-de-papa-en-mxxico.jpg_1543673193.jpg'
    },
    {
        Numero: 15,
        Nombre: 'Albahaca',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática utilizada en la cocina italiana y en diversas preparaciones culinarias.',
        ImagenUrl: 'https://plantasyflores.online/wp-content/uploads/2017/09/basil-2535222_1920-1088x1632.jpg'
    },
    {
        Numero: 16,
        Nombre: 'Crisantemo',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores densas y variados colores.',
        ImagenUrl: 'https://i.pinimg.com/originals/61/66/81/61668121990e1914b59d421946e00e62.jpg'
    },
    {
        Numero: 17,
        Nombre: 'Pimiento',
        Categoria: 'Hortalizas',
        Descripcion: 'Fruto comestible de diversos colores, utilizado en la cocina para dar sabor y color.',
        ImagenUrl: 'https://www.consejosparamihuerto.com/wp-content/uploads/2019/12/cultivo-de-pimientos-en-macetas-como-cultivar-plantas-de-pimiento-en-un-contenedor.jpg'
    },
    {
        Numero: 18,
        Nombre: 'Caléndula',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores brillantes y propiedades medicinales.',
        ImagenUrl: 'https://ecocosas.com/wp-content/uploads/2019/07/calendula-cuidados.jpg'
    },
    {
        Numero: 19,
        Nombre: 'Cebolla',
        Categoria: 'Hortalizas',
        Descripcion: 'Bulbo comestible utilizado en la cocina para dar sabor a diversos platos.',
        ImagenUrl: 'https://www.vidaenlatierra.com/especies/plantas/cebolla/cebollas-rojas.jpg'
    },
    {
        Numero: 20,
        Nombre: 'Salvia',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática con hojas plateadas, utilizada en la cocina y con propiedades medicinales.',
        ImagenUrl: 'https://www.pahls.com/wp-content/uploads/2020/02/Perennial_Salvia-Salvatore-Blue-790x1024.jpg'
    },
];

let tables = document.querySelectorAll('table');

tables.forEach(table => {
    table.loadData = function (data) {
        if (data.length < 0) return;

        let thead = this.querySelector('thead');
        let tbody = this.querySelector('tbody');
        let firstElement = data[0];
        let tr = thead.insertRow();

        for (let key in firstElement) {
            let th = document.createElement('th');
            th.innerHTML = key;
            tr.appendChild(th);
        }

        for (let obj of data) {
            let tr = tbody.insertRow();
            tr.classList.add("table-row");
            tr.addEventListener("click", function (e) {
                sessionStorage.numero = obj.Numero;
                location.href = 'details.html';
            });
            for (let key of Object.keys(obj)) {
                let td = tr.insertCell();
                td.textContent = obj[key];
            }
        }
    }

    table.navegate = function (page) {
        let rows = this.querySelectorAll("tbody tr");
        let rowsPerPage = 6;
        let start = (page - 1) * rowsPerPage;
        let end = start + rowsPerPage;

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            if (i >= start && i < end) {
                row.classList.remove("hidden");
            } else {
                row.classList.add("hidden");
            }
        }

        let links = this.querySelectorAll("tfoot a");
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            if (i === page - 1) {
                link.classList.add("is-current");
            } else {
                link.classList.remove("is-current");
            }
        }
    }

    table.paginate = function (rowsPerPage) {
        let filas = table.querySelectorAll("tbody tr").length;
        let paginas = Math.ceil(filas / rowsPerPage);

        let tfoot = document.createElement("tfoot");
        let tfootTr = tfoot.insertRow();
        let tfootTd = tfootTr.insertCell();

        for (let i = 1; i <= paginas; i++) {
            let a = document.createElement("a");
            a.classList.add("pagination-link");
            a.textContent = i;
            a.addEventListener("click", function () {
                table.navegate(i);
            });
            a.href = "javascript:";
            tfootTd.appendChild(a);
        }

        tfootTd.colSpan = this.tBodies[0].rows[0].cells.length;
        this.appendChild(tfoot);
    }
});

let table = document.querySelector('.datatable');

if (table) {
    table.loadData(json);
    table.paginate(6);
    table.navegate(1);
}
