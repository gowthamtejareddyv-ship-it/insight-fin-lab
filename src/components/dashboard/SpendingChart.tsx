import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", spending: 2400, budget: 3000, predicted: 2600 },
  { month: "Feb", spending: 1398, budget: 3000, predicted: 2200 },
  { month: "Mar", spending: 2800, budget: 3000, predicted: 2900 },
  { month: "Apr", spending: 3908, budget: 3000, predicted: 3100 },
  { month: "May", spending: 4800, budget: 3000, predicted: 3400 },
  { month: "Jun", spending: 3490, budget: 3000, predicted: 3200 },
];

export function SpendingChart() {
  return (
    <Card className="col-span-1 md:col-span-2 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spending Analysis & Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <Legend />
              <Bar 
                dataKey="spending" 
                name="Actual Spending"
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="predicted" 
                name="AI Prediction"
                fill="hsl(var(--chart-2))" 
                radius={[4, 4, 0, 0]}
                opacity={0.7}
              />
              <Bar 
                dataKey="budget" 
                name="Budget"
                fill="hsl(var(--chart-3))" 
                radius={[4, 4, 0, 0]}
                opacity={0.5}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}