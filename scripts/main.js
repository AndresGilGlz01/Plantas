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
                console.log(e.target.parentNode.rowIndex);
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
