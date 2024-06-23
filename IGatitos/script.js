document.getElementById('toggle-view').addEventListener('click', function() {
    const gridContainer = document.getElementById('grid-container');
    const columns = gridContainer.querySelectorAll('.col-md-4, .col-md-12');

    columns.forEach(column => {
        if (column.classList.contains('col-md-4')) {
            column.classList.remove('col-md-4');
            column.classList.add('col-md-12');
        } else {
            column.classList.remove('col-md-12');
            column.classList.add('col-md-4');
        }
    });
});