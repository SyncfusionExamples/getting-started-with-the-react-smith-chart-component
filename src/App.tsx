import { SmithchartComponent, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, TooltipRender, SmithchartLegend, Inject } from '@syncfusion/ej2-react-charts';
import './App.css';

function App() {
  return (
    <div className="App">
      <SmithchartComponent title={{text:'Impedance Transmission'}}
      legendSettings={{visible: true }} >  
        <Inject services={[SmithchartLegend, TooltipRender]}/>    
        <SmithchartSeriesCollectionDirective>
          <SmithchartSeriesDirective 
           points={[
            { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
            { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
            { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
            { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
            { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
            { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
            { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 }
          ]}
          marker={{visible: true, dataLabel: { visible: true } }} name='Transmission1'
          tooltip={{visible: true}}
          >

          </SmithchartSeriesDirective>
          <SmithchartSeriesDirective
           dataSource={[
            { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
            { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
            { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
            { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 }
          ]} 
          resistance='resistance' reactance='reactance' marker={{visible: true }}
          name='Transmission2' tooltip={{visible: true}}
          >

          </SmithchartSeriesDirective>
        </SmithchartSeriesCollectionDirective>
      </SmithchartComponent>
    </div>
  );
}

export default App;
