import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Wallet } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    current: 7500,
    target: 10000,
    category: "Savings",
    icon: Wallet,
    color: "text-success"
  },
  {
    id: 2,
    name: "Vacation Fund",
    current: 2800,
    target: 5000,
    category: "Travel",
    icon: Target,
    color: "text-primary"
  },
  {
    id: 3,
    name: "Investment Goal",
    current: 15000,
    target: 20000,
    category: "Investment",
    icon: TrendingUp,
    color: "text-accent"
  }
];

export function GoalTracker() {
  return (
    <Card className="shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Financial Goals</CardTitle>
        <p className="text-sm text-muted-foreground">Track your progress</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const Icon = goal.icon;
          
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${goal.color}`} />
                  <span className="font-medium text-foreground">{goal.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{progress.toFixed(1)}% complete</span>
                <span className={progress >= 100 ? "text-success font-medium" : "text-muted-foreground"}>
                  ${(goal.target - goal.current).toLocaleString()} remaining
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}