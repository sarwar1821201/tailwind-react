import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
 
    const studentGrades = [
        {
          id: 1,
          name: "John",
          physics: 80,
          chemistry: 75,
          math: 90
        },
        {
          id: 2,
          name: "Mary",
          physics: 90,
          chemistry: 85,
          math: 80
        },
        {
          id: 3,
          name: "Peter",
          physics: 60,
          chemistry: 70,
          math: 75
        },
        {
          id: 4,
          name: "Samantha",
          physics: 85,
          chemistry: 80,
          math: 95
        },
        {
          id: 5,
          name: "David",
          physics: 75,
          chemistry: 60,
          math: 80
        },
        {
          id: 6,
          name: "Linda",
          physics: 95,
          chemistry: 90,
          math: 85
        },
        {
          id: 7,
          name: "Steven",
          physics: 70,
          chemistry: 75,
          math: 70
        },
        {
          id: 8,
          name: "Emily",
          physics: 80,
          chemistry: 85,
          math: 90
        },
        {
          id: 9,
          name: "Kevin",
          physics: 65,
          chemistry: 75,
          math: 80
        },
        {
          id: 10,
          name: "Alice",
          physics: 90,
          chemistry: 85,
          math: 95
        },
        {
          id: 11,
          name: "Tom",
          physics: 70,
          chemistry: 65,
          math: 75
        },
        {
          id: 12,
          name: "Sarah",
          physics: 95,
          chemistry: 90,
          math: 95
        }
      ];
      


    return (
        <div>
            
    <LineChart
     width={1000}
     height={300}
     data={studentGrades}
    >
   <Line dataKey='physics'> 

   </Line>

   <Line  stroke="#8884d8" dataKey='math'>  </Line>
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
   
    </LineChart>

        </div>
    );
};

export default DashBoard;