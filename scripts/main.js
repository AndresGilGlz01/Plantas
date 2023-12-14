let json = [
    {
        Numero: 1,
        Nombre: 'Rosa',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores generalmente grandes y vistosas.',
    },
    {
        Numero: 2,
        Nombre: 'Tomate',
        Categoria: 'Hortalizas',
        Descripcion: 'Planta comestible cultivada por sus frutos, que son utilizados en diversas preparaciones culinarias.',
    },
    {
        Numero: 3,
        Nombre: 'Lavanda',
        Categoria: 'Hierbas',
        Descripcion: 'Planta aromática apreciada por su fragancia, comúnmente utilizada en aceites esenciales y productos de cuidado personal.',
    },
    {
        Numero: 4,
        Nombre: 'Ficus Elastica',
        Categoria: 'Plantas de Interior',
        Descripcion: 'Planta de interior popular, también conocida como "Higuera de Goma", apreciada por su follaje brillante y fácil cuidado.',
    },
    {
        Numero: 5,
        Nombre: 'Girasol',
        Categoria: 'Flores',
        Descripcion: 'Planta conocida por sus flores grandes y amarillas que siguen la dirección del sol a lo largo del día.',
    },
    {
        Numero: 6,
        Nombre: 'Zanahoria',
        Categoria: 'Hortalizas',
        Descripcion: 'Raíz comestible de color naranja utilizada en diversas preparaciones culinarias.',
    },
    {
        Numero: 7,
        Nombre: 'Menta',
        Categoria: 'Hierbas',
        Descripcion: 'Planta aromática con hojas frescas utilizadas en infusiones, cócteles y en la cocina.',
    },
    {
        Numero: 8,
        Nombre: 'Cactus',
        Categoria: 'Suculentas',
        Descripcion: 'Planta suculenta adaptada a ambientes secos, con tallos carnosos y a menudo espinosos.',
    },
    {
        Numero: 9,
        Nombre: 'Orquídea',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus exquisitas y variadas flores.',
    },
    {
        Numero: 10,
        Nombre: 'Espinaca',
        Categoria: 'Hortalizas',
        Descripcion: 'Hoja verde comestible rica en nutrientes, utilizada en ensaladas y platos cocidos.',
    },
    {
        Numero: 11,
        Nombre: 'Romero',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática con hojas y tallos leñosos, utilizada en la cocina y en productos de cuidado personal.',
    },
    {
        Numero: 12,
        Nombre: 'Aloe Vera',
        Categoria: 'Suculentas',
        Descripcion: 'Planta suculenta conocida por sus propiedades medicinales, especialmente para la piel.',
    },
    {
        Numero: 13,
        Nombre: 'Tulipán',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores en forma de copa y una amplia variedad de colores.',
    },
    {
        Numero: 14,
        Nombre: 'Papa',
        Categoria: 'Hortalizas',
        Descripcion: 'Tubérculo comestible ampliamente utilizado en la cocina.',
    },
    {
        Numero: 15,
        Nombre: 'Albahaca',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática utilizada en la cocina italiana y en diversas preparaciones culinarias.',
    },
    {
        Numero: 16,
        Nombre: 'Crisantemo',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores densas y variados colores.',
    },
    {
        Numero: 17,
        Nombre: 'Pimiento',
        Categoria: 'Hortalizas',
        Descripcion: 'Fruto comestible de diversos colores, utilizado en la cocina para dar sabor y color.',
    },
    {
        Numero: 18,
        Nombre: 'Caléndula',
        Categoria: 'Flores',
        Descripcion: 'Planta ornamental conocida por sus flores brillantes y propiedades medicinales.',
    },
    {
        Numero: 19,
        Nombre: 'Cebolla',
        Categoria: 'Hortalizas',
        Descripcion: 'Bulbo comestible utilizado en la cocina para dar sabor a diversos platos.',
    },
    {
        Numero: 20,
        Nombre: 'Salvia',
        Categoria: 'Hierbas',
        Descripcion: 'Hierba aromática con hojas plateadas, utilizada en la cocina y con propiedades medicinales.',
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
