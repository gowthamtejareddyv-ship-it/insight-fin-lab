import { MetricCard } from "@/components/dashboard/MetricCard";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { ExpenseCategories } from "@/components/dashboard/ExpenseCategories";
import { GoalTracker } from "@/components/dashboard/GoalTracker";
import { BudgetAlerts } from "@/components/dashboard/BudgetAlerts";
import { DollarSign, TrendingUp, CreditCard, Target, Brain, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FinanceAI Pro
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            AI-Powered Financial Intelligence Dashboard
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Balance"
            value="$24,580"
            change="+12.5% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Monthly Spending"
            value="$3,240"
            change="+8.2% from last month"
            changeType="negative"
            icon={CreditCard}
          />
          <MetricCard
            title="Savings Rate"
            value="22%"
            change="+3.1% improvement"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Goals Progress"
            value="68%"
            change="On track for all goals"
            changeType="positive"
            icon={Target}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {/* Spending Chart - Takes 2 columns on lg+ */}
          <div className="lg:col-span-2">
            <SpendingChart />
          </div>
          
          {/* Expense Categories */}
          <div className="lg:col-span-1">
            <ExpenseCategories />
          </div>
        </div>

        {/* Secondary Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Goal Tracker */}
          <GoalTracker />
          
          {/* Budget Alerts */}
          <BudgetAlerts />
        </div>

        {/* AI Insights Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">AI-Powered Insights</h3>
          </div>
          <p className="text-muted-foreground mb-3">
            Our advanced AI analyzes your spending patterns, predicts future expenses, and provides personalized recommendations to optimize your financial health.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-foreground">Automated expense categorization with 95% accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Predictive spending analysis for next 3 months</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-foreground">Smart budget alerts and goal tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;