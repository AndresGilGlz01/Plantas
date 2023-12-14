let json = [
    {
        Numero: 1,
        Nombre: 'Rosa',
        Categoria: 'Flores',
        Descripcion: 'La rosa es una planta ornamental conocida por sus flores grandes y vistosas. Es apreciada por su belleza y fragancia, y ha sido cultivada y apreciada en diversas culturas a lo largo de la historia. Las rosas se utilizan comúnmente en jardinería y como símbolo de amor y romanticismo.',
        ImagenUrl: 'https://i.pinimg.com/originals/39/7f/3e/397f3e62ca71bbe76164ce27c8989115.jpg'
    },
    {
        Numero: 2,
        Nombre: 'Tomate',
        Categoria: 'Hortalizas',
        Descripcion: 'El tomate es una planta comestible cultivada por sus frutos, que son utilizados en diversas preparaciones culinarias. Es una planta anual de la familia Solanaceae y es apreciada por su versatilidad en la cocina, ya que puede consumirse crudo, cocido, en salsas, jugos y una variedad de platos. El tomate es rico en nutrientes como la vitamina C y es un ingrediente fundamental en muchas cocinas alrededor del mundo.',
        ImagenUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/6/2019/06/11131958/tomate-manitoba.jpg'
    },
    {
        Numero: 3,
        Nombre: 'Lavanda',
        Categoria: 'Hierbas',
        Descripcion: 'La lavanda es una planta aromática apreciada por su fragancia distintiva. Pertenece al género Lavandula y es conocida por sus tallos llenos de flores pequeñas y de color púrpura. Además de su agradable aroma, la lavanda es utilizada en la producción de aceites esenciales y productos de cuidado personal. También se cultiva en jardines ornamentales y se aprecia por sus propiedades relajantes y calmantes.',
        ImagenUrl: 'https://www.rawberta.com/wp-content/uploads/2020/05/Lavender-resized-Wikimedia-commons-1.jpg'
    },
    {
        Numero: 4,
        Nombre: 'Ficus Elastica',
        Categoria: 'Plantas de Interior',
        Descripcion: 'El Ficus Elastica, comúnmente conocido como "Higuera de Goma" o "Ficus de Goma", es una planta de interior popular. Destaca por sus hojas grandes y brillantes, así como por su adaptabilidad y facilidad de cuidado. Esta planta pertenece a la familia de las Moráceas y es apreciada por su capacidad para purificar el aire. La Ficus Elastica es una opción común en decoración de interiores debido a su atractivo follaje y su capacidad para prosperar en condiciones de iluminación interior.',
        ImagenUrl: 'https://homecveti.ru/wp-content/uploads/2013/02/Ficus_elastica.jpg'
    },
    {
        Numero: 5,
        Nombre: 'Girasol',
        Categoria: 'Flores',
        Descripcion: 'El girasol es una planta conocida por sus flores grandes y brillantes que siguen la dirección del sol a lo largo del día. Pertenece al género Helianthus y es apreciado por su aspecto vibrante y soleado. Además de su atractivo ornamental, los girasoles son cultivados por sus semillas, que son comestibles y se utilizan en la producción de aceite. La planta es simbólica de la energía positiva y la felicidad, y su presencia a menudo se asocia con paisajes soleados y alegres.',
        ImagenUrl: 'https://i.pinimg.com/originals/48/f5/1a/48f51a8393d38f9179c001173b683eec.jpg'
    },
    {
        Numero: 6,
        Nombre: 'Zanahoria',
        Categoria: 'Hortalizas',
        Descripcion: 'La zanahoria es una hortaliza conocida por su raíz comestible de color naranja brillante. Pertenece a la familia Apiaceae y es cultivada por su sabor dulce y sus beneficios nutricionales. Además de ser consumida cruda o cocida en diversas preparaciones culinarias, la zanahoria es rica en beta-carotenos, que son convertidos en vitamina A en el cuerpo y son beneficiosos para la salud ocular y la piel. La zanahoria es un ingrediente versátil en la cocina y es apreciada por su textura crujiente y su sabor característico.',
        ImagenUrl: 'https://www.bolha.com/image-w920x690/krmljenje-napajanje/rumeno-in-rdece-korenje-ljudi-ali-zivali-slika-19139604.jpg'
    },
    {
        Numero: 7,
        Nombre: 'Menta',
        Categoria: 'Hierbas',
        Descripcion: 'La menta es una hierba aromática conocida por sus hojas frescas y fragantes. Perteneciente al género Mentha, la menta se utiliza comúnmente en infusiones, cócteles, productos de cuidado personal y en la cocina para agregar sabor a diversos platos. Hay varias variedades de menta, como la menta verde y la menta piperita, cada una con su propio perfil de sabor y aroma. Además de sus usos culinarios, la menta también es apreciada por sus propiedades refrescantes y digestivas, haciéndola popular en tés y remedios caseros.',
        ImagenUrl: 'https://i.pinimg.com/originals/41/4b/8e/414b8e73d0dabf63b50c78ff1568998c.jpg'
    },
    {
        Numero: 8,
        Nombre: 'Cactus',
        Categoria: 'Suculentas',
        Descripcion: 'El cactus es una planta suculenta adaptada a entornos secos, caracterizada por sus tallos carnosos y, a menudo, espinosos. Perteneciente a la familia de las cactáceas, los cactus son conocidos por su capacidad para almacenar agua y resistir condiciones áridas. Existen numerosas especies de cactus, y sus formas pueden variar desde pequeñas esferas hasta candelabros altos. Estas plantas son populares tanto en jardinería como en decoración interior debido a su apariencia única y su capacidad para prosperar en condiciones de baja humedad. Algunos cactus también producen flores llamativas en ciertas épocas del año.',
        ImagenUrl: 'https://www.publicdomainpictures.net/pictures/220000/velka/cactus-plant-14934698682hE.jpg'
    },
    {
        Numero: 9,
        Nombre: 'Orquídea',
        Categoria: 'Flores',
        Descripcion: 'La orquídea es una planta ornamental conocida por sus flores exquisitas y variadas. Pertenece a una familia extensa, Orchidaceae, que incluye una amplia diversidad de especies. Las orquídeas se caracterizan por sus flores intrincadas y coloridas, con una amplia variedad de formas y tamaños. Son apreciadas en jardinería y floricultura por su elegancia y atractivo estético.',
        ImagenUrl: 'https://elarbol.org/wp-content/uploads/2018/09/word-image-104.jpeg'
    },
    {
        Numero: 10,
        Nombre: 'Espinaca',
        Categoria: 'Hortalizas',
        Descripcion: 'La espinaca es una hoja verde comestible que pertenece a la familia de las amarantáceas. Esta hortaliza es conocida por sus hojas de forma triangular y su sabor característico. La espinaca se consume tanto cruda como cocida y es un ingrediente común en ensaladas, batidos, salteados y otros platos.',
        ImagenUrl: 'https://s3-ap-southeast-1.amazonaws.com/zhonglingdev/resource/goods/5b9f78d041664.jpg'
    },
    {
        Numero: 11,
        Nombre: 'Romero',
        Categoria: 'Hierbas',
        Descripcion: 'El romero es una hierba aromática que pertenece a la familia de las Lamiáceas. Con hojas lineales y fragantes, el romero es conocido por su distintivo aroma y sabor. Esta hierba perenne es originaria de la región mediterránea y se ha utilizado históricamente tanto en la cocina como con fines medicinales.',
        ImagenUrl: 'https://endanea.com/wp-content/uploads/2020/04/romero-km0-planta-de-exterior-aromatica-follaje.jpg'
    },
    {
        Numero: 12,
        Nombre: 'Aloe Vera',
        Categoria: 'Suculentas',
        Descripcion: 'El Aloe Vera es una planta suculenta conocida por sus propiedades medicinales y beneficios para la piel. Sus hojas carnosas contienen un gel transparente que se ha utilizado durante siglos por diversas culturas para tratar quemaduras, cortes, irritaciones cutáneas y otras afecciones dermatológicas.',
        ImagenUrl: 'https://images.myplantin.com/1242_2688/5643/main.jpg'
    },
    {
        Numero: 13,
        Nombre: 'Tulipán',
        Categoria: 'Flores',
        Descripcion: 'El tulipán es una planta ornamental conocida por sus hermosas flores en forma de copa y su amplia variedad de colores vibrantes. Pertenece al género Tulipa y es una de las plantas bulbosas más populares en la jardinería y floricultura. Los tulipanes tienen una amplia gama de variedades, incluyendo tulipanes simples, dobles, enanos y altos. Cada primavera, su floración colorida aporta belleza y alegría a paisajes florales en muchas partes del mundo.',
        ImagenUrl: 'https://tulipfestival.ca/wp-content/uploads/2020/05/20200519_132120-768x1024-1.jpeg'
    },
    {
        Numero: 14,
        Nombre: 'Papa',
        Categoria: 'Hortalizas',
        Descripcion: 'La papa es un tubérculo comestible que pertenece a la familia de las Solanáceas. Originaria de América del Sur, la papa es un alimento básico en la dieta mundial y una de las principales fuentes de carbohidratos.',
        ImagenUrl: 'https://www.debate.com.mx/export/sites/debate/img/2017/03/13/produccixn-de-papa-en-mxxico.jpg_1543673193.jpg'
    },
    {
        Numero: 15,
        Nombre: 'Albahaca',
        Categoria: 'Hierbas',
        Descripcion: 'La albahaca es una hierba aromática que pertenece a la familia de las Lamiáceas. Originaria de Asia tropical, la albahaca se ha utilizado durante siglos en la cocina y en la medicina tradicional debido a su distintivo aroma y sabor.',
        ImagenUrl: 'https://plantasyflores.online/wp-content/uploads/2017/09/basil-2535222_1920-1088x1632.jpg'
    },
    {
        Numero: 16,
        Nombre: 'Crisantemo',
        Categoria: 'Flores',
        Descripcion: 'El crisantemo es una planta ornamental conocida por sus flores densas y variados colores. Pertenece al género Chrysanthemum y es originario de Asia y el noreste de Europa. Los crisantemos son apreciados por su atractivo visual y su capacidad para florecer en otoño, lo que los convierte en una opción popular para decorar jardines y espacios exteriores.',
        ImagenUrl: 'https://i.pinimg.com/originals/61/66/81/61668121990e1914b59d421946e00e62.jpg'
    },
    {
        Numero: 17,
        Nombre: 'Pimiento',
        Categoria: 'Hortalizas',
        Descripcion: 'El pimiento es un fruto comestible perteneciente al género Capsicum y es parte de la familia Solanaceae. Existen diversas variedades de pimientos que varían en forma, tamaño, sabor y color, desde los dulces y jugosos pimientos bell, hasta los picantes chiles. Estos frutos son originarios de América y se han convertido en un elemento esencial en muchas cocinas de todo el mundo.',
        ImagenUrl: 'https://www.consejosparamihuerto.com/wp-content/uploads/2019/12/cultivo-de-pimientos-en-macetas-como-cultivar-plantas-de-pimiento-en-un-contenedor.jpg'
    },
    {
        Numero: 18,
        Nombre: 'Caléndula',
        Categoria: 'Flores',
        Descripcion: 'La caléndula es una planta ornamental conocida por sus flores brillantes y propiedades medicinales. Pertenece al género Calendula y es nativa de la región mediterránea. Sus flores son de color naranja o amarillo brillante y tienen una apariencia similar a la de los girasoles.',
        ImagenUrl: 'https://ecocosas.com/wp-content/uploads/2019/07/calendula-cuidados.jpg'
    },
    {
        Numero: 19,
        Nombre: 'Cebolla',
        Categoria: 'Hortalizas',
        Descripcion: 'La cebolla es una hortaliza popular en la cocina y pertenece al género Allium. Es conocida por su sabor característico y se utiliza en diversas preparaciones culinarias en todo el mundo. La cebolla tiene un bulbo redondeado y está formada por capas superpuestas.',
        ImagenUrl: 'https://www.vidaenlatierra.com/especies/plantas/cebolla/cebollas-rojas.jpg'
    },
    {
        Numero: 20,
        Nombre: 'Salvia',
        Categoria: 'Hierbas',
        Descripcion: 'La salvia es una hierba aromática perteneciente a la familia de las Lamiáceas. Con hojas plateadas y a menudo con un aroma distintivo, la salvia es conocida tanto por su uso culinario como medicinal.',
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
            if (key === "ImagenUrl") continue;
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
                if (key === "ImagenUrl") continue;
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

        sessionStorage.lastPage = page;
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

    if (sessionStorage.lastPage) {
        table.navegate(sessionStorage.lastPage);
    }
    else {
        table.navegate(1);
    }
}
