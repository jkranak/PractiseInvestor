import {useState} from 'react';
import Chart from 'react-apexcharts';
import {Paper, Box, Typography} from '@material-ui/core';
import {ChartI} from '../../../../interfaces/Chart'

interface Props {
  cash: number
  portfolioValue: number
  holdingsValue: number
  b: string
}

export const PieChart = ({ cash, portfolioValue, holdingsValue }: Props) => {
  const [chart, setChart] = useState<ChartI>({
    series: [Number(holdingsValue?.toFixed(2)), Number(cash?.toFixed(2))],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Investments($)', 'Cash($)'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  return (
      <Box width={0.27}>
      <Paper id="chart" style={{width: "25vw", padding: "3rem"}} >
        <Typography variant="h6" data-testid="pieChart-portfolioValue" style={{ textAlign: 'center'}}>Total Value: ${portfolioValue}</Typography>
        <Typography variant="h6" data-testid="pieChart-cash" style={{ textAlign: 'center'}} >Your Funds: ${cash?.toFixed(2)}</Typography>
        <Chart options={chart.options} series={[Number(holdingsValue?.toFixed(2)), Number(cash?.toFixed(2))]} type="pie" width={380} data-testid="pieChart-chart"/>
      </Paper>
    </Box>
  )
}

