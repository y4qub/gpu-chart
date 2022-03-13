import faker from '@faker-js/faker'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import { Line } from 'react-chartjs-2'
import { MONTHS } from '../../helpers/months'
// import logo from './logo.svg'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  zoomPlugin
)

export const options: ChartOptions = {
  transitions: {
    zoom: {
      animation: {
        duration: 1000,
        easing: 'easeOutCubic',
      },
    },
    pan: {
      animation: {
        duration: 1000,
        easing: 'easeOutCubic',
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'GPU Price Chart',
    },
    zoom: {
      limits: { x: { min: 0, max: 12, minRange: 3 } },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: 'x',
      },
      pan: {
        enabled: true,
        mode: 'x',
      },
    },
  },
}

export const data: ChartData<'line', number[], string> = {
  labels: MONTHS,
  datasets: [
    {
      label: 'AMD',
      data: MONTHS.map(() => faker.datatype.number({ min: 800, max: 1400 })),
      backgroundColor: 'red',
      borderColor: 'red',
      tension: 0.3,
    },
    {
      label: 'Nvidia',
      data: MONTHS.map(() => faker.datatype.number({ min: 700, max: 1100 })),
      backgroundColor: 'blue',
      tension: 0,
    },
  ],
}

export function Graph() {
  return <Line options={options} data={data} />
}
