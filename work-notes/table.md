# Test of DataTables

<!-- <!DOCTYPE html>
<html lang="en"> -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Interactive Table on GitHub Pages</title>

    <!-- DataTables CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.datatables.net/3.1.3/css/dataTables.dataTables.css"
    >

    <!-- Responsive extension CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.datatables.net/responsive/4.1.1/css/responsive.dataTables.min.css"
    >

    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
            background-color: #f9f9f9;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body>

<div class="container">

    <h2>My Interactive Dataset</h2>

    <table
        id="myInteractiveTable"
        class="display responsive nowrap"
        style="width:100%"
    >

        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
            </tr>

            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
            </tr>

            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
            </tr>

        </tbody>

    </table>

</div>


<!-- DataTables JavaScript -->
<script src="https://cdn.datatables.net/3.1.3/js/dataTables.js"></script>

<!-- Responsive extension -->
<script src="https://cdn.datatables.net/responsive/4.1.1/js/dataTables.responsive.min.js"></script>


<!-- Initialize DataTables -->
<script>

new DataTable('#myInteractiveTable', {

    responsive: true,

    pageLength: 10,

    order: [
        [0, 'asc']
    ]

});

</script>

</body>
</html>
