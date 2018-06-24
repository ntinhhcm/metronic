//== Class definition

var planMember = function () {
	//== Private functions

	var __template = function(row, index) {
		value = row['value_' + index];
		value2 = row['value2_' + index];

		return '\
			<div style="background: ' + value + '; width: 30px; height: 30px; border: 1px solid #ffffff;"></div>\
			<div style="background: ' + value2 + '; width: 30px; height: 30px; border: 1px solid #ffffff;"></div>\
		';
	};

	var options = {
		layout: {
			theme: 'default',
			class: 'm-datatable--brand',
			scroll: true,
			height: 550,
			footer: true
		},

		sortable: true,

		filterable: false,

		pagination: true,

		rows: {
			callback: function() {
				$('.m-datatable__row').children('td').not(":nth-child(1)").css('padding', 0);
				$('.m-datatable__row').children('th').not(":nth-child(1)").css('padding', 0);
				$('.m-datatable__row').children('th').not(":nth-child(1)").css('text-align', 'center');
			},
				// auto hide columns, if rows overflow. work on non locked columns
				//autoHide: false,
		},
		columns: [{
			field: "record_id",
			title: "#",
			locked: {left: 'xl'},
			sortable: false,
			width: 40
		}, {
			field: "badge_id",
			title: "BadgeID",
			locked: {left: 'xl'},
			sortable: true,
			width: 100,
		}, {
			field: "member_name",
			width: 200,
			title: "Member name",
			sortable: true,
			locked: {left: 'xl'},
			overflow: 'visible',
		}, {
			field: "Actions",
			width: 70,
			title: "Actions",
			sortable: false,
			locked: {left: 'xl'},
			overflow: 'visible',
			template: function (row, index, datatable) {
				return '\
					<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
						<i class="la la-edit"></i>\
					</a>\
				';
			}
		}, {
			field: "value_1",
			width: 30,
			title: "1",
			sortable: false,
			template: function(row) {
				return __template(row, 1);
			}
		}, {
			field: "value_2",
			width: 30,
			title: "2",
			sortable: false,
			template: function(row) {
				return __template(row, 2);
			}
		}, {
			field: "value_3",
			width: 30,
			title: "3",
			sortable: false,
			template: function(row) {
				return __template(row, 3);
			}
		}, {
			field: "value_4",
			width: 30,
			title: "4",
			sortable: false,
			template: function(row) {
				return __template(row, 4);
			}
		}, {
			field: "value_5",
			width: 30,
			title: "5",
			sortable: false,
			template: function(row) {
				return __template(row, 5);
			}
		}, {
			field: "value_6",
			width: 30,
			title: "6",
			sortable: false,
			template: function(row) {
				return __template(row, 6);
			}
		}, {
			field: "value_7",
			width: 30,
			title: "7",
			sortable: false,
			template: function(row) {
				return __template(row, 7);
			}
		}, {
			field: "value_8",
			width: 30,
			title: "8",
			sortable: false,
			template: function(row) {
				return __template(row, 8);
			}
		}, {
			field: "value_9",
			width: 30,
			title: "9",
			sortable: false,
			template: function(row) {
				return __template(row, 9);
			}
		}, {
			field: "value_10",
			width: 30,
			title: "10",
			sortable: false,
			template: function(row) {
				return __template(row, 10);
			}
		}, {
			field: "value_11",
			width: 30,
			title: "11",
			sortable: false,
			template: function(row) {
				return __template(row, 11);
			}
		}, {
			field: "value_12",
			width: 30,
			title: "12",
			sortable: false,
			template: function(row) {
				return __template(row, 12);
			}
		}, {
			field: "value_13",
			width: 30,
			title: "13",
			sortable: false,
			template: function(row) {
				return __template(row, 13);
			}
		}, {
			field: "value_14",
			width: 30,
			title: "14",
			sortable: false,
			template: function(row) {
				return __template(row, 14);
			}
		}, {
			field: "value_15",
			width: 30,
			title: "15",
			sortable: false,
			template: function(row) {
				return __template(row, 15);
			}
		}, {
			field: "value_16",
			width: 30,
			title: "16",
			sortable: false,
			template: function(row) {
				return __template(row, 16);
			}
		}, {
			field: "value_17",
			width: 30,
			title: "17",
			sortable: false,
			template: function(row) {
				return __template(row, 17);
			}
		}, {
			field: "value_18",
			width: 30,
			title: "18",
			sortable: false,
			template: function(row) {
				return __template(row, 18);
			}
		}, {
			field: "value_19",
			width: 30,
			title: "19",
			sortable: false,
			template: function(row) {
				return __template(row, 19);
			}
		}, {
			field: "value_20",
			width: 30,
			title: "20",
			sortable: false,
			template: function(row) {
				return __template(row, 20);
			}
		}, {
			field: "value_21",
			width: 30,
			title: "21",
			sortable: false,
			template: function(row) {
				return __template(row, 21);
			}
		}, {
			field: "value_22",
			width: 30,
			title: "22",
			sortable: false,
			template: function(row) {
				return __template(row, 22);
			}
		}, {
			field: "value_23",
			width: 30,
			title: "23",
			sortable: false,
			template: function(row) {
				return __template(row, 23);
			}
		}, {
			field: "value_24",
			width: 30,
			title: "24",
			sortable: false,
			template: function(row) {
				return __template(row, 24);
			}
		}, {
			field: "value_25",
			width: 30,
			title: "25",
			sortable: false,
			template: function(row) {
				return __template(row, 25);
			}
		}, {
			field: "value_26",
			width: 30,
			title: "26",
			sortable: false,
			template: function(row) {
				return __template(row, 26);
			}
		}, {
			field: "value_27",
			width: 30,
			title: "27",
			sortable: false,
			template: function(row) {
				return __template(row, 27);
			}
		}, {
			field: "value_28",
			width: 30,
			title: "28",
			sortable: false,
			template: function(row) {
				return __template(row, 28);
			}
		}, {
			field: "value_29",
			width: 30,
			title: "29",
			sortable: false,
			template: function(row) {
				return __template(row, 29);
			}
		}, {
			field: "value_30",
			width: 30,
			title: "30",
			sortable: false,
			template: function(row) {
				return __template(row, 30);
			}
		}, {
			field: "value_31",
			width: 30,
			title: "31",
			sortable: false,
			template: function(row) {
				return __template(row, 31);
			}
		}, {
			field: "value_32",
			width: 30,
			title: "32",
			sortable: false,
			template: function(row) {
				return __template(row, 32);
			}
		}, {
			field: "value_33",
			width: 30,
			title: "33",
			sortable: false,
			template: function(row) {
				return __template(row, 33);
			}
		}, {
			field: "value_34",
			width: 30,
			title: "34",
			sortable: false,
			template: function(row) {
				return __template(row, 34);
			}
		}, {
			field: "value_35",
			width: 30,
			title: "35",
			sortable: false,
			template: function(row) {
				return __template(row, 35);
			}
		}, {
			field: "value_36",
			width: 30,
			title: "36",
			sortable: false,
			template: function(row) {
				return __template(row, 36);
			}
		}, {
			field: "value_37",
			width: 30,
			title: "37",
			sortable: false,
			template: function(row) {
				return __template(row, 37);
			}
		}, {
			field: "value_38",
			width: 30,
			title: "38",
			sortable: false,
			template: function(row) {
				return __template(row, 38);
			}
		}, {
			field: "value_39",
			width: 30,
			title: "39",
			sortable: false,
			template: function(row) {
				return __template(row, 39);
			}
		}, {
			field: "value_40",
			width: 30,
			title: "40",
			sortable: false,
			template: function(row) {
				return __template(row, 40);
			}
		}, {
			field: "value_41",
			width: 30,
			title: "41",
			sortable: false,
			template: function(row) {
				return __template(row, 41);
			}
		}, {
			field: "value_42",
			width: 30,
			title: "42",
			sortable: false,
			template: function(row) {
				return __template(row, 42);
			}
		}, {
			field: "value_43",
			width: 30,
			title: "43",
			sortable: false,
			template: function(row) {
				return __template(row, 43);
			}
		}, {
			field: "value_44",
			width: 30,
			title: "44",
			sortable: false,
			template: function(row) {
				return __template(row, 44);
			}
		}, {
			field: "value_45",
			width: 30,
			title: "45",
			sortable: false,
			template: function(row) {
				return __template(row, 45);
			}
		}, {
			field: "value_46",
			width: 30,
			title: "46",
			sortable: false,
			template: function(row) {
				return __template(row, 46);
			}
		}, {
			field: "value_47",
			width: 30,
			title: "47",
			sortable: false,
			template: function(row) {
				return __template(row, 47);
			}
		}, {
			field: "value_48",
			width: 30,
			title: "48",
			sortable: false,
			template: function(row) {
				return __template(row, 48);
			}
		}
		]
	};

	var plan = function (url, token) {
		options.data = {
			type: 'remote',
			source: {
				read: {
					url: url,
					method: 'GET',
					headers: {
						'Authorization': token
					}
				}
			},
			pageSize: 10,
			serverPaging: true,
			serverFiltering: true,
			serverSorting: true
		};

		var datatable = $('.m_datatable').mDatatable(options);
		$('#value, #value2').selectpicker();
	};

	return {
		// public functions
		init: function (url, token) {
			plan(url, token);
		}
	}
}();

function loadPlan(url, token) {
	planMember.init(url, token);
}