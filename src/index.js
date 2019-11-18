import $ from 'jquery';
import './style.scss';

function maxOf(arr) {
  return arr.slice().sort((a, b) => b.value - a.value)[0].value;
}

function buildYAxis(max) {
  const $yAxis = $('<div class="y-axis"/>');
  const step = max / 5;
  const yTicks = [5, 4, 3, 2, 1, 0].map(n => n * step);
  const $yTicks = yTicks.map(n => `<div>${n} -</div>`);
  return $yAxis.html($yTicks);
}

function buildXAxis(data) {
  const $xAxis = $('<div class="x-axis"/>');
  const $xTicks = data.map(e => $(`<div>${e.label}</div>`));
  return $xAxis.html($xTicks);
}

function buildGraph(data, max) {
  const normalized = data.map(e => e.value / max);
  const $chart = $('<div class="chart"/>');
  const $bars = normalized.map(n =>
    $('<div class="bar"/>').height(`${n * 95}%`)
  );
  return $chart.html($bars);
}

export function drawBarChart(data, options, element) {
  if ($.isNumeric(data[0])) {
    data = data.map(e => ({ value: e, label: '' }));
  }
  const maxY = maxOf(data);

  const $chartContainer = $(element).addClass('chart-container')
    .height(options.height)
    .width(options.width);
  const $title = $(`<h1 class="chart-title">${options.title}</h1>`);
  const $graph = buildGraph(data, maxY);
  const $yAxis = buildYAxis(maxY);
  const $xAxis = buildXAxis(data);

  $chartContainer.append($title, $graph, $yAxis, $xAxis);
}
