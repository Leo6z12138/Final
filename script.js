$(document).ready(function() {
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  $(".diagonal-bg svg line").attr("stroke-width", (30 + scroll / 10) + "%");
	  if (scroll > 100) {
		$(".other-element").css("opacity", (scroll - 100) / 100);
		$(".graphics").css("transform", "translateY(" + scroll / 2 + "px)");
	  }
	});
  });
  
  document.addEventListener('DOMContentLoaded', function() {
	const immigrationCtx = document.getElementById('immigrationChart').getContext('2d');
	const immigrationData = {
	  labels: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
	  datasets: [{
		  label: 'China',
		  data: [75, 84, 82, 79, 103, 113, 120, 141, 151, 162, 170, 162, 148],
		  borderColor: 'rgb(255, 99, 132)',
		  backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
		  label: 'India',
		  data: [82, 88, 112, 91, 87, 106, 112, 123, 149, 168, 167, 141, 122],
		  borderColor: 'rgb(54, 162, 235)',
		  backgroundColor: 'rgba(54, 162, 235, 0.5)',
		},
		// ... Add other datasets
	  ]
	};
  
	const immigrationChart = new Chart(immigrationCtx, {
	  type: 'line',
	  data: immigrationData,
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  },
	});
  });
  
  