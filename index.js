import $ from 'jquery'

function maxOf(arr) {
  let max = 0
  for (const e of arr) {
    if (e > max) max = e
  }
  return max
}

function drawBarChart(data, options, element) {
  const $chartContainer = $(element).addClass('chart-container')

  const max = maxOf(data)
  const normalized = data.map(e => e / max)
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
  const xTicks = ['first', 'second', 'third', 'fourth']
  const $xTicks = xTicks.map(str => $(`<div>${str}</div>`))
  $xAxis.html($xTicks)

  const $title = $('<h1 class="title">My Title</h1>')

  $chartContainer.append($title, $chart, $yAxis, $xAxis)
}

$(document).ready(() =>
  drawBarChart([25,18.75,12.5,6.25], {}, '#root')
)