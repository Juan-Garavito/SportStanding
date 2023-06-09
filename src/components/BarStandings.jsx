import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export function BarStandings({data, index, categories, title, color}){

    return (
        <div className='cont_bar'>
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} 
          barSize={50}>
            <XAxis dataKey={index}  scale="point" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="1 1" />
            <Bar dataKey={categories} fill={color} background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
       </div>
    )
}