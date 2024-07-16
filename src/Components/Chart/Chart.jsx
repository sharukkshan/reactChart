import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Chart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const [homeValue, setHomeValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(700);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(1);

  const totalLoanMonths = tenure * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment = loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths) / (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: `Ratio of Principal and Interest`,
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container">
      <div className="input-section">
        <div className='input-items'>
          <label>Home Value</label>
          <label>${homeValue}</label>
          <input type="range" min="1000" max="10000" value={homeValue} onChange={(e) => setHomeValue(e.target.value)} />
          <div className='range-label'>
            <label>$1000</label>
            <label>$10000</label>
          </div>
        </div>
        <div className='input-items'>
          <label>Down Payment </label>
          <label>${downPayment}</label>
          <input type="range" min="0" max="1000" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
          <div className='range-label'>
            <label>$0</label>
            <label>$1000</label>
          </div>
        </div>
        <div className='input-items'>
          <label>Loan Amount </label>
          <label>${loanAmount}</label>
          <input type="range" min="0" max="1000" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
          <div className='range-label'>
            <label>$0</label>
            <label>$1000</label>
          </div>
        </div>
        <div className='input-items'>
          <label>Interest Rate in %</label>
          <span>{interestRate}%</span>
          <input type="range" min="2" max="18" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          <div className='range-label'>
            <label>2%</label>
            <label>18%</label>
          </div>
        </div>
        <div className='tenure-div'>
          <label>Tenure </label>
          <select value={tenure} onChange={(e) => setTenure(e.target.value)}>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
          </select>
        </div>
      </div>
      <div className="chart-section">
        <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
        <div className="chart-wrapper">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;