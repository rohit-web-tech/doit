import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {
        labels: ['Pending', 'Done'],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: ['#8FD14F', '#184B27'],
            },
        ],
    };

    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}

export default DoughnutChart;
