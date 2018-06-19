//== Class definition

var planMember = function () {
	//== Private functions

	// basic demo
	var main = function () {

		var datatable = $('#m_datatable').DataTable({
			responsive: true,
			scrollY:        "300px",
        	scrollX:        true,
	        scrollCollapse: true,
	        paging:         false,
	        fixedColumns:   {
	        	leftColumns: 1
	        }
			/*data: {
				saveState: {cookie: false}
			},

			layout: {
				theme: 'default',
				class: '',
				scroll: true,
				height: 550,
				footer: false
			},

			sortable: true,

			filterable: false,

			pagination: true,

			search: {
				input: $('#generalSearch')
			},

			columns: []*/
		});
	};

	var header = function () {
		table = $('#m_datatable');
		thead = $('<thead></thead>');
		th_tr1 = $('<tr></tr>');
		th_tr1.append('<th></th>');
		th_tr1.append('<th></th>');
		for (i = 1; i <= 12; i++) {
			th_tr1.append('<th colspan="4">' + i + '</th>');
		}
		th_tr2 = $('<tr></tr>');
		th_tr2.append('<th>BadgeID</th><th>Member Name</th>');
		for (i = 1; i <= 48; i++) {
			th_tr2.append('<th>' + i + '</th>');
		}
		thead.append(th_tr1, th_tr2);
		table.append(thead);
	}

	return {
		// public functions
		init: function () {
			header();
			main();
		}
	};
}();

jQuery(document).ready(function () {
	planMember.init();
});