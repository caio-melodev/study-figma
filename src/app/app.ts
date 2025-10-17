import {
  Component,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ɵresetJitOptions,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('figma-frontend-angular');

  @ViewChild('doughnutChart') doughnutChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('customChart1') customChart1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('customChart2') customChart2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('customChart3') customChart3!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['', '', ''],
        datasets: [
          {
            label: 'Afternoon',
            data: [40, 32, 28],
            backgroundColor: ['#5A6ACF', '#8593ED', '#C7CEFF'],
            borderColor: 'rgba(4, 1, 1, 1)',
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '75%', // Makes it look more doughnut-like
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [45, 35, 40, 30, 50, 55, 45, 35, 40, 30, 50, 55],
            backgroundColor: '#5A6ACF',
            borderColor: '#E6E8EC',
            borderWidth: 1,
            barPercentage: 0.6,
            categoryPercentage: 0.4,
          },
          {
            label: 'Test',
            data: [25, 45, 20, 40, 35, 25, 25, 45, 20, 40, 35, 25],
            backgroundColor: ['#E6E8EC'],
            barPercentage: 0.6,
            categoryPercentage: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Pode ser útil para controlar o tamanho
        plugins: {
          legend: {
            display: false, // Remove a legenda no topo
          },
          title: {
            display: false, // Remove o título principal
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Remove as linhas de grade verticais
            },
          },
          y: {
            display: false, // Remove completamente o eixo Y (incluindo valores e linhas de grade)
            grid: {
              display: false, // Garante que não há linhas de grade horizontais caso display: false não funcione completamente
            },
          },
        },
      },
    });

    new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['01', '02', '03', '04', '05', '06'],
        datasets: [
          {
            label: 'Last 6 days',
            data: [20, 18, 30, 28, 22, 39],
            borderColor: '#5A6ACF',
            backgroundColor: '#5A6ACF',
            fill: false,
            pointRadius: 0,                 // bolinhas
            pointBackgroundColor: '#5A6ACF',
          },
          {
            label: 'Last Week',
            data: [25, 31, 20, 34, 27, 30],
            borderColor: '#E6E8EC',    
            backgroundColor: '#E6E8EC',
            fill: false,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              font: { size: 12 },
            },
          },
          tooltip: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#A0A0A0',
              font: { size: 9 },
            },
          },
          y: {
            grid: { color: '#F1F2F7' },
            ticks: { display: false }, // tira os números do eixo Y
          },
        },
      },
    });

    const customCharts = [
      { ref: this.customChart1, value: 85, color: '#F99C30' },
      { ref: this.customChart2, value: 92, color: '#2FBFDE' },
      { ref: this.customChart3, value: 85, color: '#7b5cff' },
    ];

    customCharts.forEach(c => {
      new Chart(c.ref.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [c.value],
              backgroundColor: [c.color],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: '0%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
        },
      });
    });

  }
}
