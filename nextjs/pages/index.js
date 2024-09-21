import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import {
  SupervisorAccount,
  ShoppingCart,
  Face,
  MoveToInbox,
  Stream,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="1440px" height="1024px" bgcolor="white" overflow="hidden">
        <Grid container>
          <Grid item xs={2} bgcolor="white" boxShadow={1}>
            <Box p={2}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: 2,
                }}
              >
                <Avatar src="graph-1.png" />
                <Typography variant="h6">Dashboard</Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                <SupervisorAccount />
                <Typography variant="body1" color="textSecondary">
                  Users
                </Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                <ShoppingCart />
                <Typography variant="body1" color="textSecondary">
                  Orders
                </Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                <Avatar src="vector-3.svg" />
                <Typography variant="body1" color="textSecondary">
                  Products
                </Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundImage: "url(/chart-line.svg)",
                    backgroundSize: "cover",
                  }}
                />
                <Typography variant="body1" color="textSecondary">
                  Sales Report
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box display="flex" alignItems="center" p={2}>
              <Box display="flex" alignItems="center" width={252} height={55}>
                <Avatar
                  src="group-2-1863.png"
                  sx={{ width: 78, height: 55, mr: 2 }}
                />
                <Typography variant="h6">
                  <span style={{ color: "#000000" }}>Admin </span>
                  <span style={{ color: "#5b5d5c" }}>Dashboard</span>
                </Typography>
              </Box>
              <Box display="flex" ml={4}>
                <Typography variant="body1" mr={4}>
                  Home
                </Typography>
                <Typography
                  variant="body1"
                  mr={4}
                  sx={{ borderBottom: "2px solid black" }}
                >
                  Dashboard
                </Typography>
                <Typography variant="body1" mr={4}>
                  My Profile
                </Typography>
                <Typography variant="body1" mr={4}>
                  About Us
                </Typography>
              </Box>
              <Box ml="auto" display="flex" alignItems="center">
                <IconButton>
                  <Avatar src="vector.svg" />
                </IconButton>
                <IconButton>
                  <Avatar src="vector-2.svg" />
                </IconButton>
              </Box>
            </Box>
            <Grid container spacing={2} p={2}>
              <Grid item xs={8}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #f8f9fa",
                    boxShadow: "0px 4px 20px #ededed80",
                  }}
                >
                  <Typography variant="h6">Today’s Sales</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Sales Summery
                  </Typography>
                  <Grid container spacing={2} mt={2}>
                    <Grid item xs={3}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "#ffe2e5",
                        }}
                      >
                        <Typography variant="h4">$1k</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Total Sales
                        </Typography>
                        <Typography variant="caption" color="primary">
                          +8% from yesterday
                        </Typography>
                        <Avatar
                          src="subtract-2.svg"
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "#fa5a7d",
                            mt: 1,
                          }}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "#fff4de",
                        }}
                      >
                        <Typography variant="h4">50</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Total Order
                        </Typography>
                        <Typography variant="caption" color="primary">
                          +5% from yesterday
                        </Typography>
                        <Avatar
                          src="image.svg"
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "#ff947a",
                            mt: 1,
                          }}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "#e0f7fa",
                        }}
                      >
                        <Typography variant="h4">5</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Product Rented
                        </Typography>
                        <Typography variant="caption" color="primary">
                          +1,2% from yesterday
                        </Typography>
                        <Avatar
                          src="subtract.svg"
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "#00e095",
                            mt: 1,
                          }}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "#e1bee7",
                        }}
                      >
                        <Typography variant="h4">8</Typography>
                        <Typography variant="body2" color="textSecondary">
                          New Customers
                        </Typography>
                        <Typography variant="caption" color="primary">
                          0,5% from yesterday
                        </Typography>
                        <Avatar
                          src="union.svg"
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "#bf83ff",
                            mt: 1,
                          }}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #f8f9fa",
                    boxShadow: "0px 4px 20px #ededed80",
                  }}
                >
                  <Typography variant="h6">Most Rented Products</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Top 10 popular products this week
                  </Typography>
                  <List>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <ListItem button>
                          <ListItemIcon>
                            <Avatar src={`pngwing-com-${index + 1}.png`} />
                          </ListItemIcon>
                          <ListItemText primary="Louis Vuitton Monogram Bag" />
                        </ListItem>
                        {index < 5 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #f8f9fa",
                    boxShadow: "0px 4px 20px #ededed80",
                  }}
                >
                  <Typography variant="h6">Total Revenue</Typography>
                  <Box mt={2}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" color="textSecondary">
                        Monday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Tuesday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Wednesday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Thursday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Friday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Saturday
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sunday
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Box
                        width={35}
                        height={69}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={84}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={104}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={78}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={59}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={83}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                      <Box
                        width={35}
                        height={104}
                        bgcolor="#0094ff"
                        borderRadius={1}
                      />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #f8f9fa",
                    boxShadow: "0px 4px 20px #ededed80",
                  }}
                >
                  <Typography variant="h6">
                    Rented products by categories
                  </Typography>
                  <Box mt={2} display="flex" justifyContent="center">
                    <Avatar
                      src="ellipse-3.svg"
                      sx={{ width: 146, height: 146 }}
                    />
                  </Box>
                  <Box mt={2}>
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Box
                          width={16}
                          height={16}
                          bgcolor="primary.main"
                          borderRadius={1}
                          mr={1}
                        />
                        <Typography variant="body2">Louis Vuitton</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body2">54%</Typography>
                        <Typography variant="body2" color="green">
                          ↑
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Box display="flex" alignItems="center">
                        <Box
                          width={16}
                          height={16}
                          bgcolor="green"
                          borderRadius={1}
                          mr={1}
                        />
                        <Typography variant="body2">Dior</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body2">20%</Typography>
                        <Typography variant="body2" color="green">
                          ↑
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Box display="flex" alignItems="center">
                        <Box
                          width={16}
                          height={16}
                          bgcolor="secondary.main"
                          borderRadius={1}
                          mr={1}
                        />
                        <Typography variant="body2">Hermes</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body2">26%</Typography>
                        <Typography variant="body2" color="secondary">
                          ↓
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;