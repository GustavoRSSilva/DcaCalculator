/**
 *
 * Canvas
 *
 */
import React from 'react';

import { Point } from 'types/common';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import CanvasJSReact from 'assets/canvajs/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface Props {
    points: Point[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Canvas(props: Props) {
        const options = {
          title: {
            text: "Basic Column Chart in React"
          },
          data: [{				
                    type: "column",
                    dataPoints: [
                        { label: "Apple",  y: 10  },
                        { label: "Orange", y: 15  },
                        { label: "Banana", y: 25  },
                        { label: "Mango",  y: 30  },
                        { label: "Grape",  y: 28  }
                    ]
           }]
       }
            
       return (
          <div>
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
          </div>
        );
      }
}

export default Canvas;
