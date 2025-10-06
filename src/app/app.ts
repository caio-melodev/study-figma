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

  ngAfterViewInit() {
    new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['', '', ''],
        datasets: [
          {
            label:'Afternoon',
            data: [40, 32, 28],
            backgroundColor: ['#5A6ACF', '#8593ED', '#C7CEFF'],
            borderColor: 'rgba(4, 1, 1, 1)',
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: false,
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
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          { label: 'Dataset1', data: [30, 20, 15], borderColor: 'red' },
          { label: 'Dataset2', data: [20, 60, 15], borderColor: 'purple' },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: { min: 10, max: 90 },
        },
      },
    });
  }
}
