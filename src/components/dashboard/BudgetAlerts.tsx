import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, CheckCircle, Brain } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Budget Alert: Food & Dining",
    message: "You've spent 85% of your monthly dining budget. Consider cooking at home more often.",
    icon: AlertTriangle,
    severity: "high"
  },
  {
    id: 2,
    type: "info",
    title: "AI Insight: Spending Pattern",
    message: "Your weekend spending is 40% higher than weekdays. Setting weekend budgets could help.",
    icon: Brain,
    severity: "medium"
  },
  {
    id: 3,
    type: "success",
    title: "Goal Achievement",
    message: "Congratulations! You're on track to meet your savings goal 2 months early.",
    icon: CheckCircle,
    severity: "low"
  },
  {
    id: 4,
    type: "info",
    title: "Predictive Alert",
    message: "Based on current trends, you may exceed your monthly budget by $200. Consider reducing discretionary spending.",
    icon: TrendingUp,
    severity: "medium"
  }
];

export function BudgetAlerts() {
  return (
    <Card className="shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Smart Alerts & Insights</CardTitle>
        <p className="text-sm text-muted-foreground">AI-powered financial notifications</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const alertStyles = {
            warning: "border-warning/20 bg-warning/5",
            success: "border-success/20 bg-success/5", 
            info: "border-primary/20 bg-primary/5"
          };
          
          const badgeVariants = {
            high: "destructive",
            medium: "secondary",
            low: "outline"
          } as const;
          
          return (
            <Alert key={alert.id} className={alertStyles[alert.type as keyof typeof alertStyles]}>
              <Icon className="h-4 w-4" />
              <AlertDescription>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{alert.title}</p>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                  <Badge variant={badgeVariants[alert.severity]} className="text-xs">
                    {alert.severity}
                  </Badge>
                </div>
              </AlertDescription>
            </Alert>
          );
        })}
      </CardContent>
    </Card>
  );
}