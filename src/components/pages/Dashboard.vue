<template>
    <div class="dashboard">
        <div class="container">
            <h1>{{ msg }}</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Sales</h5>
                            <p class="card-text">$10,000</p>
                        </div>
                    </div>
                    <canvas ref="chart3"></canvas>
                </div>
                <div class="col-md-6">
                    <canvas ref="chart"></canvas>
                    <canvas ref="chart2"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { ref, onMounted } from 'vue';
import { ChartClass } from '../Utils/Chart.ts'

const chart = ref<HTMLCanvasElement | null>(null);
const chart2 = ref<HTMLCanvasElement | null>(null);
const chart3 = ref<HTMLCanvasElement | null>(null);
const backgroundColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)'
];
const datasets = [10, 20, 30]
const labels = ['Red', 'Blue', 'Yellow']

onMounted(() => {
    if (chart.value) {
        const ctx = chart.value.getContext('2d');
        new ChartClass({ context: ctx, labels: labels, datasets: datasets, backgroundColor }).createDoughnutChart();
    }
    if (chart2.value) {
        const ctx = chart2.value.getContext('2d');
        new ChartClass({ context: ctx, labels: labels, datasets: datasets, backgroundColor }).createPieChart();
    }
    if (chart3.value) {
        const ctx = chart3.value.getContext('2d');
        new ChartClass({ context: ctx, labels: labels, datasets: datasets, backgroundColor }).createLineChart();
    }
});
</script>

<style>
/* Add your custom styles here */
</style>
