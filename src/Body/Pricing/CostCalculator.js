import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Counter from "./Counter.js";
import FormDialog from "./Form";

export default function CostCalculator() {
  const [totalCost, setTotalCost] = useState(15000);
  const [openDialog, setOpenDialog] = useState(false);
  const countValues = [15000, 5, 0, 5, 1];
  const cost = [
    {
      type: "Exterior buildings",
      price: "$1000 each",
      tag: 1000,
      counter: (
        <Counter
          minValue={5}
          onIncrement={() => {
            setTotalCost(totalCost + 1000);
          }}
          onDecrement={() => {
            setTotalCost(totalCost - 1000);
          }}
          onCountChange={(count) => {
            countValues[1] = count;
          }}
        />
      ),
    },
    {
      type: "Interiors",
      price: "$1500 each",
      tag: 1500,
      counter: (
        <Counter
          minValue={0}
          onIncrement={() => {
            setTotalCost(totalCost + 1500);
          }}
          onDecrement={() => {
            setTotalCost(totalCost - 1500);
          }}
          onCountChange={(count) => {
            countValues[2] = count;
          }}
        />
      ),
    },
    {
      type: "Info Hubs",
      price: "$500 each",
      tag: 500,
      counter: (
        <Counter
          minValue={5}
          onIncrement={() => {
            setTotalCost(totalCost + 500);
          }}
          onDecrement={() => {
            setTotalCost(totalCost - 500);
          }}
          onCountChange={(count) => {
            countValues[3] = count;
          }}
        />
      ),
    },
    {
      type: "Server",
      price: "$8000/yr",
      tag: 8000,
      counter: (
        <Counter
          minValue={1}
          onIncrement={() => {
            setTotalCost(totalCost + 8000);
          }}
          onDecrement={() => {
            setTotalCost(totalCost - 8000);
          }}
          onCountChange={(count) => {
            countValues[4] = count;
          }}
        />
      ),
    },
  ];
  return (
    <div className="pt-48 pb-48">
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid>
          <div className="pricing-title pb-48">
            For those that are looking to build their entire campus.
          </div>
        </Grid>
        <Grid
          className="base-container"
          style={{
            background:
              "linear-gradient(317deg, rgba(255, 126, 85, 0.97) 0%, rgba(255, 85, 85, 0.79) 132.31%)",
          }}
        >
          <Box>
            <div className="base-title" style={{ color: "white" }}>
              Cost Calculator
            </div>
            <div className="base-pricing" style={{ color: "white" }}>
              ${totalCost}
            </div>

            <div>
              {cost.map((costs, index) => (
                <Grid
                  container
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <p style={{ color: "white" }}>{costs.counter}</p>
                  <p style={{ fontWeight: "600", color: "white" }}>
                    {costs.type}{" "}
                  </p>

                  <p style={{ fontWeight: "600", color: "white" }}>
                    {costs.price}
                  </p>
                </Grid>
              ))}
            </div>
          </Box>
          <button className="cost-btn" onClick={() => setOpenDialog(true)}>
            Get Detailed Quote
          </button>
          <FormDialog
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            finalCost={totalCost}
            countOfItems={countValues}
          />
        </Grid>
        <Typography style={{ width: "600px", paddingTop: "25px" }}>
          *This calculator is set to the base package and cannot go lower. The
          quote presented here is an estimation and not the final quote.
        </Typography>
      </Grid>
    </div>
  );
}
