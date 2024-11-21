"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const BusinessPlanVisualization = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const revenueStreams = [
    { name: "Shisha", value: 60 },
    { name: "Drinks", value: 25 },
    { name: "Food", value: 10 },
    { name: "Events", value: 5 },
  ];

  const dailyRevenue = [
    { day: "Mon", revenue: 100000 },
    { day: "Tue", revenue: 100000 },
    { day: "Wed", revenue: 100000 },
    { day: "Thu", revenue: 120000 },
    { day: "Fri", revenue: 180000 },
    { day: "Sat", revenue: 200000 },
    { day: "Sun", revenue: 200000 },
  ];

  const targetMarket = [
    { name: "Expat Professionals", value: 40 },
    { name: "International Students", value: 30 },
    { name: "Local Japanese", value: 20 },
    { name: "Tourists", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (!mounted) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <Skeleton className="h-4 w-[250px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <Skeleton className="h-[300px] w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Shisha Cafe Business Plan Overview</CardTitle>
          <CardDescription>
            Financial projections and implementation timeline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Revenue Streams */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueStreams}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                        dataKey="value"
                      >
                        {revenueStreams.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Target Market */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Target Market Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={targetMarket}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                        dataKey="value"
                      >
                        {targetMarket.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Daily Revenue Targets */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">
                  Daily Revenue Targets (¥)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyRevenue}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="revenue" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Initial Investment Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">¥18M</p>
                <p className="text-sm text-muted-foreground">($121,621)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Monthly Revenue Target
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">¥3.5M</p>
                <p className="text-sm text-muted-foreground">($23,649)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Break-even Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12-15</p>
                <p className="text-sm text-muted-foreground">months</p>
              </CardContent>
            </Card>
          </div>

          {/* Implementation Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Phase 1: Months 1-6
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Establish shisha service</li>
                    <li>Build core customer base</li>
                    <li>Launch loyalty program</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Phase 2: Months 7-12
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Add coworking elements</li>
                    <li>Expand seating options</li>
                    <li>Improve infrastructure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Phase 3: Year 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Premium coffee integration</li>
                    <li>Menu expansion</li>
                    <li>Interior refinement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default BusinessPlanVisualization;
