import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from "../currency-conversion.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private currency: CurrencyConversionService) { }

  ngOnInit(): void {
    this.getHistory()
  }

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  date: any;

  source: any = {
    datatype: "csv",
    // datatype: "JSON",
    datafields: [
        { name: 'Date' },
        { name: 'S&P 500' },
        { name: 'NASDAQ' }
    ],
    url: this.currency.getCurrencyHistory('2018-01-01', '2018-09-01')
    // url: './../../../sampledata/nasdaq_vs_sp500.txt'
  };

  dataAdapter: any = new jqx.dataAdapter(this.source, {
    async: false,
    autoBind: true,
    loadError: (xhr: any, status: any, error: any) => {
      alert('Error loading "' + this.source.url + '" : ' + error);
    }
  });

  padding: any = {
    left: 10,
    top: 5,
    right: 10,
    bottom: 5
  };

  titlePadding: any = {
    left: 50,
    top: 0,
    right: 0,
    bottom: 10
  };

  getHistory() {
    this.source.url.subscribe((response) => {
      this.date = new Object(response);

      console.log(this.date)
    })
  }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}

		return 850;
	}

  xAxis: any = {
    dataField: 'Date',
    formatFunction: (value: any) => {
      return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
    },
    type: 'date',
    baseUnit: 'month',
    valuesOnTicks: true,
    minValue: '01-01-2014',
    maxValue: '01-01-2015',
    tickMarks: {
      visible: true,
      interval: 1,
      color: '#BCBCBC'
    },
    unitInterval: 1,
    gridLines: {
      visible: true,
      interval: 3,
      color: '#BCBCBC'
    },
    labels: {
      angle: -45,
      rotationPoint: 'topright',
      offset: { x: 0, y: -25 }
    }
  };

  valueAxis: any = {
    visible: true,
    title: { text: 'Daily Closing Price<br>' },
    tickMarks: { color: '#BCBCBC' }
  };

  seriesGroups: any = [
    {
      type: 'line',
      series: [
        { dataField: 'S&P 500', displayText: 'S&P 500' },
        { dataField: 'NASDAQ', displayText: 'NASDAQ' }
      ]
    }
  ];
}
