import LineChart from '../charts/linechart';
import GaugeChart from '../charts/gaugeChart';

const PriceTracker = () => {

  const lines4data = [
    { name: "Page A", buyBox: 4000, amazon: 2400, fba: 2600, fbm: 3000, amt: 2400 },
    { name: "Page B", buyBox: 3000, amazon: 1398, fba: 2210, fbm: 2900, amt: 2210 },
    { name: "Page C", buyBox: 2000, amazon: 9800, fba: 2290, fbm: 1800, amt: 2290 },
    { name: "Page D", buyBox: 6000, amazon: 3800, fba: 8290, fbm: 800, amt: 2290 },
  ];
  const line4 = [
    { dataKey: "buyBox", stroke: "#8884d8", activeDot: { r: 8 } },  // Buy Box
    { dataKey: "amazon", stroke: "#82ca9d" },                        // Amazon
    { dataKey: "fba", stroke: "#ffc658" },                           // FBA
    { dataKey: "fbm", stroke: "#ff7300" },                           // FBM (New Line)
  ];

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ]
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">Price Tracker</h1>


      <div className="mb-8 p-4 bg-gray-50 border-2 border-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Price History</h2>
        <div className="space-x-2">
          <button className="px-3 py-1 rounded-md bg-gray-200">7 days</button>
          <button className="px-3 py-1 rounded-md bg-gray-200">30 days</button>
          <button className="px-3 py-1 rounded-md bg-blue-500 text-white">12 months</button>
        </div>
      </div>
      <div className="">

      <LineChart data={lines4data} lines={line4} width = {1000} height = {300}/>

      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<h3 className="text-lg font-medium mb-4">Price Volatility Indicator</h3>
        <div className=" bg-gray-50 h-72 border-2 border-gray-100 shadow-md rounded-lg">
        <h3 className="text-md px-4 py-2 font-medium mb-4">Price Volatility Indicator</h3>
        <GaugeChart 
           data={GaugeData} 
           cx={250} 
           cy={200} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={250} 
          />
        </div>
</div>

<div>
<h3 className="text-lg font-medium mb-4">Price Volatility Indicator</h3>
        <div className="bg-gray-50 h-72 border-2 border-gray-100 shadow-md rounded-lg">
        <GaugeChart 
           data={GaugeData} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={250} 
          />
        </div>
      </div>

    </div>


    </div>
  );
};

export default PriceTracker; 