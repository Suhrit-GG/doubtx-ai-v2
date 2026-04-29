'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart({ data }: any) {
  const subjects = ['Maths', 'Science', 'English']

  const counts = subjects.map(
    (s) => data.filter((d: any) => d.subject === s).length
  )

  return (
    <div style={{ maxWidth: '300px', marginTop: '20px' }}>
      <Pie
        data={{
          labels: subjects,
          datasets: [
            {
              data: counts
            }
          ]
        }}
      />
    </div>
  )
}