export const GetDashboardController = (req, res) => {
  return res.status(200).json({
    customers: {
      amount: 100,
      grow: 30
    },
    orders: {
      amount: 999,
      grow: 40
    },
    total_earning: {
      amount: 45000,
      grow: 15
    },
    total_revenue: {
      amount: 85000,
      sale: 60,
      target: 160000,
      week: 40000,
      month: 92000
    },
    last_six_revenue: [5000, 5000, 5000, 20000, 20000, 30000]
  });
}