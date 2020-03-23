import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as c3 from 'c3';

import { App } from './components/App';

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById('app')
);

let chart = c3.generate({
    bindto: '#chart',
    data:{
        type:'donut',
        columns:[
            ['いい感じ',50],
            ['ピンとこない',50]
        ]
    },
    donut:{
        title: 'TypeScriptの印象は?'
    }
});

setInterval(() => {
    chart.load({
     columns: [
         ['いい感じ', 30],
         ['ピンとこない', 30],
         ['最高', 30]
     ]
    });
 }, 3000);

 setInterval(()=> {
     chart.unload({
         ids: ['最高','ピンとこない']
     });
 }, 5000);