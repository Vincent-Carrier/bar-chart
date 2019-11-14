# BarChart.js 
BarChart.js is a minimalist library for making HTML&CSS-based bar graphs. Its only dependency is jQuery.

Bar charts can easily be customized by passing an `options` object and/or by adding your own CSS.

# Installation

`npm install barchart` or `yarn add barchart`

# Usage

```
import { drawBarChart } from 'barchart'

const revenue = [
  { value: 1234, label: 'Q1' },
  { value: 5678, label: 'Q2' },
  { value: 9012, label: 'Q4' },
  { value: 3456, label: 'Q4' },
]

const options = {
  width: '500px',
  height: '400px',
}

drawBarChart(revenue, options, '#my-chart')
```

Result:

# Building
You can preview the project by running `npm run dev` or `yarn dev`. It uses Parcel.js as its build tool.
