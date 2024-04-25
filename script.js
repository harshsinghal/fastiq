$(document).ready(function() {
    $('#addTable').on('click', function() {
        const tableIndex = $('.tableSection').length + 1;
        const tableHTML = `
            <div class="tableSection">
                <div class="tableHeader">
                    <label>Table Name: <input type="text" name="tableName${tableIndex}"></label>
                    <button type="button" class="addColumn">Add Column</button>
                </div>
                <div class="columnsContainer"></div>
            </div>
        `;
        $('#tableContainer').append(tableHTML);
    });

    // Use delegated event to handle clicks on dynamically added ".addColumn" buttons
    $('#tableContainer').on('click', '.addColumn', function() {
        const columnIndex = $(this).closest('.tableSection').find('.columnInputs').length + 1;
        const columnHTML = `
            <div class="columnInputs">
                <input type="text" name="columnName${columnIndex}" placeholder="Column Name">
                <input type="text" name="columnDesc${columnIndex}" placeholder="Column Description">
                <select name="columnType${columnIndex}">
                    <option value="int">Integer</option>
                    <option value="varchar">Varchar</option>
                    <option value="date">Date</option>
                    <!-- Add more types as needed -->
                </select>
            </div>
        `;
        $(this).closest('.tableSection').find('.columnsContainer').append(columnHTML);
    });
});
