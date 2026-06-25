import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact";

const app = express();
const port = Number(process.env.PORT ?? 4000);

// Allow the frontend origin(s). Comma-separate multiple in CORS_ORIGIN.
const allowedOrigins = (process.env.CORS_ORIGIN ?? "http://localhost:3000")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "100kb" }));

// Health check
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-backend" });
});

// API routes
app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`[backend] API listening on http://localhost:${port}`);
  console.log(`[backend] Allowed origins: ${allowedOrigins.join(", ")}`);
});
