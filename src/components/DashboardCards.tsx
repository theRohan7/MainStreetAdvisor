'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";
import { TrendingUp, TrendingDown, AlertTriangle, Users, DollarSign, PieChart as PieChartIcon, Building2, Banknote, Shield, Briefcase } from "lucide-react";

export function DashboardCards() {
  // Mock data for charts and metrics
  const householdsData = [
    { segment: "High Net Worth", count: 45, engagement: "Active" },
    { segment: "Mass Affluent", count: 128, engagement: "Active" },
    { segment: "Emerging Wealth", count: 76, engagement: "Moderate" },
  ];

  const accountsData = [
    { type: "Retirement", count: 156, value: "$12.4M", icon: Shield, color: "text-blue-600" },
    { type: "Brokerage", count: 89, value: "$8.7M", icon: Briefcase, color: "text-green-600" },
    { type: "Trust", count: 23, value: "$4.2M", icon: Banknote, color: "text-purple-600" },
  ];

  const balanceTrend = [
    { month: "Jan", value: 25200000, displayValue: "$25.2M" },
    { month: "Feb", value: 26100000, displayValue: "$26.1M" },
    { month: "Mar", value: 25800000, displayValue: "$25.8M" },
    { month: "Apr", value: 27200000, displayValue: "$27.2M" },
    { month: "May", value: 28500000, displayValue: "$28.5M" },
    { month: "Jun", value: 29100000, displayValue: "$29.1M" },
  ];

  const exposureData = [
    { name: "Equities", value: 65, color: "#8884d8" },
    { name: "Fixed Income", value: 25, color: "#82ca9d" },
    { name: "Alternatives", value: 8, color: "#ffc658" },
    { name: "Cash", value: 2, color: "#ff7300" },
  ];

  const topHoldings = [
    { symbol: "SPY", name: "SPDR S&P 500 ETF", allocation: "12.4%" },
    { symbol: "BND", name: "Vanguard Total Bond Market", allocation: "8.7%" },
    { symbol: "VTI", name: "Vanguard Total Stock Market", allocation: "7.2%" },
    { symbol: "QQQ", name: "Invesco QQQ Trust", allocation: "6.8%" },
  ];

  const wealthAlerts = [
    { type: "Risk", message: "Portfolio drift detected in 3 accounts", severity: "medium" },
    { type: "Opportunity", message: "Tax loss harvesting available", severity: "low" },
    { type: "Action", message: "Rebalancing required for Johnson Trust", severity: "high" },
  ];

  const institutionData = [
    { name: "Schwab", allocation: 45, assets: "$12.8M", color: "#0369a1" },
    { name: "Fidelity", allocation: 30, assets: "$8.6M", color: "#059669" },
    { name: "TD Ameritrade", allocation: 25, assets: "$7.1M", color: "#dc2626" },
  ];

  const driftStatusData = [
    { name: "Aligned", value: 85.1, count: 228, color: "#22c55e" },
    { name: "Minor Drift", value: 11.9, count: 32, color: "#eab308" },
    { name: "Major Drift", value: 3.0, count: 8, color: "#ef4444" },
  ];

  const advisorData = [
    { name: "Sarah Johnson", branch: "Downtown", clients: 45, aum: "$15.2M" },
    { name: "Michael Chen", branch: "Westside", clients: 38, aum: "$12.8M" },
    { name: "Emily Rodriguez", branch: "North", clients: 42, aum: "$11.4M" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-[40px]">
      {/* Households Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Households
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-2xl font-semibold">249</div>
            {householdsData.map((item) => (
              <div key={item.segment} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{item.segment}</span>
                <div className="flex items-center gap-2">
                  <span>{item.count}</span>
                  <Badge variant={item.engagement === "Active" ? "default" : "secondary"} className="text-xs">
                    {item.engagement}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accounts Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Accounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-2xl font-semibold">268</div>
            <div className="space-y-1">
              {accountsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.type}>
                    <div className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${item.color}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{item.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{item.count}</div>
                        <div className="text-xs text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                    {index < accountsData.length - 1 && (
                      <div className="h-px bg-border mx-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Balance Card with Trend */}
      <Card className="md:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            AUM Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">$29.1M</span>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+2.3%</span>
              </div>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceTrend} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#666' }}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      fontSize: '12px'
                    }}
                    formatter={(value, name) => [balanceTrend.find(item => item.value === value)?.displayValue, 'AUM']}
                    labelFormatter={(label) => `${label} 2025`}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={3}
                    fill="url(#balanceGradient)"
                    dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2, fill: '#fff' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asset Exposure Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5" />
            Asset Exposure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={exposureData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {exposureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {exposureData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-muted-foreground">{item.name}</span>
                <span className="text-xs font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Holdings Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Top Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topHoldings.map((holding) => (
              <div key={holding.symbol} className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-sm">{holding.symbol}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[120px]">
                    {holding.name}
                  </div>
                </div>
                <div className="text-sm font-medium">{holding.allocation}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Wealth Alerts Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Wealth Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {wealthAlerts.map((alert, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full h-auto p-3 justify-start hover:bg-muted/50 transition-colors"
                onClick={() => {
                  console.log(`Clicked on ${alert.type} alert:`, alert.message);
                  // Handle alert click - could open a modal, navigate, etc.
                }}
              >
                <div className="flex items-start gap-3 w-full">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    alert.severity === 'high' ? 'bg-red-500' : 
                    alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="text-left">
                    <div className="text-sm font-medium">{alert.type}</div>
                    <div className="text-xs text-muted-foreground">{alert.message}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Institution Allocation Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Institution Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={institutionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="allocation"
                >
                  {institutionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {institutionData.map((institution) => (
              <div key={institution.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: institution.color }}
                ></div>
                <span className="text-xs text-muted-foreground">{institution.name}</span>
                <span className="text-xs font-medium">{institution.allocation}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Drift Status Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Drift Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={driftStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {driftStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {driftStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-muted-foreground">{item.name}</span>
                <span className="text-xs font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advisors Card */}
      <Card className="xl:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>Advisors & Branches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Advisor</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Clients</TableHead>
                <TableHead>AUM</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advisorData.map((advisor) => (
                <TableRow key={advisor.name}>
                  <TableCell className="font-medium">{advisor.name}</TableCell>
                  <TableCell>{advisor.branch}</TableCell>
                  <TableCell>{advisor.clients}</TableCell>
                  <TableCell>{advisor.aum}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}