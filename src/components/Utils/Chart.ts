import { Chart } from 'chart.js';
type chartProperty = {
    labels?: string[];
    datasets: number[];
    backgroundColor?: string[];
    context: CanvasRenderingContext2D | HTMLCanvasElement | null;

}
export class ChartClass {
    labels: string[];
    datasets: number[];
    //create a background color based on the length of the data
    backgroundColor: any[] = [];

    context: CanvasRenderingContext2D | HTMLCanvasElement | null;
    constructor({ labels, datasets, backgroundColor, context }: chartProperty) {
        this.labels = labels ?? []
        this.datasets = datasets
        this.backgroundColor = backgroundColor ?? this.labels.map(() => randomColor());
        this.context = context
    }
    createPieChart() {
        if (this.context === null) return
        new Chart(this.context, {
            type: 'pie',
            data: {
                labels: this.labels,
                datasets: [{
                    data: this.datasets,
                    backgroundColor: this.backgroundColor
                }]
            },
            options: {

                plugins: {
                    legend: {
                        position: "center",

                    }
                }
            }
        })
    }
    createLineChart() {
        if (this.context === null) return
        new Chart(this.context, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: [{
                    data: this.datasets,
                    backgroundColor: this.backgroundColor
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "top",

                    }
                }
            }
        })
    }
    createDoughnutChart() {
        if (this.context === null) return
        new Chart(this.context, {
            type: 'doughnut',
            data: {
                labels: this.labels,
                datasets: [{
                    data: this.datasets,
                    backgroundColor: this.backgroundColor
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "center",

                    }

                }
            }
        })
    }
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};