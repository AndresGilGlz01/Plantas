let tables = document.querySelectorAll('table');

tables.forEach(table => {
    table.loadData = function (data) {
        console.log(data);
        
    }
});
