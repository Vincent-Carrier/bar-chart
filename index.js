import $ from 'jquery'

function maxOf(arr) {
  return arr.slice().sort((a, b) =>  b.value - a.value)[0].value
}

function drawBarChart(data, options, element) {
  const $chartContainer = $(element).addClass('chart-container')

  const max = maxOf(data)
  const normalized = data.map(e => e.value / max)
  const $chart = $('<div class="chart"/>')
  const $bars = normalized.map(n =>
    $('<div class="bar"/>').height(`${n * 90}%`)
  )
  $chart.html($bars)

  const $yAxis = $('<div class="y-axis"/>')
  const step = max / 4
  const yTicks = [4,3,2,1].map((n) => n * step)
  const $yTicks = yTicks.map(n => $(`<div>${n} -</div>`))
  $yAxis.html($yTicks)

  const $xAxis = $('<div class="x-axis"/>')
  const $xTicks = data.map(e => $(`<div>${e.label}</div>`))
  $xAxis.html($xTicks)

  const $title = $('<h1 class="title">My Title</h1>')

  $chartContainer.append($title, $chart, $yAxis, $xAxis)
}

const data = [
  {value: 25, label: 'first'},
  {value: 18, label: 'second'},
  {value: 20, label: 'third'},
  {value: 12, label: 'fourth'},
  {value: 22, label: 'fifth'},
  {value: 6, label: 'sixth'},
]

$(document).ready(() =>
  drawBarChart(data, {}, '#root')
)