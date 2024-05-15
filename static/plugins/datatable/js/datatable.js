$(document).ready(function () {
    $('#simple-datatable').DataTable({
      responsive: true,
      paging: true,
      ordering: false,
      info: true,
      searching: true,
      lengthChange: false,
      language: {
        search: "", // Remove search label
        searchPlaceholder: "Search" // Remove search placeholder
      },
      dom: "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'l><'col-sm-8'p>>"
    });
    
    $('#featured-datatable').DataTable({
        responsive: true,
        paging: true,
        ordering: false,
        info: true,
        searching: true,
        lengthChange: false,
        language: {
          search: "", // Remove search label
          searchPlaceholder: "Search" // Remove search placeholder
        },
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
    
    $('.dt-buttons').detach().appendTo('.dataTables_filter');
    // $('.dataTables_info').detach().appendTo('#pagination-div');
    // $('.dataTables_paginate').detach().appendTo('#pagination-div');
    
    $('#stripedTable').DataTable({
      responsive: true,
      paging: false,
      ordering: false,
      info: false,
      searching: false,
    });

  });