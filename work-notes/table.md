<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Table on GitHub Pages</title>
    
    <!-- 1. Include DataTables CSS -->
    <link rel="stylesheet" href="https://datatables.net">
    <style>
        body { font-family: sans-serif; padding: 20px; background-color: #f9f9f9; }
        .container { max-width: 1000px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    </style>
</head>
<body>

<div class="container">
    <h2>My Interactive Dataset</h2>
    
    <!-- 2. Create a standard HTML Table (with an ID) -->
    <table id="myInteractiveTable" class="display" style="width:100%">
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

<!-- 3. Include jQuery and DataTables JS Plugins -->
<script src="https://jquery.com"></script>
<script src="https://datatables.net"></script>
<script src="https://datatables.net"></script>

<!-- 4. Initialize the Interactive Table -->
<script>
    $(document).ready(function () {
        $('#myInteractiveTable').DataTable({
            responsive: true,
            pageLength: 10,
            order: [[0, 'asc']] // Sort by the first column initially
        });
    });
</script>

</body>
</html>
