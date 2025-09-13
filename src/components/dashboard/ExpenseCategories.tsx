import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const categoryData = [
  { name: "Food & Dining", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Transportation", value: 20, color: "hsl(var(--chart-2))" },
  { name: "Shopping", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Bills & Utilities", value: 20, color: "hsl(var(--chart-4))" },
  { name: "Entertainment", value: 10, color: "hsl(var(--chart-5))" },
];

export function ExpenseCategories() {
  return (
    <Card className="shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">AI-Categorized Expenses</CardTitle>
        <p className="text-sm text-muted-foreground">Automatically categorized this month</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Percentage']}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {categoryData.map((category, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-foreground">{category.name}</span>
              </div>
              <span className="text-muted-foreground">{category.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}